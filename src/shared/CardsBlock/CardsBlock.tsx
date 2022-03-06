import React, {useEffect, useState} from 'react';
import styles from './cardsblock.css';
import {CardContainer} from "./CardContainer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";
import axios from "axios";
import {createAnimePosts} from "../../store/actions";

export function CardsBlock() {
    const [loading, setLoading] = useState(false)
    const [errorLoading, setErrorLoading] = useState('')
    const [liked, setLiked] = useState(false)
    const dispatch = useDispatch()
    const posts: any = useSelector<RootState>(state => state.posts)

    useEffect(() => {

        async function load() {
            setLoading(true)
            setErrorLoading('')

            try {
                const {data: {data}} = await axios.get('https://anime-facts-rest-api.herokuapp.com/api/v1')
                dispatch(createAnimePosts(data))
            } catch (error) {
                setErrorLoading(String(error))
            }

            setLoading(false)
        }

        if (posts.length === 0) load()

    }, [liked])


    function onClickLiked() {
        setLiked(!liked)
    }

    return (
        <div className={styles.cardsContainer}>
            <div className={styles.btnFilterBlock}>
                <button className={`${styles.likedBtn} ${liked ? styles.active : ""}`}
                        onClick={onClickLiked}>Понравишиеся
                </button>
            </div>
            <div>
                <ul className={styles.cardsBlock}>
                    {posts.length === 0 && !loading && !errorLoading && (
                        <div style={{textAlign: 'center'}}>
                            Нет ни одного поста
                        </div>
                    )}

                    {posts.map((post: { anime_id: number; anime_name: string; anime_img: string; like: boolean }) => {
                        switch (liked) {
                            case true:
                                return post.like ? <CardContainer
                                    key={post.anime_id}
                                    anime_id={post.anime_id}
                                    anime_name={post.anime_name}
                                    anime_img={post.anime_img}
                                    like={post.like}
                                /> : null

                            default:
                                return <CardContainer
                                    key={post.anime_id}
                                    anime_id={post.anime_id}
                                    anime_name={post.anime_name}
                                    anime_img={post.anime_img}
                                    like={post.like}
                                />
                        }
                    })}

                    {loading && (
                        <div style={{textAlign: 'center'}}>
                            Загрузка...
                        </div>
                    )}

                    {errorLoading && (
                        <div role='alert' style={{textAlign: 'center'}}>
                            {errorLoading}
                        </div>
                    )}
                </ul>
            </div>
        </div>

    );
}
