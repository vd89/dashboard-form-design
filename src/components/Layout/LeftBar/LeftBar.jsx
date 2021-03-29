import React from 'react'
import LeftBarStyle from './LeftBarStyle'

const LeftBar = () => {
  const classes = LeftBarStyle()
  return (
    <div className={classes.root}>
      <h1>Left bar</h1>
    </div>
  )
}

export default LeftBar
