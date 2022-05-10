import styled from 'styled-components';
import InfoLabel from '../InfoLabel';
import { IIssueDetailsProps } from './types';


export const IssueDetailsContainer = styled.div`
margin: 0 auto;
width: 90%;
`;

export const TitleH1 = styled.h1`
margin-bottom: 1.5rem;
`;

export const ContainerSection = styled.section`

* {
  font: revert;
}

pre {
  background-color: #f6f8fa;
  padding: 1rem;
  border-radius: 4px;
  font-size: 80%;
  overflow: auto;
}

h1,h2,h3,h4,h5,h6 {
  margin: 1rem 0;
}

p {
  color: rgb(36, 41, 47);
  margin: 0.5rem 0;
}
`;


export const MainDescription = styled.section`
border-radius: 8px;
border: 1px solid;
background-color: #fff;
padding: 1rem;

`;

const IssueDetails = ({ data }: IIssueDetailsProps) => {
  const { node } = data;

  console.log('IssueDetails', data);

  if (!node) {
    return (
      <IssueDetailsContainer>
        <InfoLabel labelVariant={'error'} text={'Not a valid issue.'} />
      </IssueDetailsContainer>
    )
  }

  return (
    <>
      <IssueDetailsContainer>
        <TitleH1>
          {node.title}
        </TitleH1>
        {/* <ContainerSection>
          <h2>Author</h2>
          <a href={node.author.url}>
            <img src={node.author.avatarUrl} alt={node.author.login} />
            {node.author.login}
          </a>
        </ContainerSection> */}
        <ContainerSection>
          <h2>Description</h2>
          <MainDescription dangerouslySetInnerHTML={{ __html: node.bodyHTML }}></MainDescription>
        </ContainerSection>
        {/* <div>
          <h2>Comments (Total: {node.comments.totalCount})</h2>
          <div>
            <ul>
              {
                node.comments.edges.map((edge) => {
                  // const { node } = edge;
                  <li>{edge.author?.login}</li>
                })
              }
            </ul>
          </div>
        </div> */}
      </IssueDetailsContainer>
    </>
  );
};

export default IssueDetails;
