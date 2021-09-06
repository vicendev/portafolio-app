import React from 'react'

import { HomeWorksList } from './works/HomeWorksList'

export const HomeBodyGrid = () => {
  return (
    <>
      <section className="home__header-section">
        <div className="hero-body">
          <p className="home__title">
            Desarrollos
          </p>
        </div>
      </section>
      <section className="home__section">
        <HomeWorksList />
      </section>
    </>
  )
}
