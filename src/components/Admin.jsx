import { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

export default function Admin() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <>
      {/* Sample Dashboard */}
      <div className='justify-center items-center'>
        <img className='w-40 h-40 rounded-full self-center ' src='https://images.unsplash.com/photo-1619944797233-5affe9ba58a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' />
      </div>
    </>
  )
}