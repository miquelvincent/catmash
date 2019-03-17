// @flow
import React from 'react'
import _ from 'lodash'
import { type TypeCatmash } from '../types'

const Catmash = ({ cats, state, updateRanking }: TypeCatmash) => (
  <div className="catmash">
    {_.take(cats, 2).map(cat => {
      return (
        <div key={cat.id} className="episode-box" onClick={() => updateRanking(cat.id, state.dispatch)}>
          <img src={cat.url} alt={''} />
        </div>
      )
    })}
  </div>
)

export default Catmash
