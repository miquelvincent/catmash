import React from 'react';
import { Store } from '../Store'; 
import { fetchRanking } from '../redux';

const CatsList = React.lazy(() => import('./CatsList'));

const Ranking = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    fetchRanking(dispatch, state);
  }, []);

  const props = {
    ranking: state.ranking
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className='episode-layout'>
          <CatsList {...props} />
        </div>
      </React.Suspense>
    </React.Fragment>
  );
}

export default Ranking;