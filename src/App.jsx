import { useState } from 'react'

import AppRoutes from './Routes/AppRoutes'

import { Provider } from 'react-redux'
import store from './Redux/Store/Store'

export default function App() {
  
  return (
    <Provider store={store}>
    <AppRoutes />
    </Provider>
      
  )
}


