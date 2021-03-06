import { Action } from './actions'
import { ConfigState, Status } from './types'

export interface State {
  config: ConfigState,
  status: Status
}

const statusState: Status = {
  clientOnline: false,
  clientSpectating: false,
  gameOnline: false,
  gameLive: false
}

export const configState: ConfigState = {
  // General
  useRoundedCorners: false,
  disableOverlayIndicator: false,
  useDenseOverlayIndicator: true,
  safeZoneLeft: 35,
  safeZoneRight: 35,
  safeZoneTop: 20,
  safeZoneBottom: 35,
  // Radar
  useRadar: false,
  playerSize: 40,
  bombSize: 40,
  maxRounds: 4,
  otRounds: 6,
  radarNumberSize: 32,
  // Player
  usePreSetName: false,
  showTeamLogo: true,
  showPlayerNationality: false,
  showPlayerPhotoContainerAllways: true,
  showPlayerPhotoIfSet: false
}

const getDefaultState = (): State => ({
  config: configState,
  status: statusState
})

export default function reducer (
  state: State = getDefaultState(),
  action: Action
): State {
  switch (action.type) {
    case 'set-config':
      return {
        ...state,
        config: action.config
      }
    case 'set-status':
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }
}
