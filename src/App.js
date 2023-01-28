import React, { useEffect, useRef, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); //true & false
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

function App() {
  const handleNetworkChange = (onlinehehe) => {
    console.log(onlinehehe ? "we just went online" : "we are offline");
  };

  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>
      <h1>{onLine ? "onLine" : "OffLine"}</h1>
    </div>
  );
}

export default App;
