import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {
    const { pathname } = useLocation()
    const [form, setForm] = useState([false, false, false])

    if (pathname === '/basic_form' || pathname === '/') {
        if (!form[0])
            setForm([true, false, false])
    }
    if (pathname === '/job_form') {
        if (!form[1])
            setForm([false, true, false])
    }
    if (pathname === '/advanced_form') {
        if (!form[2])
            setForm([false, false, true])
    }

    const [basic, job, advanced] = form

    return (
        <nav className='px-[3vw] pt-5 bg-gray-400 w-full'>
            <div className='flex font-semibold'>
                <Link className={`p-3 rounded-t-lg border-b-0 ${basic ? 'bg-white' : ''}`} to='/basic_form'>
                    Basic Form
                </Link>
                <Link className={`p-3 rounded-t-lg border-b-0 ${job ? 'bg-white' : ''}`} to='/job_form'>
                    Job Application Form
                </Link>
                <Link className={`p-3 rounded-t-lg border-b-0 ${advanced ? 'bg-white' : ''}`} to='/advanced_form'>
                    Advanced Form
                </Link>
            </div>
        </nav>
    )
}
