import React from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea ,Button } from '@windmill/react-ui'

import { useState } from 'react'

import { MailIcon } from '../icons'

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
      <PageTitle>Forms</PageTitle>
      <CTA />
      <SectionTitle>Elements</SectionTitle>

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
          <Input
  type="file"
  accept="image/*"
  className="mt-1"
  // onChange={handleFileSelect}
/>

{file && (
  <div className="mt-4">
    <span>Upload Progress:</span>
    <progress value={uploadProgress} max="100" />
    <span>{uploadProgress}%</span>
  </div>
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




      <form onSubmit={handleSubmit}>
  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <Label>
      <span>Name</span>
      <Input className="mt-1" placeholder="Jane Doe" />
    </Label>

    <Label className="mt-4">
      <span>Age</span>
      <Input className="mt-1" placeholder="25" />
    </Label>

    <Label className="mt-4">
      <span>Image</span>
      <Input className="mt-1" placeholder="Image URL" />
    </Label>

    

    <Label className="mt-4">
      <span>Bio</span>
      <Textarea className="mt-1" rows="3" placeholder="Enter your bio." />
    </Label>

    <Label className="mt-4">
      <span>Facebook</span>
      <Input className="mt-1" placeholder="Facebook URL" />
    </Label>

    <Label className="mt-4">
      <span>Instagram</span>
      <Input className="mt-1" placeholder="Instagram URL" />
    </Label>

    <Label className="mt-4">
      <span>Twitter</span>
      <Input className="mt-1" placeholder="Twitter URL" />
    </Label>

    <Label className="mt-4">
      <span>IMDb</span>
      <Input className="mt-1" placeholder="IMDb URL" />
    </Label>

    <div className="mt-6">
      <Button type="submit">Submit</Button>
    </div>
  </div>
</form>



      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Name</span>
          <Input className="mt-1" placeholder="Jane Doe" />
        </Label>

        <Label className="mt-4">
          <span>Disabled</span>
          <Input disabled className="mt-1" placeholder="Jane Doe" />
        </Label>

        <div className="mt-4">
          {/* TODO: Check if this label is accessible, or fallback */}
          {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
          <Label>Account Type</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="personal" name="accountType" />
              <span className="ml-2">Personal</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="business" name="accountType" />
              <span className="ml-2">Business</span>
            </Label>
            <Label disabled className="ml-6" radio>
              <Input disabled type="radio" value="disabled" name="accountType" />
              <span className="ml-2">Disabled</span>
            </Label>
          </div>
        </div>

        <Label className="mt-4">
          <span>Requested Limit</span>
          <Select className="mt-1">
            <option>$1,000</option>
            <option>$5,000</option>
            <option>$10,000</option>
            <option>$25,000</option>
          </Select>
        </Label>

        <Label className="mt-4">
          <span>Multiselect</span>
          <Select className="mt-1" multiple>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </Select>
        </Label>

        <Label className="mt-4">
          <span>Message</span>
          <Textarea className="mt-1" rows="3" placeholder="Enter some long form content." />
        </Label>

        <Label className="mt-6" check>
          <Input type="checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </Label>
      </div>

      <SectionTitle>Validation</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Invalid input</span>
          <Input className="mt-1" valid={false} placeholder="Jane Doe" />
          <HelperText valid={false}>Your password is too short.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Valid input</span>
          <Input className="mt-1" valid={true} placeholder="Jane Doe" />
          <HelperText valid={true}>Your password is strong.</HelperText>
        </Label>

        <Label className="mt-4">
          <span>Helper text</span>
          <Input className="mt-1" placeholder="Jane Doe" />
          <HelperText>Your password must be at least 6 characters long.</HelperText>
        </Label>
      </div>

      {/* <!-- Inputs with icons --> */}
      <SectionTitle>Icons</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Icon left</span>
          {/* <!-- focus-within sets the color for the icon when input is focused --> */}
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>

        <Label className="mt-4">
          <span className="text-gray-700 dark:text-gray-400">Icon right</span>
          {/* <!-- focus-within sets the color for the icon when input is focused --> */}
          <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
            <input
              className="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </div>
          </div>
        </Label>
      </div>

      {/* <!-- Inputs with buttons --> */}
      <SectionTitle>Buttons</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Button left</span>
          <div className="relative">
            <input
              className="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              Click
            </button>
          </div>
        </Label>

        <Label className="mt-4">
          <span>Button right</span>
          <div className="relative text-gray-500 focus-within:text-purple-600">
            <input
              className="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Click
            </button>
          </div>
        </Label>
      </div>
    </>
  )
}

export default Forms
