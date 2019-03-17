import React from 'react';
import {Link} from 'react-router-dom';
import {Store} from '../Store';
import {fetchRanking} from '../redux';
import {Nav} from '../style';
import {Container} from './style';

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
