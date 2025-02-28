import { enableMapSet } from 'immer'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import App from '@/ui/App'
import AuthLayout from '@/ui/auth/Layout'
import Login from '@/ui/auth/Login'
import Register from '@/ui/auth/Register'

import '@/main.css'

enableMapSet()
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Navigate to={'login'} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route index element={<Navigate to={'chat'} />} />
      <Route path="chat/*" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
