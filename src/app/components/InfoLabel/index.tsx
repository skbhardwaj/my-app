import styled, { css } from 'styled-components';
import withProps from '../../styles/withProps';
import { IInfoLabelProps } from './types';

const BackgroundColors = {
  warning: 'rgba(249, 242, 169, 0.5)',
  success: 'rgba(154, 251, 183, 0.5)',
  error: 'rgba(240, 156, 156, 0.5)',
  message: 'rgba(134, 159, 234, 0.5)'// 'transparent'
}

const CommonLabelStyles = css`
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-bottom: 0.5rem;
`;


const InfoLabelContainer = withProps<IInfoLabelProps>()(styled.div)`
  ${CommonLabelStyles}
  
  background-color: ${({ labelVariant }) => BackgroundColors[labelVariant]};
`;

const InfoLabel = (props: IInfoLabelProps) => {
  const { text } = props;

  return (
    <InfoLabelContainer {...props}>
      {text}
    </InfoLabelContainer>
  );
};

export default InfoLabel;
