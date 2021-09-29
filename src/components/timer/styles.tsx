import styled from 'styled-components';

export const Circle = styled.div`
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  box-shadow: 0 0 62px -1px rgba(0, 207, 155, 0.7);
  background-color: #000;
  margin-right: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
`;

export const Time = styled.time`
  color: rgba(255, 255, 255, 0.69);
  font-size: 9rem;
  margin-top: 3rem;
`;

export const Round = styled.p`
  font-size: 2rem;
  color: #fff;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ControlButton = styled.button`
  text-transform: uppercase;
  padding: 1rem 5rem;
  background-color: transparent;
  border-radius: 3rem;
  cursor: pointer;
  transition: all 220ms ease-in-out;
  border: 1px solid #00cf9b;
  color: #00cf9b;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  &:hover {
    background-color: #00cf9b;
    color: #fff;
  }
`;
