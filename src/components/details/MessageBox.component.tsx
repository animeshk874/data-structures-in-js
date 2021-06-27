import { OuterContainer, PrimaryText } from './details.component'
export const MessageBox: React.FC<any> = ({ message }) => {
  return (
    <OuterContainer className='d-flex justify-content-center details-outer-container flex-wrap'>
      <PrimaryText>{message}</PrimaryText>
    </OuterContainer>
  );
}
