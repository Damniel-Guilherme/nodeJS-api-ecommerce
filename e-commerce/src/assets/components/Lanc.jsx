import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 20px;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Text = styled.h3`
  color: white;
  font-size: 1.5em;
  text-align: center;
`;

const App = () => {
  const [roupas, setRoupas] = useState([]);

  useEffect(() => {
    const fetchRoupas = async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        setRoupas(response.data);
      } catch (error) {
        console.error('Error fetching roupas:', error);
      }
    };

    fetchRoupas();
  }, []);

  return (
    <Container>
      {roupas.map((roupa) => (
        <ImageWrapper key={roupa._id}>
          <Image src={roupa.image_url} alt={roupa.category} />
          <Overlay>
            <Text>{roupa.title}</Text>
          </Overlay>
        </ImageWrapper>
      ))}
    </Container>
  );
};

export default App;