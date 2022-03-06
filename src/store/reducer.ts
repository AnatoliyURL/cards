import {Reducer} from "redux";
import {ANIME_DELETE_POST, ANIME_POST_CHANGE_LIKE, ANIME_POSTS} from "./actions";

export type RootState = {
    posts: AnimePost[]
}

export type AnimePost = {
    anime_id: number,
    anime_img: string,
    anime_name: string,
    like: boolean
}

const initialState = {
    posts: []
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case ANIME_POSTS:
            action.posts.forEach((element: AnimePost) => element.like = false)

            return {
                ...state,
                posts: action.posts
            }

        case ANIME_POST_CHANGE_LIKE:

            return {
                ...state,
                posts: state.posts.map((element: AnimePost) => (element.anime_id === action.id ? {...element, like: !element.like} : {...element}))
            }

        case ANIME_DELETE_POST:

            return {
                ...state,
                posts: state.posts.filter((element: AnimePost) => (element.anime_id !== action.id))
            }
        default:
            return state
    }
}