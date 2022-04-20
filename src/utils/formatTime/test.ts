import { formatTime } from '.'

describe('formatTime', () => {
  it('should return the minutes formatted', () => {
    const time = 45

    expect(formatTime(time)).toEqual('45min')
  })

  it('should return the hours formatted', () => {
    const time = 80

    expect(formatTime(time)).toEqual('1hr 20min')
  })
})
