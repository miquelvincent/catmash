import { reducer } from './reducer'
import { buildRanking } from './redux'
import { initalState } from './Store'
import * as actions from './actions'

const mockCat = [
  {
    id: 'ddp',
    url: 'http://25.media.tumblr.com/tumblr_m4gtikn86b1qztc0jo1_1280.jpg'
  },
  {
    id: '510',
    url: 'http://24.media.tumblr.com/tumblr_ltqi8k2OcP1qiyvcfo1_250.jpg'
  },
  {
    id: '41c',
    url: 'http://25.media.tumblr.com/tumblr_m3pm45zC4v1qjahcpo1_500.jpg'
  }
]

const mockRanking = [
  {
    id: 'ddp',
    scoreRate: 10000
  },
  {
    id: '41c',
    scoreRate: 30
  }
]

const mockRankingState = [
  {
    id: 'ddp',
    scoreRate: 10000,
    url: 'http://25.media.tumblr.com/tumblr_m4gtikn86b1qztc0jo1_1280.jpg'
  },
  {
    id: '41c',
    scoreRate: 30,
    url: 'http://25.media.tumblr.com/tumblr_m3pm45zC4v1qjahcpo1_500.jpg'
  },
  {
    id: '510',
    scoreRate: 0,
    url: 'http://24.media.tumblr.com/tumblr_ltqi8k2OcP1qiyvcfo1_250.jpg'
  }
]

describe('Reducer', () => {
  it('return initial state', () => {
    expect(reducer({ initalState }, {})).toEqual({ ...initalState })
  })

  let beforeState, action, afterState
  it('Get ranking', () => {
    // given
    beforeState = []
    action = { type: actions.GET_RANKING_SUCCESS, ranking: { ...mockRankingState } }
    // when
    afterState = reducer(beforeState, action).ranking
    // then
    expect(afterState).toEqual({ ...mockRankingState })
  })

  it('Test reorder function', () => {
    expect({ ...buildRanking(mockCat, mockRanking) }).toEqual({ ...mockRankingState })
  })
})
