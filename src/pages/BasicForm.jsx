import React from 'react'
import { useState } from 'react'

export const BasicForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '', guest: 'no', guest_name: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return (
        <main className='px-[10vw] py-5'>
            <header className='text-3xl font-semibold py-2'>
                Event Registration form
            </header>
            <form className='flex flex-col gap-2 w-1/2 max-md:w-full max-lg:w-3/4' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                <label htmlFor='age'>Age</label>
                <input type='number' id='age' name='age' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} min={1} />
                <label htmlFor='guest'>Are you attending with a guest?</label>
                <select name='guest' defaultValue={'no'} id='guest' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange}>
                    <option value='yes' onChange={handleChange}>Yes</option>
                    <option value='no' onChange={handleChange}>No</option>
                </select>
                {
                    formData?.guest === 'yes' && (
                        <>
                            <label htmlFor='guest_name'>Guest Name</label>
                            <input type='text' id='guest_name' name='guest_name' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} />
                        </>
                    )
                }
                < hr />
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
            </form>
        </main>
    )
}
