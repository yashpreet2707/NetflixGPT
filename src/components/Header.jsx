import { RiAccountCircle2Line, RiArrowDropDownFill, RiArrowDropUpFill, RiNotification3Line, RiPencilLine, RiQuestionLine, RiSearchLine } from '@remixicon/react'
import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const [isOpen, setisOpen] = useState(false)
  const navigate = useNavigate() ;

  const user = useSelector(store => store.user)

  console.log(user.displayName)

  const toggleDropDown = () => {
    setisOpen(!isOpen) ;
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  return (
    <div className='absolute flex justify-between pl-28 pr-10 py-2 bg-gradient-to-b from-black w-full z-10'>
        <img className='z-10 w-44' src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="logo" />
        <div className='flex justify-evenly w-64 items-center text-lg'>
          <RiSearchLine />
          <p>children</p>
          <RiNotification3Line />
          <button className='flex items-center' onClick={toggleDropDown}>
            <img className='w-[42px] rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            {!isOpen ? <RiArrowDropDownFill size={36} /> : <RiArrowDropUpFill size={36} />}
          </button>
          {isOpen && <div className='absolute top-24 right-20 pt-2 bg-[#E52114] w-[210px] text-lg'>
            <div className='absolute -top-7 right-0'><RiArrowDropUpFill size={44} /></div>
            <p className='flex items-center gap-x-2 px-8 py-1 font-bold'>{user?.displayName}</p>
            <p className='flex items-center gap-x-2 px-5 py-1 cursor-pointer'><RiPencilLine /> Manage Profiles</p>
            <p className='flex items-center gap-x-2 px-5 py-1 cursor-pointer'><RiAccountCircle2Line /> Account</p>
            <p className='flex items-center gap-x-2 px-5 pt-1 pb-2 cursor-pointer'><RiQuestionLine /> Help Center</p>
            <button className='w-full py-3 hover:underline border-t border-white' onClick={handleSignOut}>Sign out of Netflix</button>
          </div>}
        </div>
    </div>

  )
}

export default Header 