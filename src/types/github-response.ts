export type Contribution = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type GithubResponse = {
  total: {
    [year: number]: number;
    [year: string]: number;
  }
  contributions: {
    [year: number]: {
      [month: number]: {
        [day: number]: Contribution;
      }
    }
  }
}