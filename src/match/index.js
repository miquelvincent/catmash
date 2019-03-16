import React from 'react';
import { Store } from '../Store';
import { fetchcats, updateRanking } from '../redux';
import _ from 'lodash'

const CatsList = React.lazy(() => import('./CatsList'));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.cats.length === 0 && fetchcats(dispatch);
  }, [state]);

  const props = {
    cats: _.shuffle(state.cats),
    state: { state, dispatch },
    updateRanking
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