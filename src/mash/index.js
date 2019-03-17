import React from 'react';
import {Store} from '../Store';
import {fetchcats, updateRanking} from '../redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {Container} from './style';
import {Nav} from '../style';
const Catmash = React.lazy(() => import('./Catmash'));

const Mash = () => {
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    state.cats.length === 0 && fetchcats(dispatch);
  }, [state]);

  const props = {
    cats: _.shuffle(state.cats),
    state: {state, dispatch},
    updateRanking,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Nav>
        <Link to="/ranking">Go to Top Ranking</Link>
      </Nav>
      <Container>
        <h1>
          <span role="img" aria-label="cat">
            🐱
          </span>{' '}
          Click on your favorite cutie cat{' '}
          <span role="img" aria-label="cat">
            🐱
          </span>
        </h1>
        <Catmash {...props} />
      </Container>
    </React.Suspense>
  );
};

export default Mash;
