export const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine); //true & false
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    console.log("실행됫냐?");
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
      console.log("바이바이");
    };
  }, []);

  return status;
};
