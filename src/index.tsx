import ReactDOM from 'react-dom/client'

import TodoProvider from './context/todoContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
)
