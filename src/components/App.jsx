import { Route, Routes, useLocation } from "react-router-dom";
import { SideBar } from "./SideBar/SideBar";
import { Home } from "pages/Home/Home";
import { Contacts } from "pages/Products/Products";
import { AnimatePresence } from "framer-motion";
export const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Contacts />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
