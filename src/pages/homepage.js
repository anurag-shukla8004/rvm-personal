import React from "react";
import Dashbord from "../components/dashbord/dashbord";
import SideNav from "../components/navBar/SideNav";
import NavBar from "../components/navBar/TopNavbar";
import { useAuthContext } from "../context/AuthContext";

function Homepage() {
  const { token } = useAuthContext();
  console.log(token, "Token on home page");
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <NavBar title="Dashbord"/>
      <Dashbord />
    </div>
  );
}

export default Homepage;
