import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import React, { useEffect, useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userPersist = localStorage.getItem("persist:root");
    const currentUser = userPersist && JSON.parse(JSON.parse(userPersist).user).currentUser;
    setIsAdmin(currentUser && currentUser.isAdmin);
    setIsLoggedIn(currentUser);
  }, []);

  return (
    <>
      {isLoggedIn && isAdmin ? (
        <Router>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
