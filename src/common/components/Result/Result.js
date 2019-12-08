import React from 'react'

import styles from './Result.module.scss'
// import Container from 'common/components/Container/index.js'

export const Result = ({upc, name, rating, img, price, unit, compare, newprod, sameday, pricedrop}) => {

  return ( 
  <p 
    className={styles.result}
    data-upc={upc}
    data-rating={rating}
  >
    <img src={`common/images/${img}`} alt="" width="100" height="100"/>
    {name}
  </p>
  )
}

// name={result.name}
// img={result.img[0]}
// price={result.price}
// unit={result.unit}
// compare={result.compare}
// new={result.new}
// sameday={result.sameday}
// pricedrop={result.pricedrop}
