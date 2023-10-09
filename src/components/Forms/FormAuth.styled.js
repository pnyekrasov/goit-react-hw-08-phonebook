import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 10px 50px;
  padding: 12px;
  width: 400px;
`;

export const LabelForm = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 20px;
`;

export const Iсon = styled.div`
  position: absolute;
  top: 32px;
  left: 165px;
  z-index: 100;
  cursor: pointer;
`;
