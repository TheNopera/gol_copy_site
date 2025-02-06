import React from 'react'

interface FilledBtnProps {
    text: string;
    destination: string;
  }


const FilledBtn: React.FC<FilledBtnProps> = ({text, destination}) => {
  return (
    <button className='w-[101px] h-[48px] bg-orange-500 rounded-full '>
        <a href={destination}>{text}</a>
    </button>
  )
}

export default FilledBtn