import {ActionCreator, Reducer} from "redux";

export type RootState = {
    posts: {anime_id: number, anime_img: string, anime_name: string, like: boolean}[]
}

const initialState = {
    posts: []
}

const ANIME_POSTS = 'ANIME_POSTS'

type UpdateAnimePosts = {
    type: typeof ANIME_POSTS
    posts: {anime_id: number, anime_img: string, anime_name: string, like: boolean}[]
}

export const createAnimePosts: ActionCreator<UpdateAnimePosts> = (posts) => ({
    type: ANIME_POSTS,
    posts
})

const ANIME_POST_CHANGE_LIKE = 'ANIME_POST_CHANGE_LIKE'

type UpdateLikeAnimePosts = {
    type: typeof ANIME_POST_CHANGE_LIKE
    id: number
}

export const likeAnimePost: ActionCreator<UpdateLikeAnimePosts> = (id) => ({
    type: ANIME_POST_CHANGE_LIKE,
    id
})

const ANIME_DELETE_POST = 'ANIME_DELETE_POST'

type deleteAnimePost = {
    type: typeof ANIME_DELETE_POST
    id: number
}

export const deleteAnimePost: ActionCreator<deleteAnimePost> = (id) => ({
    type: ANIME_DELETE_POST,
    id
})


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