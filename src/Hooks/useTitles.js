import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - AIK Market Gardens`;
  }, [title]);
};

export default useTitle;
