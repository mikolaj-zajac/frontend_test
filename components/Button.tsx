import React, { useState } from "react";
import styles from "@/styles/button.module.scss"
import "../styles/globals.scss";

interface Props {
  textContent: string;
  onClick: (arg0: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  popup: boolean;
  
}

export const Button: React.FC<Props> = ({
  textContent,
  onClick,
  popup
}) => {
  return (
    <button
      type="button"
      className={!popup?styles.normal:styles.popup}
      onClick={(e) => onClick(e)}
    >
      {textContent}
    </button>
  );
};
