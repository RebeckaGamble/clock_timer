import React, { useEffect } from "react";
import "./App.css";

const Stars = () => {
  useEffect(() => {
    createStars();
    createMoon();
    createFallingStar();
  }, []);

  const createMoon = () => {
    const moonContainer = document.querySelector(".moon");
    const moon = document.createElement("div");
    moonContainer.appendChild(moon);
  };

  const createStars = () => {
    const starContainer = document.querySelector(".starBg");

    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      starContainer.appendChild(star);
    }
  };

  const createFallingStar = () => {
    const fallingStarContainer = document.querySelector(".fallingStar");
    const fallingStar = document.createElement("div");
    fallingStarContainer.appendChild(fallingStar);
  };

  return (
    <div className="starBg">
      <div className="moon"></div>
      <div className="fallingStarContainer">
        <div className="fallingStar"></div>
      </div>
    </div>
  );
};

export default Stars;
