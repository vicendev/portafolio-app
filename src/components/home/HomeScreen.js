import React from 'react'

import { HomeHeadTitle } from './_static/HomeHeadTitle'
import { HomeBodyGrid } from './_dynamic/HomeBodyGrid'
import { Footer } from '../ui/Footer'
import { HomeTechnologies } from './_static/HomeTechnologies'

export const HomeScreen = () => {

  return (
    <>
      <HomeHeadTitle />
      <HomeTechnologies />
      <HomeBodyGrid />
      <Footer />
    </>
  )
}
