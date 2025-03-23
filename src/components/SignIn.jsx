import React from 'react'
import Input from './input'
import { useNavigate } from 'react-router-dom'


export default function Signin() {
  const navigate=useNavigate()
  return (
    <div className='flex items-center justify-center h-screen'>
       <div className='w-[375px] h-[700px] bg-[#F7F8F9] border border-slate-200 flex flex-col gap-7 pt-[1.5rem] items-center rounded'>

        <div className='w-[90%]'>
        <div className='font-semibold text-[28px] text-[#1D2226]'>
        Signin to your <br /> PopX account
         </div>
         <div className='text-[#838282] mt-2'>
         Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
         </div>
        </div>

         <Input label={'Email address'} placeholder={'Enter email address'} isRequired={true}></Input>
         <Input label={'Password'} placeholder={'Enter password'} isRequired={true}></Input>

        <button onClick={()=>{
            navigate('/setting')
          }} className='bg-[#CBCBCB] hover:bg-[#9c9b9b] text-white font-semibold pt-2 pb-2 w-[330px] rounded '>
            Login
          </button>
        
       </div>

    </div>
  )
}