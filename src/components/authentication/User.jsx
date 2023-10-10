import Signup from './Signup'
import Login from './Login'

import { useState } from 'react'


const User = ({ setCurrUser }) => {
  const [show, setShow] = useState(true)


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