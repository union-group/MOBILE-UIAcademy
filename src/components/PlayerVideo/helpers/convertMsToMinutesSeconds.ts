import { padTo2Digits } from '../../../utils/formatTime/padTo2Digits'

export function convertMsToMinutesSeconds(milliseconds: number) {
  let minutes = Math.floor(milliseconds / 60000)
  let seconds = Math.floor((milliseconds % 60000) / 1000)

  if (Number.isNaN(minutes) || Number.isNaN(seconds)) {
    minutes = 0
    seconds = 0
  }

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds, 2)}`
}
