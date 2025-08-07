import { useState } from 'react'
import { UserProvider } from './UserContext'
import UserProfile from './components/UserProfile'
import './App.css'
import UpdateUser from './components/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  )
}

export default App
