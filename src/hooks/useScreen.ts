import { useEffect, useLayoutEffect, useState } from "react";

const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return { width: undefined, height: undefined };
  }

  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

const useScreen = () => {
  const isClient = typeof window !== "undefined";
  const [userScreen, setUserScreen] = useState(getWindowDimensions);

  const handleResize = () => {
    setUserScreen((prev) => ({ ...prev, ...getWindowDimensions() }));
  };

  useLayoutEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  return userScreen;
};

export default useScreen;
