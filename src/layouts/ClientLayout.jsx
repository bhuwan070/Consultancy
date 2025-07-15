import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/client/NavBar/Header";
import Footer from "../components/client/footer/footer";

const ClientLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
