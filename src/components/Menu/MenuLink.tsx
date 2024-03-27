import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuState } from "../../hooks/hooks";
import styles from "../Menu/Menu.css";

type MenuLinkProps = {
  children: ReactNode;
  route: string;
};

export function MenuLink({ children, route }: MenuLinkProps) {
  const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuState);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Link className={styles.menu__section} to={route} onClick={handleClick}>
      {children}
    </Link>
  );
}
