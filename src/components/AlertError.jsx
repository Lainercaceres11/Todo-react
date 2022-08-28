import React from "react";

const AlertError = ({children}) => {
  return (
    <div className="bg-red-600 font-bold text-center text-white p-3 mb-5 rounded-md">
      <p>{children}</p>
    </div>
  );
};

export default AlertError;
