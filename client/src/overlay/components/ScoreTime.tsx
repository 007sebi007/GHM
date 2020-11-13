import React from 'react'
import { PhaseExt } from 'csgo-gsi-types'

interface Props {
  showBomb: boolean,
  useBombEffects: boolean,
  bombState: string,
  bombActive: boolean,
  bombTimeLeft: number,
  phase: PhaseExt,
  phaseTimer: number,
  round: number,
  otRounds: number
}

const BOMB_TIMER = 40

const sectostr = (time: number) => {
  return ~~(time / 60) + ':' + (time % 60 < 10 ? '0' : '') + time % 60
}

export default ({
  showBomb,
  useBombEffects,
  bombState,
  bombActive,
  bombTimeLeft,
  phaseTimer,
  otRounds,
  phase,
  round
}: Props) => {
  if (showBomb && phase !== 'warmup') {
    return (
      <>
        <div className={`bomb-timer ${useBombEffects ? bombState : ''}`} />
        <div
          className={`bomb-wrapper ${useBombEffects ? bombState : ''}`}
          style={{
            animationDuration: `${
              useBombEffects
                ? 0
                : ((bombActive
                  ? bombTimeLeft
                  : phaseTimer) / BOMB_TIMER) + 0.35}s`
          }}>
          <img src='/static/utils/bomb.svg' className='bomb-icon' />
        </div>
      </>
    )
  }

  if (phase === 'paused' || phase === 'timeout_ct' || phase === 'timeout_t') {
    return (
      <>
        <div className='timeout-wrapper smaller'>
          <img src='/static/utils/timeout.svg' />
        </div>
        <div className='timeout-text'>
          {Number(phaseTimer) !== 0 ? sectostr(Math.trunc(phaseTimer) + 1) : 'Paused'}
        </div>
      </>
    )
  }

  const isOvertime = round + 1 > 30
  const otRound = isOvertime ? ((round - 30) % otRounds) + 1 : 0
  const otTimes = isOvertime ? Math.floor((round - 30) / otRounds) + 1 : 0

  return (
    <>
      <div className={`time ${(phase === 'live' && phaseTimer <= 10) ? 'text-red' : ''}`}>
        {phase === 'live' || phase === 'freezetime'
          ? sectostr(Math.trunc(phaseTimer) + 1)
          : phase === 'over' ? '0:00' : null
        }
      </div>
      <div className='round'>
        {phase === 'warmup'
          ? 'WARMUP'
          : isOvertime
            ? `OT ${otTimes} Round ${otRound}`
            : `Round ${round + 1}`}
      </div>
    </>
  )
}
