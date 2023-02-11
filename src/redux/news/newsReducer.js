import { TOTAL_NEWS } from "./newsTypes";

const initialState = {
    count : 10
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case TOTAL_NEWS : return {
            count : state.count + 1
        }
        default : return state
    }
}