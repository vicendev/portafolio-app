import React from 'react'
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router'

const enumValue = (name) => Object.freeze({toString: () => name})
const _enumRols = Object.freeze({
  ADMIN: enumValue('_enumRols.ADMIN'),
  EDITOR: enumValue('_enumRols.EDITOR'),
  PUBLIC: enumValue('_enumRols.PUBLIC'),
})

export const PublicRoute = ({
  rol,
  component:Component,
  ...rest
}) => {

  localStorage.setItem('lastPath', rest.location.pathname)

  return (
    <Route 
      component={(props) => (
        (_verifyRol(rol))
        ? (<Component {...props} />)
        : (<Redirect to="/" />)
      )}
    />
  )
}

function _verifyRol(rol) {
  for (const element in _enumRols) {
    console.log(element)
    if (rol === element) return true
  }
  
  return false
}

PublicRoute.propTypes = {
  rol: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}