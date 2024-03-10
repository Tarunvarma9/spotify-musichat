
import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location.reload();
  }, []);

  return (
    <></>
  );
};

export default Logout;