import InputTodo from "./Components/InputTodo/InputTodo";
import TodoList from "./Components/TodoList/TodoList";

export default function Main(){
    return (
        <div className='is-flex is-justify-content-center my-5'>
            <div style={{width:'50%'}}>
                <InputTodo/>
                <TodoList/>
            </div>
        </div>
    )
}