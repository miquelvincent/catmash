import React from 'react';
import _ from 'lodash';

const CatsList = ({ranking}) =>
  _.map(ranking, item => (
    <div key={item.id}>
      <h1>{item.scoreRate}</h1>
      <img src={item.url} alt="" />
    </div>
  ));

export default CatsList;
