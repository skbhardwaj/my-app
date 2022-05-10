import styled from 'styled-components';
import Heading from '../../components/Heading';
import styles from '../../styles';
import { INotFoundPageProps } from './types';


const NotFoundPageContainer = styled.div`
  ${styles.Page}
`;


const NotFoundPage = (props: INotFoundPageProps) => {
  return (
    <NotFoundPageContainer>
      <Heading text={'Page Not Found 🧐'} />
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
