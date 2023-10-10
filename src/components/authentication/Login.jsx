import { useRef } from "react";

const Login = ({setCurrUser, setShow}) => {
    const formRef = useRef();
    const login = async (userInfo, setCurrUser) => {
        const url = "http://localhost:3001/login"
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
            setCurrUser(data.status.data.user)
            localStorage.setItem("user", JSON.stringify(data.status.data.user))
            
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
                    "email": data.email,
                    "password": data.password
                }

            }
            login(userInfo, setCurrUser)
            e.target.reset();
        }
        const handleClick = e => {
            e.preventDefault();
            setShow(false)
        }

        return (
            <>
                <form ref={formRef} onSubmit={handleSubmit}>
                    Email: <input type="email" name="email" placeholder="email" />
                    <br />
                      Password: <input type="password" name="password" placeholder="password" />
                      <br />    
                      <input type="submit" value="Login" />
                </form>
                <br />
                <div> 
                    Not registered, <a href="#signup" onClick={handleClick}>Signup</a> here.
                </div>
            </>
        )
}

export default Login;