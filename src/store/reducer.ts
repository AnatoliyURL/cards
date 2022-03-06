import {ActionCreator, Reducer} from "redux";
import {ANIME_DELETE_POST, ANIME_POST_CHANGE_LIKE, ANIME_POSTS} from "./actions";

export type RootState = {
    posts: {anime_id: number, anime_img: string, anime_name: string, like: boolean}[]
}

const initialState = {
    posts: []
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case ANIME_POSTS:
            action.posts.forEach((element: any) => {element.like = false})

            return {
                ...state,
                posts: action.posts
            }

        case ANIME_POST_CHANGE_LIKE:
            const changePost: any = state.posts.find((element: any) => (element.anime_id === action.id))
            changePost.like = !changePost.like

            return {
                ...state,
                posts: state.posts
            }

        case ANIME_DELETE_POST:

            return {
                ...state,
                posts: state.posts.filter((element: any) => (element.anime_id !== action.id))
            }
        default:
            return state
    }
}