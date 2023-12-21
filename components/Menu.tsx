import * as React from "react";
import { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";

import styles from "@/styles/modules/menu.module.scss";
import { useRouter } from "next/router";
type MenuProps = {
  isShrunk: boolean;
};

const Menu: React.FC<MenuProps> = ({ isShrunk }) => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
    router.events.on("routeChangeStart", (url) => {
      setPath(url);
    });
  }, []);
  const onClick = () => {
    setShowMenu(!showMenu);
    const root = document.querySelector("#__next") as HTMLDivElement;
    root.style.overflowY = showMenu ? "auto" : "hidden";
  };

  const closePhoneMenu = () => {
    setShowMenu(false);
    const root = document.querySelector("#__next") as HTMLDivElement;
    root.style.overflowY = showMenu ? "auto" : "hidden";
    root.scrollTop = 0;
  };

  return (
    <nav role="navigation">
      <ul
        className={`${styles.menu} d-md-flex d-none ${
          !isShrunk && path === "/" ? styles.white : styles.black
        }
          ${!isShrunk ? styles.hightBar : styles.lowBar}`}
      >
        <li>
          <Link href="/news">最新消息</Link>
        </li>
        <li>
          <Link href="/articles">健康專欄</Link>
        </li>
        <li>
          <Link href="/doctors">醫師介紹</Link>
        </li>
        <li>
          <Link href="/clinics">診所介紹</Link>
        </li>
        <li>
          <Link href="/services">服務項目</Link>
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
        className={`${styles.reservationBtn} d-md-none d-block position-absolute`}
      >
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
      </div>
      <div
        className={`${styles.hamburger} d-md-none d-block position-absolute`}
        onClick={onClick}
      >
        {showMenu ? (
          <span className={`material-icons ${styles.icon} ${styles.black}`}>
            close
          </span>
        ) : (
          <span
            className={`material-icons ${styles.icon} ${styles.black}
            }`}
          >
            menu
          </span>
        )}
      </div>
      <div
        className={`${styles.phoneMenu} position-absolute d-md-none ${
          showMenu ? styles.show : styles.hide
        } `}
      >
        <ul className={styles.list}>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link href="/news">最新消息</Link>
          </li>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link href="/articles">健康專欄</Link>
          </li>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link href="/doctors">醫師介紹</Link>
          </li>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link href="/clinics">診所介紹</Link>
          </li>
          <li className="py-3" onClick={closePhoneMenu}>
            <Link href="/services">服務項目</Link>
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
