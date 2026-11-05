import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store.js'

import { Provider } from 'react-redux'
import store from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>loadig...</p>} persistor={persistor} >
         <App  />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
