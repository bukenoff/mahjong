import { type FC, useState, useEffect } from 'react'

import timerService from '~/services/TimerService'
import { formatTime } from '~/logic/utils'

import * as styles from './TimerAndMovesCount.styles.module.scss'

export const TimerAndMovesCount: FC = () => {
  const [time, setTime] = useState(timerService.seconds)

  useEffect(() => {
    timerService.setTime = setTime

    return () => {
      timerService.setTime = () => {}
    }
  }, [setTime])

  return (
    <div className={styles.container}>
      <div>Moves left: -</div>
      <div>Time: {formatTime(time)}</div>
    </div>
  )
}
