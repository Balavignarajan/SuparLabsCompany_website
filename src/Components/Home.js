import React from 'react'

import HeaderSuperlabs from '../Common/HeaderSuperlabs'
import { Page1 } from './Page1'
import { Page2 } from './Page2'

import { Page3 } from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'
import FooterSuperlabs from '../Common/FooterSuperlabs'



function Home() {
  return (
    <>
      
      {/* Navbar */}
      <HeaderSuperlabs/>

     
     
      {/* page1 */}
       <Page1/>
     
      {/* Page2 */}
      <Page2/>

      {/* Page 3 */}
       <Page3/>

      {/* page4*/ }
       <Page4/>

       {/* Page 5 */}
       <Page5/>

       {/* Footer */}
       <FooterSuperlabs/>
       
    </>
  )
}

export default Home