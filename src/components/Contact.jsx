import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' }

    if (!name) {
      newErrors.name = 'No se permiten campos vacíos'
    }

    if (!email || !email.includes('@')) {
      newErrors.email = 'Por favor, introduce un correo electrónico válido'
    }

    if (!message) {
      newErrors.message = 'No se permiten campos vacíos'
    }
    setErrors(newErrors)

    if (!name || !email || !message) {
      return false
    }

    return true
  }
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    if (form.current && validateForm()) {
      const promise = emailjs
        .sendForm(
          'service_hie27kx',
          'template_00nbtzs',
          form.current,
          'aQwAg3DFDgmw6ivUR',
        )
        .then(
          (result) => {
            setName('')
            setEmail('')
            setMessage('')
            return result
          },
          (error) => {
            throw error
          },
        )

      toast.promise(promise, {
        loading: 'Cargando...',
        success: (result) => {
          form.current.reset()
          return `Email enviado correctamente: ${result.text}`
        },
        error: 'Error al enviar email',
      })
    }
  }

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="flex w-full flex-col gap-1"
    >
      <label htmlFor="user_name">Nombre</label>
      <input
        type="text"
        name="user_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-md border-2 bg-gray-200 px-2 py-1 outline-none focus:border-zinc-600 dark:border-[#151521] dark:bg-[#1c2436]"
      />
      {errors.name && <p className="font-bold text-red-500">{errors.name}</p>}
      <label htmlFor="user_email">Email</label>
      <input
        type="email"
        name="user_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border-2 bg-gray-200 px-2 py-1 outline-none focus:border-zinc-600 dark:border-[#151521] dark:bg-[#1c2436]"
      />
      {errors.email && <p className="font-bold text-red-500">{errors.email}</p>}
      <label htmlFor="message">Mensaje</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-md border-2 bg-gray-200 px-2 py-1 outline-none focus:border-zinc-600 dark:border-[#151521] dark:bg-[#1c2436]"
      />
      {errors.message && (
        <p className="font-bold text-red-500">{errors.message}</p>
      )}
      <input
        type="submit"
        value="Enviar"
        className="button mb-2 mt-5 cursor-pointer hover:transform-none"
      />
    </form>
  )
}

export default Contact
