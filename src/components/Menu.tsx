import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "./Button";

type MenuProps = {
  isShrunk: boolean;
};

const Menu: React.FC<MenuProps> = ({ isShrunk }) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const onClick = () => {
    setShowMenu(!showMenu);
    const root = document.querySelector("#root") as HTMLDivElement;
    root.style.overflowY = showMenu ? "auto" : "hidden";
  };

  const closePhoneMenu = () => {
    setShowMenu(false);
    const root = document.querySelector("#root") as HTMLDivElement;
    root.style.overflowY = showMenu ? "auto" : "hidden";
  };

  return (
    <nav role="navigation">
      <ul
        className={`menu d-md-flex d-none ${
          !isShrunk && location.pathname === "/" ? "white" : "black"
        }
          ${!isShrunk ? "hightBar" : "lowBar"}`}
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
          <Link to="/services">服務項目</Link>
        </li>
        {/* <li>
          <a>文章分享</a>
        </li> */}
        <li className="ms-md-3 ms-1 d-flex align-items-center">
          <Button
            type="primary"
            text="我要預約"
            isOutlined={false}
            callback={() =>
              window.open(
                "https://gptcm.tw/GPNET/MainReg?CID=FFT&FormType=1",
                "_blank"
              )
            }
          />
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
            className={`material-icons black
            }`}
          >
            menu
          </span>
        )}
      </div>
      <div
        className={`phone-menu position-absolute d-sm-none ${
          showMenu ? "show" : "hide"
        } `}
      >
        <ul className="list">
          <li className="py-3" onClick={closePhoneMenu}>
            <Link to="/news">最新消息</Link>
          </li>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link to="/doctors">醫師介紹</Link>
          </li>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link to="/clinics">診所介紹</Link>
          </li>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link to="/services">服務項目</Link>
          </li>
          {/* <li className="py-3">
            <a>文章分享</a>
          </li> */}
          <li className="py-3 d-flex align-items-center">
            <Button
              type="primary"
              text="我要預約"
              isOutlined={false}
              callback={() => {
                closePhoneMenu();
                window.open(
                  "https://gptcm.tw/GPNET/MainReg?CID=FFT&FormType=1",
                  "_blank"
                );
              }}
            />
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
