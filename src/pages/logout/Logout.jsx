import {useDispatch} from "react-redux";
import {logout } from "../../redux/apiCalls";

const Logout = () => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        logout(dispatch);
    };

    return (
        <div 
            style={{
                    height:"100vh",
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: "center", 
                    justifyContent: "center",
                }}
            >
            <button onClick={handleClick} style={{padding:10, width:100}}>Logout</button>
        </div>
    );
};

export default Logout;