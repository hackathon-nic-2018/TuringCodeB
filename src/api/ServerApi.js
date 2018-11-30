import axios from 'axios'
import {
  server_api,
  STORE_BUSINESS_LOCATION,
  STORE_BUSINESS_TOPS,
  STORE_HOME,
  STORE_NAV,
  STORE_SOCIAL_NAV,
  version_api
} from '../config/config'

/**
 *
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 * Navigation
 */
export function NavigationTuring () {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/menu/menu.json`).then((response) => {
      dispatch({
        type: STORE_NAV,
        navigationturing: response.data
      })
    })
  }
}

/**
 *
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 * Social Media
 */
export function SocialMediaTuring () {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/menu/socialmedia`).then((response) => {
      dispatch({
        type: STORE_SOCIAL_NAV,
        socialmedia: response.data
      })
    })
  }
}

/**
 *
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 * Content Home
 */
export function ContentHome () {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/menu/home.json`).then((response) => {
      dispatch({
        type: STORE_HOME,
        contenthome: response.data
      })
    })
  }
}

/**
 *
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 * Business Location
 */
export function BusinessLocationApi () {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/business/business_location.json`).then((response) => {
      dispatch({
        type: STORE_BUSINESS_LOCATION,
        businesslocation: response.data
      })
    })
  }
}

/**
 *
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 * Business Tops
 */
export function BusinessTopsApi () {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/business/business_tops.json`).then((response) => {
      dispatch({
        type: STORE_BUSINESS_TOPS,
        tops: response.data
      })
    })
  }
}


