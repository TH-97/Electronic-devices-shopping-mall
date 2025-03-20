import { useEffect, useState } from "react";
import styles from "./ImgSlider.module.css";
import chevronLeftIcon from "../../assets/chevron_left_icon.svg";
import chevronRightIcon from "../../assets/chevron_right_arrow_icon.svg";

export function ImgSlider() {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#E2E2E2",
          width: "100%",
          height: "300px",
        }}
      >
        <div className={styles.button} onClick={prevSlide}>
          <img src={chevronLeftIcon} />
        </div>
        {currentIndex}
        <div className={styles.button} onClick={nextSlide}>
          <img src={chevronRightIcon} />
        </div>
      </div>
    </div>
  );
}
