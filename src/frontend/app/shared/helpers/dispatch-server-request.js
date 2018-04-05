import {get, post} from 'axios'

import {
  SERVER_HOST,
  SHOW_PROGRESS,
  HIDE_PROGRESS,
  UPDATE_SNACK_MESSAGE,
} from '../../app.constants'

/**
 * SChat server request with standart request dispatches
 * @param {*} options 
 *  @param {string} options.url request url
 *  @param {object} options.data data object for post type request
 *  @param {string} options.method type of http method
 *  @param {function} options.error fialed callback function for server exception
 *  @param {function} options.callback success callback function for server response
 *  @return function(dispatch)
 */
export const dispatchServerRequest = (options) => {
  const url = options.url || SERVER_HOST
  const data = options.data || {}
  const error = options.error || (() => {})
  const method = options.method || 'get'
  const callback = options.callback || (() => {})

  return (dispatch) => {
    dispatch({ type: SHOW_PROGRESS })

    const snack = (m) => dispatch({ type: UPDATE_SNACK_MESSAGE, payload: m })
    const hideProgress = () => dispatch({ type: HIDE_PROGRESS })

    const responseHandler = (responsePromise) => {
      return responsePromise
        .then((res) => {
          const data = res.data

          if (data && typeof data.message !== 'undefined') snack(data.message)          

          setTimeout(() => snack(''), 4500)
          hideProgress()
          callback(dispatch, res)
        })
        .catch((res) => {
          snack(res.response.data.message)

          setTimeout(() => snack(''), 4500)
          hideProgress()
          error(dispatch, res)
        })
    }
    
    switch (method) {
      case 'get'  : return responseHandler(get(url))
      case 'post' : return responseHandler(post(url, data))
      default     : return responseHandler(get(url))
    }

  }
}