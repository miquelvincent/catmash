// @flow

export type Cat = {
  url: string,
  id: string,
  scroreRate: number
}

export type State = {
  cats: Array<Cat>,
  ranking: Array<Cat>,
  dispatch: *
}

export type Update = {
  updateRanking: (id: string, dispatch: void) => void
}

export type TypeCatmash = {
  cats: Array<Cat>,
  state: State,
  updateRanking: (id: string, dispatch: void) => void
}

export type TypeCatsList = {
  ranking: Array<Cat>
}
