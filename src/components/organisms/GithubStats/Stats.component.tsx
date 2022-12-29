import React from 'react'

interface Props {
  prelabel?: string
  postlabel?: string
  value?: number | string
}

export const Stats: React.FC<Props> = ({ prelabel, postlabel, value }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-gray-700 mb-2">{prelabel}</p>
      <div className="relative">
        <p className="text-6xl font-black">{value}</p>
        <p className="-z-10 text-6xl font-black absolute top-1 left-1 text-gray-400 whitespace-nowrap blur">
          {value}
        </p>
      </div>
      <p className="text-sm text-gray-700 mt-2">{postlabel}</p>
    </div>
  )
}
