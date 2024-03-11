import { useEffect, useRef } from "react";

function useOutsideClick(onClose) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick);
  }, [onClose]);

  return ref;
}

export default useOutsideClick;
