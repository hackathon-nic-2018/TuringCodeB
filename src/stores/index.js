import { STORE_NAV, STORE_SOCIAL_NAV } from '../config/config'

let defaultState = {
  navigationturing: [],
  socialmedia: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_NAV:
      return {
        ...state,
        navigationturing: action.navigationturing
      }

    case STORE_SOCIAL_NAV:
      return {
        ...state,
        socialmedia: action.socialmedia
      }

    default:
      return state
  }

}

export default reducer


