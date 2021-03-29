import React from 'react'
import ManiStyle from './MainStyle'

const Main = () => {
  const classes = ManiStyle()
  return (
    <div className={classes.root} >
      <h1>main part</h1>
    </div>
  )
}

export default Main
