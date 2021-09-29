import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1024;
  top: 0;
  left: 0;
  width: 100%;  
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2), 0 0px 10px rgba(0, 0, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MessaseBox = styled.p`
  color: #000;
  font-size: 1rem;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: crimson;
`;
