import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #27ae60;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s ease forwards;
  font-size: 1rem;
  font-weight: bold;
  z-index: 1000;
`;

const Notification = ({ notifications }) => {
  return (
    <NotificationWrapper className="notification-container">
      {notifications.map((note, index) => (
        <div key={index} className="notification">
          {note}
        </div>
      ))}
    </NotificationWrapper>
  );
};

export default Notification;
