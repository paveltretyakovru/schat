import axios, {get} from 'axios'

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
 *  @param {functions} options.success callback if res.data.success === true
 *  @param {array} options.successDispataches dispatches props before success calling
 *  @param {array} options.callbackDispatches dispathces props before callback calling
 *  @return function(dispatch)
 */
export const dispatchServerRequest = (options) => {
  const url = options.url || SERVER_HOST
  const data = options.data || {}
  const error = options.error || (() => {})
  const method = options.method || 'get'
  const success = options.success
  const callback = options.callback || (() => {})
  const successDispataches = options.successDispataches || []
  const callbackDispatches = options.callbackDispatches || []
  
  const tokenStr = 'Harry Potter And Secret Room!'
  const postConfig = {
    url: url,
    data: data,
    method: 'post',
    headers: { 'Authorization' : `Bearer ${tokenStr}` },
    withCredentials: true,
  }

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

          if(callbackDispatches.length > 0) {
            callbackDispatches.forEach(callbackDispatch => {
              dispatch(callbackDispatch)
            });
          }

          if (res.data.success) {
            if (typeof success !== 'undefined') { success(dispatch, res) }
            if (Array.isArray(successDispataches) && successDispataches.length > 0) {
              successDispataches.forEach(successDispatch => dispatch(
                (typeof successDispatch.type !== undefined)
                  ? successDispatch
                  : successDispatch()
              ))
            }
          }

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
      case 'post' : return responseHandler(axios(postConfig))
      default     : return responseHandler(get(url))
    }

  }
}