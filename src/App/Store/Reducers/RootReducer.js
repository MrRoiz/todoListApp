import MainState from '../States/MainState'

export default function RootReducer(state = MainState, {type, payload}){
    switch(type){
        case 'addTodo':
            return {
                ...state,
                todos : [
                    {
                        text : payload.text,
                        completed : false
                    },
                    ...state.todos,
                ]
            }
        case 'removeTodo':
            return {
                ...state,
                todos : state.todos.filter((_,index)=>index!=payload)
            }
        case 'toggleCompleState' :
            return {
                ...state,
                todos : state.todos.map((todo,index)=>{
                    if(index != payload) return todo
                    todo.completed = !todo.completed
                    return todo
                })
            }
        default:
            return state
    }
}