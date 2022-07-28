import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar.tsx';

const API_URL = 'http://localhost:5001/api/image/';

const ImageUpload = () => {
  const [file, setFile] = useState<File | any>();
  const [returnedFile, setReturnedFile] = useState<any>(null);
  const [isProgressActive, setIsProgressActive] = useState(false);
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    if (file) {
      uploadCoverImage();
      setIsProgressActive(true);
    }
  }, [file])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  }

  const uploadCoverImage = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(API_URL + 'upload', formData, {
         headers: { 'Content-Type': 'multipart/form-data'},
         onUploadProgress: progressEvent => {
          setProgressPercentage(Math.round((progressEvent.loaded * 100) / progressEvent.total));
         },
      });

      const { fileName, filePath } = response.data;

      setReturnedFile({ fileName, filePath });

    } catch (error: any) {
      renderError(error);
    }
  }

  const renderError = (error: any) => {
    if (error.response.status === 500) {
      alert('There was a problem with server');
    } else {
      alert(error.response.data.message);
    }
  }

  return (
      <div className="flex flex-col justify-center items-center h-[70vh]">
          <label htmlFor="dropzone-file" className="flex flex-col w-[40%] bg-sky-900 hover:bg-sky-800 justify-center items-center w-full h-64 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-2 text-md text-emerald-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-sm text-emerald-500">SVG, PNG, JPG</p>
              </div>
              <input onChange={(event) => handleFileChange(event)} accept='"image/png, image/jpeg"' id="dropzone-file" type="file" className="hidden" />
              { isProgressActive ? <ProgressBar file={file} progressPercentage={progressPercentage} /> : null }
          </label>

          <div className="mt-10">
            {returnedFile ? <img src={returnedFile.filePath} alt="Uploaded image" style={{ width: '300px', height: '400px' }} /> : null}
          </div>
      </div>
  )
}

export default ImageUpload;