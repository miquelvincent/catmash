import React from 'react';
import _ from 'lodash';

const CatsList = ({ranking}) =>
  _.map(ranking, item => (
    <div key={item.id}>
      <img src={item.url} alt="" />
      <div className="text">
        {item.scoreRate}{' '}
        <span role="img" aria-label="cat">
          💖
        </span>
      </div>
    </div>
  ));

export default CatsList;
