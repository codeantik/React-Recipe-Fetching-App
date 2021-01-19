import React from 'react';
import style from './recipe.module.css';

const Receipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{ title }</h1>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories - { Math.ceil(calories) }</p>
            <img className={style.img} src={image} alt='' />
        </div>
    );
}

export default Receipe;