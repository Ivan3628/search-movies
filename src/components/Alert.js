import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`w-full bg-${alert.type} px-4 py-2 rounded`}>
        <p className="text-white text-center font-mono">{alert.msg}</p>
      </div>
    )
  );
};

export default Alert;
