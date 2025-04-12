import React from 'react'
import LineFilterseriesProductGrid from '../../components/ProductGrids/ECseriesProductGrid'
import LineFilterNavbar from '../../components/ProductsNavbar/LineFilterNavbar'
import Footer from '../../components/Footer'

function linefilter() {
  return (
    <>
    <LineFilterNavbar />
    <LineFilterseriesProductGrid />
    <Footer />
    </>
  )
}

export default linefilter