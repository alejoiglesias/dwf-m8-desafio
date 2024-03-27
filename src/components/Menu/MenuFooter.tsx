import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { menuState, userEmail, userToken } from "../../hooks/hooks";
import { LinkTag } from "../../ui/Texts/Link/Link";
import { Uppercase } from "../../ui/Texts/Uppercase/Uppercase";
import styles from "../Menu/Menu.css";

type MenuFooterProps = {
  className?: string;
};

export function MenuFooter({ className = "" }: MenuFooterProps) {
  const navigate = useNavigate();
  const setToken = useSetRecoilState(userToken);
  const setIsMenuOpen = useSetRecoilState(menuState);
  const email = useRecoilValue(userEmail);

  const emailClassName = `${styles.menu__email} ${className}`.trim();

  const handleClick = () => {
    localStorage.removeItem("pets");
    localStorage.removeItem("data");
    localStorage.removeItem("token");
    setToken(null);
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <div className={styles.menu__footer}>
      <Uppercase className={emailClassName}>{email}</Uppercase>
      <LinkTag className={styles.menu__logout} onClick={handleClick}>
        CERRAR SESIÓN
      </LinkTag>
    </div>
  );
}
