import React from 'react'
import Input from './input'
import RadioInput from './RadioInput'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate=useNavigate();
  return (
    <div className='flex items-center justify-center h-screen'>
       <div className='w-[375px] h-[700px] bg-[#F7F8F9] border border-slate-200 flex flex-col gap-7 pt-[1.5rem] items-center rounded'>

        <div className='w-[90%]'>
        <div className='font-semibold text-[28px] text-[#1D2226]'>
         Create your <br /> PopX account
         </div>
        </div>

         <Input label={'Full Name'} placeholder={'Marry-Doe'} isRequired={true}></Input>
         <Input label={'Phone number'} placeholder={'Marry-Doe'} isRequired={true}></Input>
         <Input label={'Email address'} placeholder={'Marry-Doe'} isRequired={true}></Input>
         <Input label={'Password'} placeholder={'Marry-Doe'} isRequired={true}></Input>
         <Input label={'Company name'} placeholder={'Marry-Doe'} isRequired={false}></Input>
        
        <div className='w-[90%]'>
        <RadioInput></RadioInput>
        </div>
         <div className='h-full  flex flex-col items-center justify-end pb-5'>
         <button onClick={()=>{
            navigate('/signin');
        }} className='bg-[#6C25FF] hover:bg-[#6b5498] text-white font-semibold pt-2 pb-2 w-[330px] rounded '>
          Create Account
        </button>
         </div>
       </div>

    </div>
  )
}
