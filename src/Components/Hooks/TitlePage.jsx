import { useEffect } from "react";

export const useTitlePage = (title) => {
    useEffect(() => {
        document.title = title;
      }, [title]);
};