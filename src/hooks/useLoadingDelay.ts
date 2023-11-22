import {useEffect, useState} from "react";

const useLoadingDelay = (initalState: boolean, delay: number = 1000) => {
  const [loading, setLoading] = useState(initalState);

  /* 2초 설정 */
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, delay);
    }
  }, [loading, delay]);

  return [loading, setLoading];
};

export default useLoadingDelay;
