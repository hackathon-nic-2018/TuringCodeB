import { STORE_BUSINESS_LOCATION, STORE_BUSINESS_TOPS, STORE_HOME, STORE_NAV, STORE_SOCIAL_NAV } from '../config/config'

let defaultState = {
  navigationturing: [],
  socialmedia: [],
  contenthome: [],
  businesslocation: [],
  tops: [],
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

    /**
     * Redux Busines Location
     */
    case STORE_BUSINESS_LOCATION:
      return {
        ...state,
        businesslocation: action.businesslocation
      }

    /**
     * Redux Busines tops
     */
    case STORE_BUSINESS_TOPS:
      return {
        ...state,
        tops: action.tops
      }

    default:
      return state
  }

}

export default reducer


