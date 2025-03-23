import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Setting() {
  const navigate=useNavigate();
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-[375px] h-[700px] bg-[#F7F8F9] border border-slate-200 rounded'>
        <div className='w-full bg-white h-[68px] text-[#1D2226] font-semibold flex items-center pl-3'>
          Account Settings
        </div>
        <div className='flex gap-5 p-4'>
          <div className='relative w-[76px]'>
          <img className='' src="/img1.png" alt="" />
          <img className='z-10 absolute bottom-1 right-[0.5px] ' src="/img2.png" alt="" />
          </div>
           <div>
            <div className='font-semibold'>Marry Doe</div>
            <div>Marry@Gmail.Com</div>
           </div>

        </div>

        <div className='p-4 text-[14px] font-medium'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>

        <div className='border-y  border-dashed h-[25rem] border-spacing-2 border-slate-400'>

        </div>
      </div>
    </div>
  )
}
