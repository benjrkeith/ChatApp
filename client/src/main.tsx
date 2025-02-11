import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import AuthPage from '@/ui/auth/AuthPage'
import Login from '@/ui/auth/Login'
import Register from '@/ui/auth/Register'

import '@/main.css'

import Protected from './ui/auth/Protected'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="auth" />} />

        <Route path="auth" element={<AuthPage />}>
          <Route index element={<Navigate to="register" />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="chats" element={<Protected />}>
          <Route index element={<h1>Chats</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
