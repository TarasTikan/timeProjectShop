import { Route, Routes } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";
import { Home } from "pages/Home/Home";
import { Contacts } from "pages/Contacts/Contacts";
import { useTransition, animated } from '@react-spring/web';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SideBar />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
