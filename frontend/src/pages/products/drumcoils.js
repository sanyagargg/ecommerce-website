import React from 'react'
import DrumseriesProductGrid from '../../components/ProductGrids/DrumseriesProductGrid'
import DrumCoilsNavbar from '../../components/ProductsNavbar/DrumCoilsNavbar'
import Footer from '../../components/Footer'

function drumcoils() {
  return (
    <>
    <DrumCoilsNavbar />
    <DrumseriesProductGrid />
    <Footer />
    </>
  )
}

export default drumcoils