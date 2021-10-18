import { useSelector } from "react-redux"
import NoItems from "./Components/NoItems/NoItems"
import TodoItem from "./Components/TodoItem/TodoItem"

export default function TodoList(){

    const todoList = useSelector(state=>state.todos)

    const renderList = ()=>{
        if(todoList.length > 0){
            return todoList.map((todo,index)=>(
                <TodoItem text={todo.text} completed={todo.completed} key={index} index={index}/>
            ))
        }else{
            return <NoItems/>
        }
    }

    return(
        <div className='my-5'>
            {renderList()}
        </div>
    )
}