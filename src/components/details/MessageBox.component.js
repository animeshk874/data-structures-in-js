import { OuterContainer, PrimaryText } from './details.component'
export function MessageBox({ message }) {
  return (
    <OuterContainer className='d-flex justify-content-center details-outer-container'>
      <PrimaryText>{message}</PrimaryText>
    </OuterContainer>
  );
}
