import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import {addUser, removeUser} from "../utils/userSlice"
import ErrorPage from './ErrorPage'
const Body = () => {

    const dispatch = useDispatch() ;

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/error',
            element: <ErrorPage />
        },

    ])

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              // update my store
              dispatch(addUser({
                uid: uid, 
                email: email, 
                displayName: displayName
              }))
            } else {
              // User is signed out
              // update my store
              dispatch(removeUser())
            }
          });
    },[])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body