import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'

import Footer from '@/ui/auth/Footer'
import Submit from '@/ui/auth/Submit'
import Input from '@/ui/misc/Input'

import { extractZodErrors } from '@/lib/extractZodErrors'
import { register } from '@/lib/register'
import * as types from '@/types'

export default function Register() {
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

    const status = await register(parsed.data)
    if (status === 201) navigate('/auth/login')
    else if (status === 409) setErrors({ username: 'Username is taken.' })
    else if (status === 500) setErrors({ username: 'Please try again later.' })
  }

  return (
    <form
      noValidate
      className="relative flex flex-col gap-4 bg-inherit"
      onSubmit={handleSubmit}
    >
      <h1 className="py-6 text-2xl">Create an account</h1>

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

      <Submit text="Register" />

      <Footer
        text="Already have an account?"
        link={{
          text: 'Login',
          to: '/auth/login',
        }}
      />
    </form>
  )
}
