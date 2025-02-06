import React from 'react'

interface OutlinedBtnProps {
  text: string;
  destination: string;
}

const OutlinedBtn: React.FC<OutlinedBtnProps> = ({ text, destination }) => {
  return (
    <button className='w-[127px] h-[48px] bg-white border border-black rounded-full '>
        <a href={destination}>{text}</a>
    </button>
  )
}

export default OutlinedBtn