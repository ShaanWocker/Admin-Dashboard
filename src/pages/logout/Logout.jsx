import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/apiCalls";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await logout(dispatch).then(() => {
      navigate("/login");

      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
