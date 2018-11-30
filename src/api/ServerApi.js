import axios from 'axios'
import { server_api, STORE_NAV, STORE_SOCIAL_NAV, version_api } from '../config/config'

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


