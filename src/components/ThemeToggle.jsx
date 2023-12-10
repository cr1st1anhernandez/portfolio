'use client'
import { useEffect, useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <button
      className="absolute right-4 top-6 lg:right-0"
      onClick={() => {
        setDarkMode(!darkMode)
      }}
    >
      {darkMode ? (
        <BsSunFill className="text-zinc-200" size={24} />
      ) : (
        <FaMoon className="text-[#2c3645]" size={24} />
      )}
    </button>
  )
}
