import 'App.css'

import {
  Header,
  TodoForm,
  TodoActions,
  TodoList,
  TodoCounter,
} from 'components'

export default function App() {
  return (
    <div className='app'>
      <Header />
      <TodoForm />
      <TodoActions />
      <TodoList />
      <TodoCounter />
    </div>
  )
}
