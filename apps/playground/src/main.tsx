import React from 'react'
import { createRoot } from 'react-dom/client'
import '@dove/tokens/themes/brutalism-theme.css'
import './index.css'
import App from './play'
createRoot(document.getElementById('root')!).render(<App />)
