import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";

import axios from "axios";
import Homepage from "./pages/Home";
import ScrollToTop from "./components/shared/ScrollToTop";
import About from "./pages/About";
import FactAboutNipr from "./pages/FactAboutNipr";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";
import RegisterForEvent from "./pages/RegisterForEvent";
import ComingSoon from "./pages/ComingSoon";
import Profile from "./pages/Profile";
import UpdatePassword from "./pages/UpdatesPassword";
import AccountLayout from "./components/layout/AccountLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Membership from "./pages/Membership";

axios.defaults.baseURL = "https://api.voranaija.com/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/about">
            <Route index element={<About />} />
            <Route path="facts-about-nipr" element={<FactAboutNipr />} />
          </Route>
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<SingleEvent />} />
          <Route path="events/:slug/register" element={<RegisterForEvent />} />
          <Route path="membership" element={<Membership />} />
          <Route path="gallery" element={<ComingSoon />} />
          <Route path="resources" element={<ComingSoon />} />
          <Route path="news" element={<ComingSoon />} />
        </Route>
        <Route path="account" element={<AccountLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="passwords" element={<UpdatePassword />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
