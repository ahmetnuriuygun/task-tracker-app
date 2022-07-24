import React, { useState } from 'react'

const GorevEkle = ({gorevler,setGorevler}) => {
    const[text,setText]=useState("")
    const[day,setDay]=useState("")

    const[buton,setButon]=useState({
        renk:"red",
        yazi:"CLOSE ADD TASK BAR",
        
    })

    const yapSubmit=(e)=>{
        e.preventDefault()
        const id=gorevler.length+1
        setGorevler([...gorevler,{id:id, text:text, day:day, bitti:false}])
    }
    
    const butonClick=()=>{
        if(buton.renk==="red"){
           setButon({
            renk:"green",
            yazi:"SHOW ADD TASK BAR",
           })
        }else{
            setButon({
            renk:"red",
            yazi:"CLOSE ADD TASK BAR",
            })
        }
    }
    return (
    <div>
        <header className='header'>
            <h1>TASK TRACKER</h1>
            <button className='btn' style={{backgroundColor:buton.renk}} onClick={butonClick} >{buton.yazi}
         </button>
        </header>
{buton.renk==="red" && (
        <form onSubmit={yapSubmit}>
        <div className='form-control'>
            <label htmlFor="text">Task</label>
            <input 
            type="text" 
            name="text" 
            id="text" 
            value={gorevler.text} 
            placeholder="Add Task" 
            onChange={(e)=>{setText(e.target.value)}}    
            />
        </div>
        <div className='form-control'>
            <label htmlFor="day">Day & Time</label>
            <input 
            type="date" 
            name="day" 
            id="day" 
            value={gorevler.day} 
            placeholder="Add Task"
            onChange={(e)=>{setDay(e.target.value)}}
            />
        </div>

        <div>
            <button className='btn btn-submit' type='submit'>SUBMIT</button>
        </div>
        










        </form> 
    )}
    </div>
  )
}

export default GorevEkle