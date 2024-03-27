import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import burger from "../../assets/icons/burger.svg";
import logoImg from "../../assets/images/logo.svg";
import { menuState } from "../../hooks/hooks";
import { Menu } from "../Menu/Menu";
import styles from "./Header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.header__logo} src={logoImg} alt="Logo" />
      </Link>
      <img
        className={styles.header__burger}
        onClick={handleClick}
        src={burger}
        alt="Toggle menu"
      />
      {isMenuOpen && <Menu />}
    </header>
  );
}
