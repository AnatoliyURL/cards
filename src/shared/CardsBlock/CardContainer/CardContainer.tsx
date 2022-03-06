import React, {useEffect, useState} from 'react';
import {Card} from "../Card";
import {useDispatch} from "react-redux";
import {createAnimePosts, deleteAnimePost, likeAnimePost} from "../../../store/reducer";

interface ICardContainer {
  anime_id: number
  anime_img: string
  anime_name: string
  like: boolean
}

export function CardContainer({anime_id, anime_img, anime_name, like}: ICardContainer) {
  const dispatch = useDispatch()

  function onClickLike() {
    dispatch(likeAnimePost(anime_id))
  }

  function onClickDelete() {
    dispatch(deleteAnimePost(anime_id))
  }

  return (
      <Card
          anime_img={anime_img}
          anime_name={anime_name}
          onClickLike={onClickLike}
          onClickDelete={onClickDelete}
          like={like}
      />
  );
}
