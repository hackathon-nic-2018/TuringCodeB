import { STORE_HOME, STORE_NAV, STORE_SOCIAL_NAV } from '../config/config'

let defaultState = {
  navigationturing: [],
  socialmedia: [],
  contenthome: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    /**
     * Redux Navigation
     */
    case STORE_NAV:
      return {
        ...state,
        navigationturing: action.navigationturing
      }

    /**
     * Redux Social Icon
     */
    case STORE_SOCIAL_NAV:
      return {
        ...state,
        socialmedia: action.socialmedia
      }

    /**
     * Redux Home
     */
    case STORE_HOME:
      return {
        ...state,
        contenthome: action.contenthome
      }

    default:
      return state
  }

}

export default reducer


