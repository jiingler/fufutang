import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [y, setY] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    setY(window.scrollY);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      if (window.location.pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [y]);

  useEffect(() => {}, [location]);

  return (
    <header
      className={`nav ${
        y <= 10 && location.pathname === "/" ? "transparent" : ""
      }`}
    >
      <nav className={`py-2 w-100`}>
        <div className="wrap w-100 d-flex align-items-center">
          <div className="w-100 d-flex justify-content-between px-3">
            <div className="logo d-flex align-items-center ms-lg-5 ms-0">
              <Link title="福福堂中醫診所 Fu Fu Tang | 高雄中醫" to="/">
                <h1 className={`${y <= 10 ? "" : "smallScale"}`}>
                  福福堂中醫診所 Fu Fu Tang | 高雄中醫
                </h1>
              </Link>
            </div>
            <div className="d-flex me-lg-5 me-0">
              <Menu scrollY={y} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
