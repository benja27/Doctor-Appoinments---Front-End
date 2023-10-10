import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import { useState } from 'react'

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true)

  if(currUser)
    return (
        <>
            <h1>Hello {currUser.name}</h1>
            <PrivateText currUser = {currUser} />
            <Logout setCurrUser={setCurrUser} />
       
        </>
    )
    return (
        <>
        {
            show ?
            <Login setCurrUser={setCurrUser} setShow={setShow}/>
            :          
                <Signup setCurrUser={setCurrUser} setShow={setShow}/>
                

          
           
        }
        </>
    )
}

export default User