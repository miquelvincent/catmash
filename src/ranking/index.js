import React from 'react';
import {Link} from 'react-router-dom';
import {Store} from '../Store';
import {fetchRanking} from '../redux';
import styled from '@emotion/styled';
import {Nav} from '../style';

export const Container = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 5vw;
  }
  .catsList {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 45px 20px;
    .text {
      font-size: 20px;
      margin-top: 5px;
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 300px;
        vertical-align: middle;
        height: 300px;
        border-radius: 50%;
      }
    }
  }
`;

const CatsList = React.lazy(() => import('./CatsList'));

const Ranking = () => {
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    fetchRanking(dispatch, state);
  }, []);

  const props = {
    ranking: state.ranking,
  };

  return (
    <>
      <Nav>
        <Link to="/">Back to CatMash</Link>
      </Nav>
      <Container>
        <h1>
          <span role="img" aria-label="cat">
            🏆
          </span>{' '}
          Top Ranking{' '}
          <span role="img" aria-label="cat">
            🏆
          </span>
        </h1>
        <React.Suspense fallback={<div>Loading...</div>}>
          <div className="catsList">
            <CatsList {...props} />
          </div>
        </React.Suspense>
      </Container>
    </>
  );
};

export default Ranking;
