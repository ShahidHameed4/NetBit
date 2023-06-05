import React from 'react'

import PageTitle from '../../components/Typography/PageTitle'
import SectionTitle from '../../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea ,Button } from '@windmill/react-ui'

import { useState } from 'react'


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
          <Label>
            <span>User ID</span>
            <Input
              className="mt-1"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Label>

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
            <span>Image URL</span>
            <Input
              className="mt-1"
              placeholder="Image URL"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </Label>

          <Label className="mt-4">
            <span>Video URL</span>
            <Input
              className="mt-1"
              placeholder="Video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </Label>

          <Label className="mt-4">
            <span>Image</span>
            <Input type="file" className="mt-1" onChange={handleImageUpload} />
          </Label>

          <Label className="mt-4">
            <span>Video</span>
            <Input type="file" className="mt-1" onChange={handleVideoUpload} />
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
