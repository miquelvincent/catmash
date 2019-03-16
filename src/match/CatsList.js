import React from 'react';
import _ from 'lodash'

export default function CatsList(props) {
  const { cats, state, updateRanking } = props;
  return _.take(cats, 2).map(cat => {
    return (
      <section key={cat.id} className='episode-box' onClick={() => updateRanking(cat.id, state.dispatch)}>
        <img
          src={cat.url}
          alt={""}
        />
      </section>
    );
  });
}