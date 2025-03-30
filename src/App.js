import React from 'react';
import UploadForm from './components/UploadForm';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
  background: linear-gradient(to bottom right, #f0f4ff, #dee8ff);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 6rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: #555;
  max-width: 640px;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

function App() {
  return (
    <Container>
      <Title>✨ AI Resume Tailor</Title>
      <Subtitle>
        Automatically tailor your resume to any job description using AI.
        Just paste your resume and job details below.
      </Subtitle>
      <UploadForm />
    </Container>
  );
}

export default App;
