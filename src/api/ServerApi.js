import axios from 'axios'
import { server_api, STORE_HOME, STORE_NAV, STORE_SOCIAL_NAV, version_api } from '../config/config'

/**
 *
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 * Navigation
 */
export function NavigationTuring () {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/navigation`).then((response) => {
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
    return axios.get(`${server_api}/${version_api}/content-home`).then((response) => {
      dispatch({
        type: STORE_HOME,
        contenthome: response.data
      })
    })
  }
}


