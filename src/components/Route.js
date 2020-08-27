import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currpath, setCurrpath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location Change");
      setCurrpath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currpath === path ? children : null;
};

export default Route;
