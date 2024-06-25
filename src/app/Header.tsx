import React from 'react'
import { ThemeSwitcher } from './components/reusable/ThemeSwitcher'

function Header() {
  return (
    <div className=' border-black  dark:border-white border-b h-16 flex justify-between'>
        <div className='max-w-full p-4 flex md:text-3xl justify-center items-center font-mono border-e h-full border-black dark:border-white  '>
            Sakthi Vignesh
        </div>
        <div>

        </div>
        <div className='max-w-full flex md:text-3xl justify-center items-center font-mono border-s h-full border-black  dark:border-white'>
        <ThemeSwitcher/>
        </div>
    </div>
  )
}

export default Header