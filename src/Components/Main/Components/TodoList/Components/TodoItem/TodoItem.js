import { useDispatch } from "react-redux"

export default function TodoItem({text,completed,index}){

    const dispatch = useDispatch()

    return (
        <div 
            className='box is-flex is-justify-content-space-between is-align-items-center'
        >
            <div 
                style={{width:'100%', cursor:'pointer'}}
                onClick={()=>dispatch({type : 'toggleCompleState',payload : index})}
            >
                <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span>
            </div>
            <button 
                className='button is-small is-danger'
                onClick={()=>dispatch({type:'removeTodo',payload:index})}
            >
                X
            </button>
        </div>
    )
}