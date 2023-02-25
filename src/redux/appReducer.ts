import { ThunkAction } from 'redux-thunk'
import { InferActionsType, StateType } from './store'

const initState = {
    email: undefined as undefined | string,
}

type InitStateType = typeof initState

const appReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'orders/app/SET_EMAIL':
            return {
                ...state,
                email: action.value
            }
        default:
            return state
    }
}

export const actions = {
    setEmail: (value: string | undefined) => ({ type: 'orders/app/SET_EMAIL', value } as const),
}

export type ActionsType = InferActionsType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionsType>

export default appReducer