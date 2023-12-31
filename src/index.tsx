import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Container/App/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style/Style.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
