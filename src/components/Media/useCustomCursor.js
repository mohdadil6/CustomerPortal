import { useEffect } from 'react';

function useCustomCursor() {
  useEffect(() => {
    const t = document.getElementById("cursor");
    const e = document.getElementById("cursor2");
    const i = document.getElementById("cursor3");

    // Rest of the code for event listeners

    const addBodyClassOnHover = (hoverLink, className) => {
      hoverLink.addEventListener("mouseenter", () => {
        document.body.classList.add(className);
      });

      hoverLink.addEventListener("mouseleave", () => {
        document.body.classList.remove(className);
      });
    };

    const logoHoverLink = document.querySelector('.logo');
    const img1HoverLink = document.querySelector('.img-1');
    const img2HoverLink = document.querySelector('.img-2');
    const img3HoverLink = document.querySelector('.img-3');
    const img4HoverLink = document.querySelector('.img-4');

    if (logoHoverLink) {
      addBodyClassOnHover(logoHoverLink, 'logo-wrap');
    }
    if (img1HoverLink) {
      addBodyClassOnHover(img1HoverLink, 'img-1-wrap');
    }
    if (img2HoverLink) {
      addBodyClassOnHover(img2HoverLink, 'img-2-wrap');
    }
    if (img3HoverLink) {
      addBodyClassOnHover(img3HoverLink, 'img-3-wrap');
    }
    if (img4HoverLink) {
      addBodyClassOnHover(img4HoverLink, 'img-4-wrap');
    }
  }, []);
}

export default useCustomCursor;
