import styled from 'styled-components';
import { IFooterProps } from './types';


const FooterContainer = styled.footer`
  width: 100%;
  z-index: 1;
  padding: 0.25rem;
  text-align: center;
`;

const Footer = (props: IFooterProps) => {
  return (
    <FooterContainer>
      Copyright
    </FooterContainer>
  );
};

export default Footer;
