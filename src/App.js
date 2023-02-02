import React from 'react'
import CompA from './Components/CompA'
import Product from './Components/Props examples/Product'
import Ifelse from './Conditional Rendering Examples/Ifelse'
import Ternary from './Conditional Rendering Examples/Ternary'
import EventBinding from './Event Handling Examples/EventBinding'
import EventHandling from './Event Handling Examples/EventHandling'
import Navbar from './Navbar'
import Counter from './state/Counter'
import Message from './state/Message'
import Products from './state/Products'

function App() {
  return (
    <>
    <Navbar/>
    <CompA/><hr/>
    <Product/><hr/>
    <Message/><hr/>
    <Counter/><hr/>
    <Products/><hr/>
    <EventHandling/><hr/>
    <EventBinding/><hr/>
    <Ifelse/><hr/>
    <Ternary/>
    </>
  )
}

export default App