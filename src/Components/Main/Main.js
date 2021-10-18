import InputTodo from "./Components/InputTodo/InputTodo";
import TodoList from "./Components/TodoList/TodoList";
import Stats from './Components/Stats/Stats'

export default function Main(){
    return (
        <div className='is-flex is-justify-content-center my-5'>
            <div style={{width:'55%'}}>
                <Stats/>
                <InputTodo/>
                <TodoList/>
            </div>
        </div>
    )
}