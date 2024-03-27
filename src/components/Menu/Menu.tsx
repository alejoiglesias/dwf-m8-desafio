import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import closeIcon from "../../assets/icons/close.svg";
import { menuState, userToken } from "../../hooks/hooks";
import styles from "./Menu.css";
import { MenuFooter } from "./MenuFooter";
import { MenuLink } from "./MenuLink";

const MENU_LINKS = [
  { to: "/profile", text: "Mis datos" },
  { to: "/reports", text: "Mis mascotas reportadas" },
  { to: "/new-report", text: "Reportar mascota" },
];

export function Menu() {
  const token = useRecoilValue(userToken);
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  const renderMenuLinks = () =>
    MENU_LINKS.map((link) => (
      <MenuLink key={link.to} route={link.to}>
        {link.text}
      </MenuLink>
    ));

  return (
    <div className={styles.menu}>
      <img
        className={styles.menu__close}
        onClick={handleClick}
        src={closeIcon}
        alt="Close menu"
      />
      <nav className={styles.menu__container}>
        {renderMenuLinks()}
        {token && <MenuFooter className={styles["menu__email--white"]} />}
      </nav>
    </div>
  );
}
