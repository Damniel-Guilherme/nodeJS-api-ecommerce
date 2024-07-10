// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importar as imagens do carrossel
import img1 from '../imgs/slide-1.jpg';
import img2 from '../imgs/slide-2.jpg';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  cursor: grab;

  @media only screen and (min-width: 1024px) {
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /* Garante que a imagem ocupe todo o espaço do container */
`;

const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

const images = [
  img1,
  img2,
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Adiciona o efeito de fade-in
    autoplay: true, // Adiciona o autoplay
    autoplaySpeed: 3000, // Define a troca de imagem a cada 5 segundos
    prevArrow: <PrevArrow>{"<"}</PrevArrow>,
    nextArrow: <NextArrow>{">"}</NextArrow>
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image src={image} alt={`Imagem ${index + 1}`} />
          </ImageContainer>
        ))}
      </Slider>
    </CarouselContainer>
  );
}

export default Carousel;
