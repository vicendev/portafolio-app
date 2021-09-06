import React from 'react'
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router'

const enumValue = (name) => Object.freeze({toString: () => name})
const _enumRols = Object.freeze({
  ADMIN: enumValue('_enumRols.ADMIN'),
  EDITOR: enumValue('_enumRols.EDITOR')
})

export const PrivateRoute = ({
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
    if (rol === element) return true
  }
  return false
}

PrivateRoute.propTypes = {
  rol: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired
}

