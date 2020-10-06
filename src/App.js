import React from 'react'
import './App.css'
import TodoList from './Todo/TodoList'
import Context from './context';

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'}
  ])//useState возвращает массив из 2 элементов - 1 элемент непосредственно то, что мы записываем в состояние, а 2 - функция, через которую мы сможем реактивно изменять состояние

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodoMethod: removeTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList todos={todos} onToggleMethod={toggleTodo}/>
      </div>

    </Context.Provider>
  )
}

export default App;
