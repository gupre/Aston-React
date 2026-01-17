import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/global.css'
import App from './app/App.tsx'
import { ThemeProvider } from './shared/lib/theme/ThemeProvider.tsx'
import { store } from './app/providers/store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
    
  </StrictMode>
)
