import React from 'react'
import Footer from './Footer'
import './Home.css'


function Home() {
  return (
   
    <div className='home'>
      <br/><br/>
      <center>
      <h3>Fruit juice is 100% pure juice made from the flesh of fresh fruit or from whole fruit</h3>
      </center>
      <br/>
      <p/>
      <div id='mydiv'>
      <img src='https://simplicity.in/vdfdhfv78lmdsvmg5todlsh4jffgskjb2947qnt/images/news/1631453699557' alt='shop' id='myimg'></img>
      <p id='myp' >Established in the year 2016, we are one of the eminent Juice shops in Coimbatore. The complete range of Juices we offer are prepared by using high quality ingredients like uncontaminated milk, impeccable sugar syrups of several flavors and finely grounded sugar sourced from reputed vendors of the industry.Our shop has been Rennovated before 6 months , from start to now we are providibg fresh fruit juices to our customers. Although it was a short time we got 
        many regular customers to our shop. We have a good rating. In this summer we are providing some special offers going on.
      </p>
      <p/>
      <center>
      <h1>BUY 2 JUICES GET 1 FREE !!!!!!</h1>
      </center>
      </div>
      <Footer/>
    </div>
  )
}

export default Home