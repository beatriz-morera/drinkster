import React from 'react';
import classes from './hero.module.scss';

export default ({ featured }) => {
  return (
    <section className={classes.hero}>
      <div className={classes.header}>
        <div className={classes.title}>
          <h1>
            Drinkster<span>.</span>
          </h1>
        </div>
        <button className={classes.searchBtn}></button>
      </div>
      <article>
        <div className={classes.info}>
          <h2>{featured.strDrink}.</h2>
          <p>{featured.strInstructions}</p>
          <button>Explore All</button>
        </div>
        <div className={classes.image}>
          <img src={featured.strDrinkThumb} alt={featured.strDrink} />
        </div>
      </article>
      <div className={classes.btnGroup}>
        <button>View</button>
        <button className={classes.arrowBtn}>></button>
      </div>
    </section>
  );
};
