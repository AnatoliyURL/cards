import React from 'react';
import styles from './card.css';

interface ICard {
    anime_img: string
    onClickLike: () => void
    onClickDelete: () => void
    anime_name: string
    like: boolean
}

export function Card({onClickLike, onClickDelete, anime_img, anime_name, like}: ICard) {
    return (
        <li className={styles.card}>
            <div className={styles.imgBlock}>
                <img className={styles.imgCard} src={anime_img}/>
            </div>
            <div className={styles.informationBlock}>
                <div className={styles.nameBlock}>
                    <p className={styles.name}>{anime_name}</p>
                    <p>Очень интересное и завораживающие описание. Красочные оценки от критиков</p>
                </div>
                <div className={styles.actionBlock}>
                    <button className={`${styles.actionLike} ${styles.actionBtn}`} onClick={onClickLike}>{like? <img src="https://img.icons8.com/ios-filled/50/000000/like--v1.png"/> : <img src="https://img.icons8.com/ios/50/000000/like--v1.png"/>}</button>
                    <button className={`${styles.actionDelete} ${styles.actionBtn}`} onClick={onClickDelete}><img src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/000000/external-trash-can-graphic-design-bearicons-detailed-outline-bearicons.png"/></button>
                </div>
            </div>
        </li>
    );
}
