import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate();
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-[375px] h-[700px] bg-[#F7F8F9] border border-slate-200 flex flex-col items-center justify-end pb-7 gap-5 rounded'>

        <div className='w-[335px]'>
        <div className='text-[#1D2226] text-2xl font-semibold'>Welcome to PopX</div>
        <div className='text-[#1d2226b0]'>Lorem ipsum dolor sit amet,
          <br />
           consectetur adipiscing elit,</div>
        </div>
        <div className='flex flex-col gap-2'>
        <button onClick={()=>{
          navigate('/signup')
        }} className='bg-[#6C25FF]  hover:bg-[#8a59ee] rounded text-white pt-1.5 pb-1.5 w-[335px]'>
          Create Account
        </button>
        <button onClick={()=>{
          navigate('/signin')
        }} className='bg-[#6C25FF4B] hover:bg-[#ab89f0] font-semibold pt-1.5 pb-1.5 w-[335px] rounded '>
          Already Registered?Login
        </button>
        </div>
      </div>
    </div>
  )
}
