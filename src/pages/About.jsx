// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

function About() {
  return (
    <Container>
      <Title>About Us</Title>
      <p>This is the About Us page. Content coming soon.</p>
    </Container>
  );
}

export default About;
