import { Icon } from '@iconify/react'
import { defineElement } from '@lordicon/element'
import lottie from 'lottie-web'
import { FaAddressBook, FaBook, FaCode } from 'react-icons/fa'
import { IoIosLink } from 'react-icons/io'
import { Toaster, toast } from 'sonner'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './components/ui/tooltip'
function App() {
  const technologies = {
    javascript: {
      name: 'JavaScript',
      icon: 'skill-icons:javascript',
    },
    typescript: {
      name: 'TypeScript',
      icon: 'vscode-icons:file-type-typescript-official',
    },
    react: {
      name: 'React',
      icon: 'vscode-icons:file-type-reactjs',
    },
    nodejs: {
      name: 'NodeJS',
      icon: 'vscode-icons:file-type-node',
    },
    mongodb: {
      name: 'MongoDB',
      icon: 'vscode-icons:file-type-mongo',
    },
    linux: {
      name: 'Linux',
      icon: 'flat-color-icons:linux',
    },
    git: {
      name: 'Git',
      icon: 'vscode-icons:file-type-git',
    },
    nextjs: {
      name: 'NextJS',
      icon: 'teenyicons:nextjs-outline',
    },
    java: {
      name: 'Java',
      icon: 'devicon:java',
    },
    postgreSQL: {
      name: 'PostgreSQL',
      icon: 'logos:postgresql',
    },
    sass: {
      name: 'Sass',
      icon: 'logos:sass',
    },
    spring: {
      name: 'Spring',
      icon: 'logos:spring-icon',
    },
    tailwindcss: {
      name: 'Tailwind CSS',
      icon: 'devicon:tailwindcss',
    },
  }
  defineElement(lottie.loadAnimation)

  const TooltipDemo = () => {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-100 px-4 py-2 font-bold text-indigo-500 dark:bg-indigo-500 dark:text-zinc-200">
              <FaBook />
              <span>{`I'm learning...`}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent sideOffset={12}>
            {`Spring Framework`}
            <TooltipArrow className="dark:invert" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <section className="relative mx-auto min-h-screen max-w-3xl px-4 pb-8 pt-20">
      <ThemeToggle />
      <Toaster position="bottom-right" richColors />
      <header className="flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-normal md:text-left">
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-[#2c3645] shadow-2xl ring-8 ring-white dark:ring-[#171e2d] sm:block lg:h-40 lg:w-40">
          <img
            src="/avatar.png"
            alt="image avatar"
            className="absolute -bottom-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1>CristianHR</h1>
          <p className="text-lg dark:text-zinc-300">
            I am a web developer passionate about the backend.
          </p>
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:items-center">
            <div className="col-span-1 hidden lg:flex">
              <TooltipDemo />
            </div>
            <button
              onClick={() =>
                toast.info('Spring Framework 💻', { duration: 1500 })
              }
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-100 px-4 py-2 font-bold text-indigo-500 dark:bg-indigo-500 dark:text-zinc-200 md:w-fit lg:hidden"
            >
              <FaBook />
              <span>{`I'm learning...`}</span>
            </button>
            <button className="col-span-1 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-100 px-4 py-2 font-bold text-emerald-600 dark:bg-emerald-600 dark:text-zinc-200 md:w-fit">
              <FaAddressBook />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>
      <div className="my-6 h-0.5 bg-zinc-200 dark:bg-[#292f38]"></div>
      <section className="grid grid-cols-3 gap-4">
        <article className="card col-span-3 md:col-span-2">
          <h3>Technologies</h3>
          <ul className="grid grid-cols-auto-fill-5 gap-4">
            {Object.keys(technologies).map((key) => {
              const { name, icon } = technologies[key]
              return (
                <li
                  className="flex flex-col items-center justify-center text-center"
                  key={key}
                >
                  <Icon icon={icon} className="h-8 w-8" />
                  <span className="text-md text-gray-600">{name}</span>
                </li>
              )
            })}
          </ul>
        </article>
        <article className="card col-span-3 items-center justify-center text-center md:col-span-1">
          <h3>
            Web Developer <br /> Backend
          </h3>
          <lord-icon
            trigger="loop"
            src="/server.json"
            class="h-40 w-40"
          ></lord-icon>
        </article>
        <article className="card col-span-3 md:col-span-1">
          <h3>About Me</h3>
          <ul>
            <li>🇲🇽 I live in Mexico</li>
            <li>🎓 Software engineer</li>
            <li>🌍 Native language Spanish</li>
            <li>🇬🇧 B2 English</li>
          </ul>
        </article>
        <article className="card col-span-3 md:col-span-2">
          <h3>Experience</h3>
          <ul className=" list-inside list-disc">
            <li>Languages: Spanish (Native), English (B2)</li>
            <li>Web Development: React, Next.js, Tailwind CSS</li>
            <li>Backend: Currently exploring Django and Spring Boot</li>
            <li>Data Structures: Java</li>
          </ul>
        </article>
        <article className="card col-span-3 md:col-span-3">
          <h3>Projects</h3>
          <div className="flex flex-col gap-4 md:flex-row">
            <img
              src="/linuxLearner.png"
              alt="website for learn linux."
              className="image"
            />
            <article className="flex w-full flex-col gap-4 md:w-1/3">
              <header>
                <h3>Linux Learner</h3>
                <p>A website to learn linux for beginners.</p>
              </header>
              <div className="flex items-center gap-2 ">
                <Icon
                  icon="vscode-icons:file-type-reactjs"
                  className="h-6 w-6"
                />
                <Icon icon="mdi:email-arrow-right" className="h-5 w-5" />
                <Icon icon="logos:nextjs-icon" className="h-5 w-5" />
                <Icon icon="logos:xata-icon" className="h-4 w-4" />
                <Icon icon="clarity:administrator-solid" className="h-4 w-4" />
                <Icon icon="devicon:tailwindcss" />
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <a
                  className="button"
                  href="https://linux-learner.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Live</span>
                  <IoIosLink />
                </a>
                <a
                  className="button"
                  href="https://github.com/cr1st1anhernandez/linux-learner"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Code</span>
                  <FaCode />
                </a>
              </div>
            </article>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <img
              src="/spotifySearcher.png"
              alt="website for search artist in spotify."
              className="image"
            />
            <article className="flex w-full flex-col gap-4 md:w-1/3">
              <header>
                <h3>Spotify Searcher</h3>
                <p>A website for search artist information in spotify.</p>
              </header>
              <div className="flex items-center gap-2 ">
                <Icon
                  icon="vscode-icons:file-type-reactjs"
                  className="h-6 w-6"
                />
                <Icon icon="devicon:tailwindcss" />
                <Icon icon="logos:nextjs-icon" className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-2 lg:flex-row">
                <a
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  href="https://spotify-searcher-artist.vercel.app/"
                >
                  Live
                  <IoIosLink />
                </a>
                <a
                  className="button"
                  href="https://github.com/cr1st1anhernandez/spotify-searcher-artist"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Code</span>
                  <FaCode />
                </a>
              </div>
            </article>
          </div>
        </article>
        <article className="card col-span-3">
          <h3>Social</h3>
          <ul className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/cr1st1anhernandez"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-gray-600"
            >
              <Icon icon="akar-icons:github" className="h-6 w-6" />
              <span className="tex-lg md:text-xl">Github</span>
            </a>
            <a
              href="https://twitter.com/CR1ST1A13550102"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-blue-400"
            >
              <Icon icon="akar-icons:twitter-fill" className="h-6 w-6" />
              <span className="tex-lg md:text-xl">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-neftali-hernandez-ramirez-b17742221/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-blue-600"
            >
              <Icon icon="akar-icons:linkedin-fill" className="h-6 w-6" />
              <span className="tex-lg md:text-xl">Linkedin</span>
            </a>
          </ul>
        </article>
        <footer className="card col-span-3">
          <h3>Contact</h3>
          <Contact />
        </footer>
      </section>
    </section>
  )
}

export default App
