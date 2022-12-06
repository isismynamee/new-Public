import * as actionType from './actionType'

const initialState = {
    repo: []
}

const Repo = (state = initialState, {type, payload}) => {
    switch(type){
        case actionType.GET_REPO:
            return{
                ...state,
                ...state.repo,
                repo:payload
            }
        default:
            return state
    }
}
export default Repo;