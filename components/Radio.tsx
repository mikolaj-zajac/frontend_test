import React, { useState } from "react";
import styles from "../styles/radio.module.scss";
import "../styles/globals.scss";

interface Props {
  textContent: string;
  onClick: (arg0: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  title?: string;
  name: string;
}

const ifChecked = () => {

}

export const Radio: React.FC<Props> = ({
  textContent,
  onClick,
  title,
  name
}) => {

  return (
      <label className={styles.label}>
        <input
          name={name}
          type="radio"
          className={styles.keker}
          onClick={(e) => onClick(e)}
          title={title}
          
        />
        <i></i>
        <span>{textContent}</span>
      </label>  
  );
};
