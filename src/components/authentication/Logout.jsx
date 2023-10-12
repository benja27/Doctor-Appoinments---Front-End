import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/currentUser/currentUserSlice";

const Logout = () => {
    const dispatch = useDispatch()
   
    const handleClick = e => {
        e.preventDefault();
        dispatch(logoutUser())
       
    }
    return (
        <input type="submit" value="Logout" onClick={handleClick} />
    )
}

export default Logout;