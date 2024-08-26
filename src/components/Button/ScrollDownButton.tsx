"use client";

import { FC } from "react";
import styles from "./ScrollDownButton.module.css";

interface Props {
  title?: string;
  onClick?: () => void;
}

const ScrollDownButton: FC<Props> = ({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles.button}`}
    title={title}
  >
    <div className={`${styles.arrow} mx-auto`} />
  </button>
);

export default ScrollDownButton;
