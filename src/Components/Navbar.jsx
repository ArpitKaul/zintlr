import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='bg-customGray h-24   '>
        <div className='flex   '>
            <div className='flex'>
                <img className='ml-8 mt-3 rounded-full' src="https://i.tracxn.com/logo/company/Screenshot_2023-05-11_105325_2278b7e2-26a5-40d9-bd24-a3fd59659976.png?height=&width=60" alt="" />
                <h1 className='text-yellow mt-6 text-xl font-semibold ml-1'>Zintlr</h1>
            </div>
            <ul className='flex text-white gap-10 w-fit mt-6 text-lg'>
                <li className='cursor-pointer ml-16'>Home</li>
                <li className='cursor-pointer'>Use case</li>
                <li className='cursor-pointer'>product</li>
                <li className='cursor-pointer'>pricing</li>
                <li className='cursor-pointer'>why us</li>
                <li className='cursor-pointer'>Community</li>
            </ul>
            <div className=' flex  ml-auto text-[15px] items-center mr-8 gap-4  ' >
                <button className='cursor-pointer text-yellow hover:bg-yellow w-20 h-8 hover:text-black rounded-lg'>Login</button>
                <button className='cursor-pointer text-black bg-yellow rounded-lg w-20 h-8 '>SignUp</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
