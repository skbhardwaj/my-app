import styled from 'styled-components';
import styles from '../../styles';
import { IHeadingProps } from './types';


const HeadingContainer = styled.h3`
  ${styles.FlexCenter}
  
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Heading = (props: IHeadingProps) => {
  const { text } = props;
  return (
    <HeadingContainer>
      {text}
    </HeadingContainer>
  );
};

export default Heading;
