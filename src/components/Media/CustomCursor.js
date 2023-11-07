import React, { useEffect } from 'react';

function CustomCursor() {
  useEffect(() => {
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
      t.style.left = n.clientX + "px";
      t.style.top = n.clientY + "px";
      e.style.left = n.clientX + "px";
      e.style.top = n.clientY + "px";
      i.style.left = n.clientX + "px";
      i.style.top = n.clientY + "px";
    });

    var t = document.getElementById("cursor");
    var e = document.getElementById("cursor2");
    var i = document.getElementById("cursor3");

    function addHoverClasses() {
      e.classList.add("hover", "hover-2");
      i.classList.add("hover", "hover-2");
    }

    function removeHoverClasses() {
      e.classList.remove("hover", "hover-2");
      i.classList.remove("hover", "hover-2");
    }

    removeHoverClasses();

    var hoverElements = document.querySelectorAll(".hover-target, .hover-target-2");

    for (var a = hoverElements.length - 1; a >= 0; a--) {
      addHoverListeners(hoverElements[a]);
    }

    function addHoverListeners(element) {
      element.addEventListener("mouseover", addHoverClasses);
      element.addEventListener("mouseout", removeHoverClasses);
    }

    const body = document.querySelector('body');

    function addImageClass(className) {
      body.classList.add(className);
    }

    function removeImageClass(className) {
      body.classList.remove(className);
    }

    document.addEventListener('DOMContentLoaded', function () {
      var logoLink = document.querySelector('.logo');
      logoLink.addEventListener('mouseenter', () => addImageClass('logo-wrap'));
      logoLink.addEventListener('mouseleave', () => removeImageClass('logo-wrap'));
    });

    document.addEventListener('DOMContentLoaded', function () {
      var img1Link = document.querySelector('.img-1');
      img1Link.addEventListener('mouseenter', () => addImageClass('img-1-wrap'));
      img1Link.addEventListener('mouseleave', () => removeImageClass('img-1-wrap'));
    });

    document.addEventListener('DOMContentLoaded', function () {
      var img2Link = document.querySelector('.img-2');
      img2Link.addEventListener('mouseenter', () => addImageClass('img-2-wrap'));
      img2Link.addEventListener('mouseleave', () => removeImageClass('img-2-wrap'));
    });

    document.addEventListener('DOMContentLoaded', function () {
      var img3Link = document.querySelector('.img-3');
      img3Link.addEventListener('mouseenter', () => addImageClass('img-3-wrap'));
      img3Link.addEventListener('mouseleave', () => removeImageClass('img-3-wrap'));
    });

    document.addEventListener('DOMContentLoaded', function () {
      var img4Link = document.querySelector('.img-4');
      img4Link.addEventListener('mouseenter', () => addImageClass('img-4-wrap'));
      img4Link.addEventListener('mouseleave', () => removeImageClass('img-4-wrap'));
    });
  }, []);

  return null;
}

export default CustomCursor;
