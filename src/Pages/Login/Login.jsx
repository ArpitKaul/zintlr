import React from 'react'

const Login = () => {``
  return (
    <div>
      <div className='bg-[#0d1c28] w-full md:h-[42rem] md:pt-28 pt-28 h-[53rem]'>
        <div className='md:flex'>
            <div className='ml-8 md:mt-48 '>
                <div className='space-y-8'>
                <h1 className='text-white text-5xl font-semibold '>Ready to take your <br /> Business to the next level?</h1>
                <input className='bg-[#1a202c] text-white h-10 md:w-96 pl-4 rounded-xl border-none '  type="email" placeholder='yourname@gmail.com' />
                <button className="bg-[#fbbf24] text-black h-9 w-20 rounded-xl  ">Login</button>
                </div>
            </div>
                <div>
                <img className='md:ml-72 md:w-[30rem] md:h-[25rem] mt-10' src="https://zintlr.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fzintlr%2Fstatic%2Fauth%2Fauth_layout_OxKXKiiRh.webp%3Ftr%3Doptimized&w=640&q=75" alt="" />
                </div>    
        </div>
      </div>
    </div>
  )
}
export default Login
