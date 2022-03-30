import { padTo2Digits } from './padTo2Digits'

export function formatTime(time: number) {
  if (time >= 60) {
    const minutes = padTo2Digits(time % 60)
    const hours = padTo2Digits(Math.floor(time / 60))

    return `${hours}hr ${minutes}min`
  }

  const formattedMinutes = padTo2Digits(time)

  return `${formattedMinutes}min`
}
