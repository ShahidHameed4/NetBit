import React from 'react'

import PageTitle from '../../components/Typography/PageTitle'
import SectionTitle from '../../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea ,Button } from '@windmill/react-ui'

import { useState,useEffect } from 'react'

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";



function Forms() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [imdb, setImdb] = useState('');
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);


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

          urlType === "imgUrl" ? setImage(downloadURL): setImage(downloadURL);

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



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      age,
      image,
      bio,
      facebook,
      instagram,
      twitter,
      imdb,
    };

    // Send the form data to the backend
    // You need to implement this part


    fetch("http://localhost:8800/api/actor/addactor", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("adminToken")}`,
      },
      body: JSON.stringify(formData),
    })


    console.log(formData);

    setName('');
    setAge('');
    setImage('');
    setBio('');
    setFacebook('');
    setInstagram('');
    setTwitter('');
    setImdb('');
    setIsSubmitting(false);
  };

  return (
    <>
      <PageTitle>Actor</PageTitle>
      <SectionTitle>Add Actor</SectionTitle>

      <form onSubmit={handleSubmit}>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Name</span>
          <Input
            className="mt-1"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <span>Age</span>
          <Input
            className="mt-1"
            placeholder="25"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Label>

        

        <Label className="mt-4">
          <span>Bio</span>
          <Textarea
            className="mt-1"
            rows="3"
            placeholder="Enter your bio."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>Facebook</span>
          <Input
            className="mt-1"
            placeholder="Facebook URL"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>Instagram</span>
          <Input
            className="mt-1"
            placeholder="Instagram URL"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </Label>

        <Label className="mt-4">
          <span>Twitter</span>
          <Input
            className="mt-1"
            placeholder="Twitter URL"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </Label>

       


        <Label className="mt-4">
          <span>IMDb</span>
          <Input
            className="mt-1"
            placeholder="IMDb URL"
            value={imdb}
            onChange={(e) => setImdb(e.target.value)}
          />
        </Label>

        <div className="mt-6">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </div>
    </form>




     
    </>
  )
}

export default Forms
