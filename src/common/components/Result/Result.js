import React from 'react'

import styles from './Result.module.scss'
// import Container from 'common/components/Container/index.js'

export const Result = ({upc, name, rating, img, price, unit, compare, newprod, sameday, pricedrop}) => {
  const currency = (val) => {
    let currency = ((val/100).toFixed(2)).toString()
    currency = currency.split('.')
    return(
      <>
        <span className={styles[`result__price--dollars`]}>
          ${currency[0]}
        </span>
        <span className={styles[`result__price--sr`]}>
          .
        </span>
        <span className={styles[`result__price--cents`]}>
        {currency[1]}
        </span>
      </>
    )
  }

  const imgStyle = {
    backgroundImage: `url(${img})`,
  }

  return ( 
  <li 
    className={styles.result}
    data-upc={upc}
    data-pricedrop={pricedrop}
    data-new={newprod}
    data-sameday={sameday}
    data-compare={compare}
  > 
    <div 
      className={styles[`result__img`]}
      style={imgStyle}>
    </div>
    <p className={styles.result__name}>
      {name}
    </p>
    <span className={styles.rating} data-rating={rating}>
      {rating > 0 ? `Customer Rating: ${rating}` : `This product has not been rated`}
    </span>
    <p className={styles.result__price}>
<span className={styles[`result__price--price`]}>{currency(price)}</span>
  <span className={styles[`result__price--unit`]}>/{unit}</span>
    </p>

    <form action="post">
      <button>Add to Cart</button>
      <button>+<span className="sr">Add to List</span></button>
    </form>
  </li>
  )
}
