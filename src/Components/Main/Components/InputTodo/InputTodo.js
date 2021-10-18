import { useState } from "react"
import { useDispatch } from 'react-redux'

export default function InputTodo(){
    const [valueInput, setValueInput] = useState('')
    const dispatch = useDispatch()

    const handleKeyDown = e=>{
        if(e.keyCode != 13) return
        if(!e.target.value) return
        dispatch({
            type : 'addTodo',
            payload : {
                text : e.target.value,
                completed : false
            }
        })
        setValueInput('')
    }

    return (
        <input 
            type='text'
            className='input'
            placeholder='Add a TODO'
            value={valueInput}
            onChange={({target:{value}})=>setValueInput(value)}
            onKeyDown={handleKeyDown}
        />
    )
}