import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from '../../styles';
import { ILayoutProps } from './types';

const AppContainer = styled.div`
  ${styles.AppContainer}
`;

const PageContainer = styled.main`
  ${styles.PageContainer}
`;

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <AppContainer>
        <Header />
        <hr />
        <PageContainer>
          <Outlet />
        </PageContainer>
        <Footer />
      </AppContainer>
    </>
  );
};

export default Layout;
