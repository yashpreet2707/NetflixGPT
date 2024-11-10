import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <div className='absolute flex justify-between pl-28 pr-10 py-2 bg-gradient-to-b from-black w-full z-10'>
            <img className='z-10 w-44' src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="logo" />
        </div>

        <div className='flex justify-center items-center h-[80vh] text-4xl'>
            Looks like you ran to an Error!
        </div>
    </div>
  )
}

export default ErrorPage