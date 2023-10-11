import Modal, { BaseModalBackground } from 'styled-react-modal';
import styled from 'styled-components';

export const StyledModal = Modal.styled`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  width: 400px;
  padding: 40px;
  background-color: #fff;
  border-radius: 30px;
  opacity: ${props => props.opacity};
  transition : all 300ms ease-in-out;

  h2 {
  text-align: center;
}
  `;

export const FadingBackground = styled(BaseModalBackground)`
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${props => props.opacity};
  transition: all 300ms ease-in-out;
`;
