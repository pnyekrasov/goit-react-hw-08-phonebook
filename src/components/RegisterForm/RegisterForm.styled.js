import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 20px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  width: 180px;
  border: 0.5px solid #000;
  box-shadow: inset 2px 2px rgba(0, 0, 0, 0.2);
`;

export const LabelForm = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 20px;
`;

export const Ikon = styled.div`
  position: absolute;
  top: 32px;
  left: 165px;
  z-index: 100;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
