import { RiAccountCircle2Line, RiArrowDropDownFill, RiArrowDropUpFill, RiNotification3Line, RiPencilLine, RiQuestionLine, RiSearchLine } from '@remixicon/react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase'
import {addUser, removeUser} from "../utils/userSlice"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AvatarImg, NetflixLogo } from '../utils/constants'

const Header = () => {

  const [isOpen, setisOpen] = useState(false)
  const navigate = useNavigate() ;
  const dispatch = useDispatch() ;

  const user = useSelector(store => store.user)

  const toggleDropDown = () => {
    setisOpen(!isOpen) ;
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(()=> {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          // update my store
          dispatch(addUser({
            uid: uid, 
            email: email, 
            displayName: displayName
          }))
          navigate('/browse')
        } else {
          // User is signed out
          // update my store
          dispatch(removeUser())
          navigate('/')
        }
      });

      // unsubscibe will be called when component unmounts
    return () => unsubscibe() ;
},[])

  return (
    <div className='absolute flex justify-between pl-10 xl:pl-28 pr-10 py-2 bg-gradient-to-b from-black w-screen z-20'>
        <img className='z-10 w-44 ' src={NetflixLogo} alt="logo" />
        {user && <div className='flex justify-evenly w-64 items-center text-lg'>
          <div className='hidden xl:block'><RiSearchLine /></div>
          <p className='hidden xl:block'>children</p>
          <div className='hidden xl:block'><RiNotification3Line /></div>
          <button className='flex items-center xl:ml-0 ml-24' onClick={toggleDropDown}>
            <img className='w-[42px] rounded-lg' src={AvatarImg} alt="" />
            {!isOpen ? <RiArrowDropDownFill size={36} /> : <RiArrowDropUpFill size={36} />}
          </button>
          {isOpen && <div className='absolute top-24 right-16 xl:right-20 pt-2 bg-[#E52114] w-[210px] text-lg'>
            <div className='absolute -top-7 right-0'><RiArrowDropUpFill size={44} /></div>
            <p className='flex items-center px-6 py-1 font-bold'>{user?.displayName}</p>
            <p className='flex items-center gap-x-2 px-5 py-1 cursor-pointer'><RiPencilLine /> Manage Profiles</p>
            <p className='flex items-center gap-x-2 px-5 py-1 cursor-pointer'><RiAccountCircle2Line /> Account</p>
            <p className='flex items-center gap-x-2 px-5 pt-1 pb-2 cursor-pointer'><RiQuestionLine /> Help Center</p>
            <button className='w-full py-3 hover:underline border-t border-white' onClick={handleSignOut}>Sign out of Netflix</button>
          </div>}
        </div>}
    </div>

  )
}

export default Header 