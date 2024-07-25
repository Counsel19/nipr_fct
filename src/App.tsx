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

axios.defaults.baseURL = "https://api.voranaija.com/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/about">
            <Route index element={<About />} />
            <Route path="facts-about-nipr" element={<FactAboutNipr />} />
          </Route>
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<SingleEvent />} />
          <Route path="events/:slug/register" element={<RegisterForEvent />} />
          <Route path="membership" element={<ComingSoon />} />
          <Route path="gallery" element={<ComingSoon />} />
          <Route path="resources" element={<ComingSoon />} />
          <Route path="news" element={<ComingSoon />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
