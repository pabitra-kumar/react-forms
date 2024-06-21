import React from 'react'
import { useState } from 'react'

export const JobForm = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setFormData({ ...formData, [e.target.name]: [...(formData[e.target.name] || []), e.target.value] })
        } else {
            setFormData({ ...formData, [e.target.name]: formData[e.target.name].filter(item => item !== e.target.value) })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <main className='px-[10vw] py-5'>
            <header className='text-3xl font-semibold py-2'>
                Job Application form
            </header>
            <form className='flex flex-col gap-2 w-1/2 max-md:w-full max-lg:w-3/4' onSubmit={handleSubmit}>

                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} minLength={3} required />

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />

                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' name='phone' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />

                <label htmlFor='position'>Applying for Position</label>
                <select name='position' id='position' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange} required>
                    <option value=''>Select</option>
                    <option value='Developer'>Developer</option>
                    <option value='Designer'>Designer</option>
                    <option value='Manager'>Manager</option>
                </select>

                {
                    formData?.position === 'Developer' || formData?.position === 'Designer' ? (
                        <>
                            <label htmlFor='experience'>Relevant Experience (Number of years):</label>
                            <input type='number' id='experience' name='experience' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} min={1} required />
                        </>
                    ) : null
                }

                {
                    formData?.position === 'Designer' ? (
                        <>
                            <label htmlFor='portfolio'>Portfolio URL</label>
                            <input type='url' id='portfolio' name='portfolio' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                        </>
                    ) : null
                }

                {
                    formData?.position === 'Manager' ? (
                        <>
                            <label htmlFor='management'>Management Experience</label>
                            <input type='text' id='management' name='management' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                        </>
                    ) : null
                }

                <label>Additional Skills</label>
                <div className='flex flex-col gap-1'>
                    <label>
                        <input type='checkbox' name='skills' value='JavaScript' onChange={handleCheckbox} />
                        JavaScript
                    </label>
                    <label>
                        <input type='checkbox' name='skills' value='CSS' onChange={handleCheckbox} />
                        CSS
                    </label>
                    <label>
                        <input type='checkbox' name='skills' value='Python' onChange={handleCheckbox} />
                        Python
                    </label>
                </div>

                <label htmlFor='interview'>Preferred Interview Time</label>
                <input type='datetime-local' id='interview' name='interview' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />

                < hr />
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
            </form>
        </main>
    )
}

