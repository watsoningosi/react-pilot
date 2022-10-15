import React,{ useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import uuid from 'react-uuid';
 
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(() => {

  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify)

  },[todos] )
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(PrevTodos => {
      return [...PrevTodos, { id: uuid, name: name, complete: false }]
      
    });
    todoNameRef.current.value = null
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" /> 
      <button onClick={handleAddTodo}> Add Todo</button>
      <button> Clear Done Todo</button>
      <div>0 left to do</div>
      </>
  )
}

export default App;
 