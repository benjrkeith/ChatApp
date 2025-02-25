import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

import Footer from '@/ui/auth/Footer'
import Submit from '@/ui/auth/Submit'
import Input from '@/ui/misc/Input'

import { extractZodErrors } from '@/lib/extractZodErrors'
import { login } from '@/lib/login'
import * as types from '@/types'

export default function Login() {
  const [errors, setErrors] = useState<Partial<types.Credentials>>()
  const navigate = useNavigate()

  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = usernameRef.current?.value
    const password = passwordRef.current?.value

    const parsed = types.credentialsSchema.safeParse({ username, password })
    if (!parsed.success) return setErrors(extractZodErrors(parsed.error))

    const status = await login(parsed.data)
    if (status === 200) navigate('/chats')
    else if (status === 404) setErrors({ username: 'Account not found.' })
    else if (status === 401) setErrors({ password: 'Password is incorrect.' })
  }

  return (
    <form
      noValidate
      className="relative flex flex-col gap-4 bg-inherit"
      onSubmit={handleSubmit}
    >
      <h1 className="py-6 text-2xl">Login to your account</h1>

      <div className="flex flex-col gap-5 bg-inherit">
        <Input
          label="Username"
          error={errors?.username}
          inputRef={usernameRef}
          clearError={() => setErrors({})}
        />

        <Input
          label="Password"
          error={errors?.password}
          inputRef={passwordRef}
          clearError={() => setErrors({})}
        />
      </div>

      <Submit text="Login" />

      <Footer
        text="Need to create an account?"
        link={{
          text: 'Register',
          to: '/auth/register',
        }}
      />
    </form>
  )
}
