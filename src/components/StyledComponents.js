import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for responsiveness
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

// Styling for the book card
export const BookCardStyled = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  width: 250px;
  height: 380px;  /* Fixed height for consistency */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;  /* Adjust height for mobile devices */
    margin-bottom: 15px;
  }
`;

// Book title styling
export const BookTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

// Button styling
export const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
  }
`;

