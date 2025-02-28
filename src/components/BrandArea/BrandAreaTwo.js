import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
SwiperCore.use([Autoplay]);

const options = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const BrandItem = ({ image, title, link }) => {
  return (
    <div className="brand-item text-center">
      <Image src={image} alt={title} width={150} height={150} />
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          color: "#0073e6",
          fontWeight: "bold",
          fontSize: "1.1rem",
          textDecoration: "none",
          marginTop: "10px",
          transition: "color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.color = "#005bb5")}
        onMouseOut={(e) => (e.target.style.color = "#0073e6")}
      >
        {title}
      </a>
    </div>
  );
};

const BrandAreaTwo = ({ className = "", home = false }) => {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      const response = await axios.get(
        "https://api.olympiquemnihla.com/worked-with/find-all"
      );
      if (response.data) {
        setBrands(response.data);
      } else {
        setBrands([]);
      }
    } catch (error) {
      console.error("Error fetching brands:", error);
      setBrands([]);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);
  if (brands && brands.length === 0 && home) return null;

  const adjustedBrands =
    brands.length < 4 ? [...brands, ...brands, ...brands] : brands;

  return (
    <div className={`brand-area-2 pt-120 pb-120 ${className}`}>
      <Container>
        <div className="brand-active">
          <Swiper {...options}>
            {adjustedBrands &&
              adjustedBrands.length > 0 &&
              adjustedBrands.map(({ image, title, link }, index) => (
                <SwiperSlide key={index}>
                  <BrandItem image={image} title={title} link={link} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default BrandAreaTwo;
