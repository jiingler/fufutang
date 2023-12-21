import Link from "next/link";
import { useState, useEffect } from "react";
import { isMobile, isBrowser } from "react-device-detect";
import Menu from "./Menu";

import styles from "@/styles/modules/header.module.scss";
import { useRouter } from "next/router";

const Header = ({}) => {
  const [isShrunk, setShrunk] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
    router.events.on("routeChangeStart", (url) => {
      setPath(url);
    });
  }, []);

  useEffect(() => {
    const handler = () => {
      // console.log(document.body.scrollTop);
      // console.log(document.documentElement.scrollTop);
      // Check and update component here.
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop >= 10 ||
            document.documentElement.scrollTop >= 10)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 10 &&
          document.documentElement.scrollTop < 10
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    if (isMobile) {
      window.addEventListener("touchmove", handler);
      return () => window.removeEventListener("touchmove", handler);
    } else {
      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }
  }, []);

  return (
    <header
      className={`${styles.nav} ${
        !isShrunk && isBrowser && path === "/" ? styles.transparent : ""
      }`}
    >
      <nav className={`py-2 w-100`}>
        <div className="wrap w-100 d-flex align-items-center">
          <div className="w-100 d-flex justify-content-between align-items-center pe-3">
            <div
              className={`${styles.logo} d-flex align-items-center ms-xl-5 ms-md-3 ms-0`}
            >
              <Link title="福福堂中醫診所 Fu Fu Tang | 高雄中醫" href="/">
                <h1 className={`${!isShrunk ? "" : styles.smallScale}`}>
                  福福堂中醫診所 Fu Fu Tang | 高雄中醫
                </h1>
              </Link>
            </div>
            <div className="d-flex me-xl-5 me-md-3 me-0">
              <Menu isShrunk={isShrunk} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
