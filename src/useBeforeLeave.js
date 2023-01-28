export const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    } else {
      document.addEventListener("mouseleave", handle); // mount
    }
    return () => document.removeEventListener("mouseleave", handle); // Unmount
  }, []);
};
