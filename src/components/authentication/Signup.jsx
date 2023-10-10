import { useRef } from "react";

const Signup = ({setCurrUser, setShow}) => {
    const formRef = useRef();
    const signup = async (userInfo, setCurrUser) => {
        const url = "http://localhost:3001/signup"
        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            if(!res.ok) throw data.error
            localStorage.setItem("token", res.headers.get("Authorization"))
            setCurrUser(data.data)
            localStorage.setItem("user", JSON.stringify(data.data))
            
        } catch (error) {
            alert(error)
            console.log("error", error)
        }
    }

        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current);
            const data = Object.fromEntries(formData);
            const userInfo = {
                "user": {
                    "name": data.name,
                    "email": data.email,
                    "password": data.password
                }

            }
            signup(userInfo, setCurrUser)
            e.target.reset();
        }
        const handleClick = e => {
            e.preventDefault();
            setShow(true)
        }

        return (
            <>
                <form ref={formRef} onSubmit={handleSubmit}>
                Name: <input type="text" name="name" placeholder="name" />
                          <br />
                   Email: <input type="email" name="email" placeholder="email" />
                   <br />
                     Password: <input type="password" name="password" placeholder="password" />
                     <br />    
                     <input type="submit" value="Signup" />
                </form>
                <br />
                <div> 
                    Already registered, <a href="#login" onClick={handleClick}>Login</a> here.
                </div>
            </>
        )
    
}

export default Signup;
