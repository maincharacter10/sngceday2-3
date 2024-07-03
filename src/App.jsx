import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Reg from './components/Reg'
import Tab from './components/Tab'
import First from './components/First'
import Details from './components/Details'
import Counters from './components/Counters'
import FormBasics from './FormBasics'
import New from './components/New'
import ApiGet from './components/ApiGet'
import GridCard from './components/GridCard'


function App() {


  return (
    <>
<Navbar/>
  <Routes>
    <Route path='/' element={<First/>} />
    <Route path='/r' element={<Reg data={{Name:"Alex",age:20,place:"EKM"}}/>} />
    <Route path='/t' element={<Tab/>} />
    <Route path='/d' element={<Details/>} />
    <Route path='/n' element={<New/>} />
    <Route path='/f' element={<FormBasics/>} />
    <Route path='/a' element={<ApiGet/>} />
    <Route path='/g' element={<GridCard/>} />

  </Routes>
 
    </>
  )
}

export default App
