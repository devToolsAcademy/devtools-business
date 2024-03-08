import React from "react";
import CardServices from "./CardServices";
import styles from "./Services.module.css";

export const Services = () => {
  return (
    <div className={styles["container-services"]}>
      <CardServices />
      <CardServices />
      <CardServices />
      <CardServices />
    </div>
  );
};
