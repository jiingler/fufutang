import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type MenuProps = {
  scrollY: number;
};

const Menu: React.FC<MenuProps> = ({ scrollY }) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const onClick = () => {
    setShowMenu(!showMenu);
    const root = document.querySelector("#root") as HTMLDivElement;
    root.style.overflowY = showMenu ? "auto" : "hidden";
  };

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);
  return (
    <nav>
      <ul
        className={`menu d-md-flex d-none ${
          scrollY <= 10 && location.pathname === "/" ? "white" : "black"
        }
          ${scrollY <= 10 ? "hightBar" : "lowBar"}`}
      >
        <li>
          <Link to="/news">最新消息</Link>
        </li>
        <li>
          <Link to="/doctors">醫師介紹</Link>
        </li>
        <li>
          <Link to="/clinics">診所介紹</Link>
        </li>
        <li>
          <a>服務項目</a>
        </li>
        <li>
          <a>文章分享</a>
        </li>
      </ul>
      <div
        className="hamburger d-md-none d-block position-absolute"
        onClick={onClick}
      >
        {showMenu ? (
          <span className={`material-icons black`}>close</span>
        ) : (
          <span
            className={`material-icons ${
              scrollY <= 10 && location.pathname === "/" ? "white" : "black"
            }`}
          >
            menu
          </span>
        )}
      </div>
      <div
        className={`phone-menu position-absolute ${
          showMenu ? "show" : "hide"
        } `}
      >
        <ul className="list">
          <li className="py-3">
            <Link to="/news">最新消息</Link>
          </li>
          <li className="py-3">
            <Link to="/doctors">醫師介紹</Link>
          </li>
          <li className="py-3">
            <Link to="/clinics">診所介紹</Link>
          </li>
          <li className="py-3">
            <a>服務項目</a>
          </li>
          <li className="py-3">
            <a>文章分享</a>
          </li>
        </ul>
      </div>

      {/* <ul className="text-size d-flex align-items-center">
        <li className="medium">大</li>
        <li className="large">大</li>
        <li className="xlarge">大</li>
      </ul> */}
    </nav>
  );
};

export default Menu;
