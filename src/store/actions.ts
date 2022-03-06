import {ActionCreator} from "redux";

export const ANIME_POSTS = 'ANIME_POSTS'

type UpdateAnimePosts = {
    type: typeof ANIME_POSTS
    posts: {anime_id: number, anime_img: string, anime_name: string, like: boolean}[]
}

export const createAnimePosts: ActionCreator<UpdateAnimePosts> = (posts) => ({
    type: ANIME_POSTS,
    posts
})

export const ANIME_POST_CHANGE_LIKE = 'ANIME_POST_CHANGE_LIKE'

type UpdateLikeAnimePosts = {
    type: typeof ANIME_POST_CHANGE_LIKE
    id: number
}

export const likeAnimePost: ActionCreator<UpdateLikeAnimePosts> = (id) => ({
    type: ANIME_POST_CHANGE_LIKE,
    id
})

export const ANIME_DELETE_POST = 'ANIME_DELETE_POST'

type deleteAnimePost = {
    type: typeof ANIME_DELETE_POST
    id: number
}

export const deleteAnimePost: ActionCreator<deleteAnimePost> = (id) => ({
    type: ANIME_DELETE_POST,
    id
})