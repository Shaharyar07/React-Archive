import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert,list }) => {
  useEffect(() => {
    const clearAlert = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(clearAlert);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};
export default Alert;
