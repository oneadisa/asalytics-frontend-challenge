import React from "react";
import styles from '../styles/Error.module.css'
// import { div } from "react-bootstrap";

const ErrorMessage = (props : {children: string}) => {
  return (
    <div className={styles.alert}>
  <span className={styles.closebtn} >&times;</span>
  <strong>{props.children}</strong>
</div>
  );
};
export default ErrorMessage;
