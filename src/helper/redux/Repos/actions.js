import * as actionType from './actionType'
import * as actionCRUD from './actionCRUD'

export const getRepos = (payload) => async(dispatch) => {
    try {
        const data = await actionCRUD.getRepo(payload)
        dispatch({
            type: actionType.GET_REPO,
            payload: data.data
        })
    } catch (error) {
        console.log(error)
    }
}