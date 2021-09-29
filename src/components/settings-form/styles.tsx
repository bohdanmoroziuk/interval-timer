import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
  padding: 1rem 0;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 1rem;
`;

export const InputField = styled.input`
  background: 0 0;
  border: 1px dotted #eee;
  display: inline;
  color: #fff;
  padding: 4px 8px;
  width: 90px;
  font-size: 1rem;
  border-radius: 4px;
  outline: none;
  transition: all 220ms ease-in-out;

  &:focus {
    border-style: solid;
  }
`;

export const NumberField = styled(InputField)``;

export const TimeField = styled(InputField)``;
