import React from 'react';

interface ProgressTypes {
    file: File,
    progressPercentage: number
}

const ProgressBar = ({file, progressPercentage}: ProgressTypes) => {
  return (
    <>
        <div className="flex w-[80%] justify-between mb-1">
          <span className="text-base font-medium text-yellow dark:text-white">{file?.name}</span>
          <span className="text-md font-medium text-white dark:text-white">{progressPercentage}%</span>
        </div>
        <div className="w-[80%] bg-gray-200 rounded-full h-2.5 text-yellow-700 dark:text-yellow-500">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
        </div>
    </>
  )
}

export default ProgressBar