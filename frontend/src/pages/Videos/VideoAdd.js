import React from 'react'

import PageTitle from '../../components/Typography/PageTitle'
import SectionTitle from '../../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea ,Button } from '@windmill/react-ui'
import axios from 'axios'

import { useState } from 'react'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";

import { useEffect } from 'react'


function Forms() {

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);


  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});

  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        urlType === "imgUrl" ? setImgPerc(Math.round(progress)) : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          urlType === "imgUrl" ? setImgUrl(downloadURL):setVideoUrl(downloadURL)

          setInputs((prev) => {
            return { ...prev, [urlType]: downloadURL };
          });
        });
      }
    );
  };

  useEffect(() => {
    video && uploadFile(video , "videoUrl");
  }, [video]);

  useEffect(() => {
    img && uploadFile(img, "imgUrl");
  }, [img]);



  const actorList = [
    { id: 1, name: 'Actor 1' },
    { id: 2, name: 'Actor 2' },
    { id: 3, name: 'Actor 3' },
    // Add more actors to the list
  ];

  const handleTagChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags(selectedOptions);
  };

  const handleActorChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedActors(selectedOptions);
  };



const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImgFile(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      userId,
      title,
      desc,
      imgUrl,
      videoUrl,
      tags,
      selectedActors,
    };

    // Send the form data to the backend using API or other means
    // You need to implement this part

    fetch("http://localhost:8800/api/videos", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
      },
      body: JSON.stringify(formData),
    })


    // const res = axios.post("http://localhost:8800/api/videos", formData, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
    //   },
    // })
    
    // if (res.status===200) {


    // } 
    console.log(formData);

    // Reset the form inputs
    setUserId('');
    setTitle('');
    setDesc('');
    setImgUrl('');
    setVideoUrl('');
    setTags([]);
    setSelectedActors([]);
  };

  return (
    <>
      <PageTitle>Actor</PageTitle>
      {/* <CTA /> */}
      <SectionTitle>Add Actor</SectionTitle>

      <form onSubmit={handleSubmit}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          {/* <Label>
            <span>User ID</span>
            <Input
              className="mt-1"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Label> */}



          <Label className="mt-4">
            <span>Title</span>
            <Input
              className="mt-1"
              placeholder="Video Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Label>

          <Label className="mt-4">
            <span>Description</span>
            <Input
              className="mt-1"
              placeholder="Video Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Label>

         

<Label className="mt-4">
            <span>Image</span>
            {imgPerc > 0 ? (
          "Uploading:" + imgPerc
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
        )}
          </Label>

          <Label className="mt-4">
            <span>Video</span>
            {videoPerc > 0 ? (
          "Uploading:" + videoPerc
        ) : (
          <Input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
          </Label>

          

          

          <Label className="mt-4">
            <span>Tags</span>
            <Select
              multiple
              className="mt-1"
              value={tags}
              onChange={handleTagChange}
            >
              <option value="tag1">Tag 1</option>
              <option value="tag2">Tag 2</option>
              <option value="tag3">Tag 3</option>
              {/* Add more tags as needed */}
            </Select>
          </Label>

          <Label className="mt-4">
            <span>Actors</span>
            <Select
              multiple
              className="mt-1"
              value={selectedActors}
              onChange={handleActorChange}
            >
              {actorList.map((actor) => (
                <option key={actor.id} value={actor.id}>
                  {actor.name}
                </option>
              ))}
            </Select>
          </Label>

          <div className="mt-6">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Forms
