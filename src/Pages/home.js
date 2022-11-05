import React from 'react'
import Nav from "../Components/nav"
import Hero from '../Components/hero';
import Whatido from '../Components/whatido';
function home() {
  return (
    <div>
      <Nav/>
        {/* <h1>Hi Nirob!</h1> */}
      <Hero/>
      <Whatido/>
    </div>
  )
}

export default home;