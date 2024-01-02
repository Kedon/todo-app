import { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { v4 as uuid } from 'uuid';
import './App.scss';
import TodoItem from './componets/TodoItem';

const todoModal = {
  id: 0,
  task: '',
  done: false
}

function App() {

  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault()
    
    if(!inputText) return

    const id = uuid();

    setTodos([
      {
        ...todoModal,
        id,
        task: inputText
      },
      ...todos
    ])

    setInputText('')

  }

  const handleInputChange = e => {
    setInputText(e.target.value)
  }

  const toggleTodo = (item) => {
    setTodos( prevState => prevState.map( todoItem => {
      if(todoItem.id === item.id){
        return {
          ...todoItem,
          done: !todoItem.done
        }
      }
      return todoItem
    }))
  }

  const removeItem = (item) => {
    setTodos( prevState => prevState.filter( todoItem => todoItem.id !== item.id ))
  }


  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmitForm}>
        <InputText
          placeholder="Descrição da Tarefa"
          onChange={handleInputChange}
          value={inputText}
        />
        <Button
          label="Adicionar"
          />
      </form>
      {todos.map( todo => (
        <TodoItem
          handleRemoveTodo={removeItem}
          toggleDoneTodo={toggleTodo}
          item={todo}
        />
      ))}

    </div>
  );
}

export default App;
