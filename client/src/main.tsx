import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import AuthPage from '@/ui/auth/AuthPage'
import Login from '@/ui/auth/Login'
import Register from '@/ui/auth/Register'
import ChatsPage from '@/ui/chats/Page'

import '@/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="chats" />} />

        <Route path="auth" element={<AuthPage />}>
          <Route index element={<Navigate to="login" />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="chats/*" element={<ChatsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
