import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import Productpage from './pages/Productpage.tsx'
import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from './Store.tsx'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<Productpage />} />
    </Route>
  )
)
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
)
