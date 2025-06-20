import { useEffect } from "react";

export default function useFavicon(url: string) {
  useEffect(() => {
    const link = document.querySelector(`link[rel~="icon"]`);

    if (link && link instanceof HTMLLinkElement) {
      link.href = url;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.type = "image/x-icon";
      newLink.href = url;
      document.head.appendChild(newLink);
    }
  }, [url]);
}
