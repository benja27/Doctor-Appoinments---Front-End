const Logout = ({setCurrUser}) => {
    const logout = async (setCurrUser) => {
        try{
            const url = "http://localhost:3001/logout"
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                },
            })
            const data = await res.json();
            if(!res.ok) throw data.error
            localStorage.removeItem("token")
            setCurrUser(null)
                       
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }
    const handleClick = e => {
        e.preventDefault();
        logout(setCurrUser)
        localStorage.removeItem("user")
    }
    return (
        <input type="submit" value="Logout" onClick={handleClick} />
    )
}

export default Logout;