import React from 'react'
import { HomeTechnologiesList } from './technologies/HomeTechnologiesList'

export const HomeTechnologies = () => {
  return (
    <>
      <section className="home__header-section">
        <div className="hero-body">
          <p className="home__title">
            Tecnologias
          </p>
        </div>
      </section>
      <section className="home__section">
        <HomeTechnologiesList />
      </section>
    </>
  )
}
