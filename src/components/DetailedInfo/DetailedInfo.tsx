import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import styles from "./DetailedInfo.module.scss";

export const DetailedInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <Outlet />
    </div>
  );
};
