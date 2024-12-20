import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title='Model S'
          desc='Order Online for touchless Delivery'
          img='model-s.jpg'
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Model Y'
          desc='Order Online for touchless Delivery'
          img='model-y.jpg'
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Model 3'
          desc='Order Online for touchless Delivery'
          img='model-3.jpg'
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Model X'
          desc='Order Online for touchless Delivery'
          img='model-x.jpg'
          leftBtnText='Custom Order'
          rightBtnText='Existing Inventory'
        />
        <Section 
          title='Lowest Cost solar Panels In Cukoo Land'
          desc='Money Back Guarantee'
          img='solar-panel.jpg'
          leftBtnText='Order now'
          rightBtnText='learn More'
        />
        <Section 
          title='Solar For New Roofs'
          desc='Costs Less Than a new Roof!'
          img='solar-roof.jpg'
          leftBtnText='Order now'
          rightBtnText='learn More'
        />
        <Section 
          title='Accessories'
          desc=''
          img='accessories.jpg'
          leftBtnText='Order now'
        />
        
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`