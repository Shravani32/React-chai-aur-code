import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider className='text-green-900'>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App