import { css } from 'styled-components';

const container = css`
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const styles = {
  AppContainer: css`
    ${container}
    padding: 1rem;
  `,
  PageContainer: css`
    ${container}
    padding: 1rem;
    width: 100%;
    height: 100%;
  `,
  Page: css`
    width: 100%;
    height: 100%;
  `,
  FlexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

export default styles
