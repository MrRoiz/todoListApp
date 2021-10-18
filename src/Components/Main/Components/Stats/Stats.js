import { useSelector } from "react-redux"
import ProgressBar from './Components/ProgressBar/ProgressBar'

export default function Stats(){
    const todoList = useSelector(state=>state.todos)

    const quantCompletedTodos = ()=>{
        return todoList.filter(todo=>todo.completed).length
    }

    const calcProgress = ()=>{
        if(todoList.length <= 0) return 0
        return (quantCompletedTodos() / todoList.length) * 100
    }

    return (
        <div className='pb-4'>
            <span>Progress ({quantCompletedTodos()}/{todoList.length}):</span>
            <ProgressBar progress={calcProgress()}/>
        </div>
    )
}