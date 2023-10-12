import Signup from './Signup'
import Login from './Login'

import { useState } from 'react'


const User = () => {
  const [show, setShow] = useState(true)


    return (
        <>
        {
            show ?
            <Login setShow={setShow}/>
            :          
                <Signup  setShow={setShow}/>
                

          
           
        }
        </>
    )
}

export default User