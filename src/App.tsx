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
import MembershipUpgrade from "./pages/MembershipUpgrade";
import MembershipForm from "./pages/MembershipForm";
import News from "./pages/News";
import Rosources from "./pages/Rosources";
import Gallery from "./pages/Gallery";
import PaymentPage from "./pages/PaymentPage";
import MembershipCategories from "./pages/MembershipCategories";

axios.defaults.baseURL = "https://api.voranaija.com/api";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="membership">
            <Route index element={<Membership />} />
            <Route path="categories" element={<MembershipCategories />} />
            <Route path="upgrade" element={<MembershipUpgrade />} />
            <Route path="join-as-student" element={<MembershipForm />} />
            <Route path="join-as-associate" element={<MembershipForm />} />
            <Route path="join-as-professional" element={<MembershipForm />} />
            <Route path="payment" element={<PaymentPage />} />
          </Route>
          <Route path="gallery" element={<Gallery />} />
          <Route path="resources" element={<Rosources />} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
        <Route path="account" element={<AccountLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="passwords" element={<UpdatePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
