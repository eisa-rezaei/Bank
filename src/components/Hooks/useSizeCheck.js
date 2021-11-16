import {useState, useEffect} from "react";

export const useSizeChecker = (size = 700) => {
  const [sizeCheck, setSizeCheck] = useState(window.innerWidth > size);

  useEffect(() => {
    const checkSize = () => {
      setSizeCheck(window.innerWidth > size);
    };
    const event = window.addEventListener("resize", checkSize);
    checkSize();
    return () => {
      if (event) window.removeEventListener("resize", event);
    };
  }, [size]);

  return sizeCheck;
};
