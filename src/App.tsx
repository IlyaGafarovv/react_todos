import './App.css'

import {
  TodoForm,
  TodoList,
  TodoActions,
  TodoCounter,
} from './components/Todos'

export default function App() {
  return (
    <div className='app'>
      <div className='gradient' />

      <main className='main'>
        <h1 className='title'>
          todos <span>app</span>
        </h1>

        <TodoForm />
        <TodoActions />
        <TodoList />
        <TodoCounter />
      </main>
    </div>
  )
}
