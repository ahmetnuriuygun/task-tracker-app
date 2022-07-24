import React from 'react'
import { useState,useEffect } from 'react'
import GorevEkle from '../components/GorevEkle'
import GorevleriGoster from '../components/GorevleriGoster'
import Data from "../helper/Data"

const Home = () => {
    const[gorevler,setGorevler] =useState([])
    
    useEffect(()=>{setGorevler(Data)},[])

  return (
    <div>
        <GorevEkle gorevler={gorevler} setGorevler={setGorevler}/>
        <GorevleriGoster gorevler={gorevler} setGorevler={setGorevler}/>
    </div>
  )
}

export default Home 