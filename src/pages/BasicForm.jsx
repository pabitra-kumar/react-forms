import React from 'react'
import { useState } from 'react'

export const BasicForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '', guest: 'no', guest_name: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const [frm, setFrm] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        setFrm(false)
        console.log(formData)
    }

    const fillFormAgain = () => {
        setFrm(true)
        setFormData({ name: '', email: '', age: '', guest: 'no', guest_name: '' })
    }

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    if (!frm) {
        return (
            <main className='w-full min-h-[100vh] flex justify-center items-center'>
                <div className='bg-green-100 p-5 rounded-lg'>
                    <h1 className='text-2xl font-semibold'>Your form has been submitted successfully!</h1>
                    <p className='text-lg'>Name: {formData.name}</p>
                    <p className='text-lg'>Email: {formData.email}</p>
                    <p className='text-lg'>Age: {formData.age}</p>
                    <p className='text-lg'>Attending with a guest: {formData.guest}</p>
                    {
                        formData?.guest === 'yes' && (
                            <p className='text-lg'>Guest Name: {formData.guest_name}</p>
                        )
                    }
                    {/* fill form again button */}
                    <button className='bg-blue-500 text-white p-2 rounded-md mt-2' onClick={fillFormAgain}>Fill form again</button>
                </div>


            </main>
        )
    }
    else {
        return (
            <main className='px-[10vw] py-5'>
                <header className='text-3xl font-semibold py-2'>
                    Event Registration form
                </header>
                <form className='flex flex-col gap-2 w-1/2 max-md:w-full max-lg:w-3/4' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                    {
                        formData?.name?.length < 3 && formData?.name?.length > 0 && (
                            <p className='text-red-500'>Name must be at least 3 characters long</p>
                        )
                    }
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                    {
                        !isValidEmail(formData?.email) && formData?.email?.length > 0 && (
                            <p className='text-red-500'>Please enter a valid email address</p>
                        )
                    }
                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' name='age' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} min={1} />
                    {
                        formData?.age < 1 && formData?.age > 0 && (
                            <p className='text-red-500'>Age must be at least 1</p>
                        )
                    }
                    <label htmlFor='guest'>Are you attending with a guest?</label>
                    <select name='guest' defaultValue={'no'} id='guest' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange}>
                        <option value='yes' onChange={handleChange}>Yes</option>
                        <option value='no' onChange={handleChange}>No</option>
                    </select>
                    {
                        formData?.guest === 'no' && (
                            <p className='text-lg'>You are not attending with a guest</p>
                        )
                    }
                    {
                        formData?.guest === 'yes' && (
                            <>
                                <label htmlFor='guest_name'>Guest Name</label>
                                <input type='text' id='guest_name' name='guest_name' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} />
                                {
                                    formData?.guest_name?.length < 3 && formData?.guest_name?.length > 0 && (
                                        <p className='text-red-500'>Guest name must be at least 3 characters long</p>
                                    )

                                }
                            </>
                        )
                    }
                    < hr />
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
                </form>
            </main>
        )
    }
}
