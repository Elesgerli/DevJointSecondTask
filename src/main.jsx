import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App.jsx'
import { TaskProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
    <TaskProvider>

        <App />
    </TaskProvider>
)