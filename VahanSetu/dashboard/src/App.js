import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Request from "./Page/Request";
import User from "./Page/User"; // Import your User component
import Header from "./Componant/Header";
import Home from "./Componant/Home";
import Sidebar from "./Componant/Sidebar";
import Distributor from "./Page/Distributor";
import Sale from "./Page/Sale";
import Setting from "./Page/Setting";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const location = useLocation();

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const isLoginOrSignupPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="grid-container">
      {!isLoginOrSignupPage && <Header OpenSidebar={OpenSidebar} />}
      {!isLoginOrSignupPage && (
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
      )}
      {/* {<Header OpenSidebar={OpenSidebar} />}
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      /> */}
      {/* {<Home />} */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<User />} path="/user" />
        <Route element={<Request />} path="/request" />
        <Route element={<Sale/>} path="/sale"/>
        <Route element={<Distributor/>} path="/distributor"/>
        <Route element={<Setting/>} path="/setting"/>
       
      </Routes>


    </div>
  );
}

export default App;
