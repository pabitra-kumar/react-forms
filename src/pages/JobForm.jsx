import React from 'react'
import { useState } from 'react'

export const JobForm = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const [frm, setFrm] = useState(true);

    const handleCheckbox = (e) => {
        if (e.target.checked) {
            setFormData({ ...formData, [e.target.name]: [...(formData[e.target.name] || []), e.target.value] })
        } else {
            setFormData({ ...formData, [e.target.name]: formData[e.target.name].filter(item => item !== e.target.value) })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData?.interview && new Date(formData?.interview).getTime() > new Date().getTime()) {
            setFrm(false)
            console.log(formData)
        }
    }

    const fillFormAgain = () => {
        setFrm(true)
        setFormData({})
    }

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const isValidURL = (url) => {
        return /^(http|https):\/\/[^ "]+$/.test(url)
    }

    if (!frm) {
        return (
            <main className='w-full min-h-[100vh] flex justify-center items-center'>
                <div className='bg-green-100 p-5 rounded-lg'>
                    <h1 className='text-2xl font-semibold'>Your form has been submitted successfully!</h1>
                    <p className='text-lg'>Name: {formData.name}</p>
                    <p className='text-lg'>Email: {formData.email}</p>
                    <p className='text-lg'>Phone: {formData.phone}</p>
                    <p className='text-lg'>Position: {formData.position}</p>
                    {
                        formData?.position === 'Developer' || formData?.position === 'Designer' ? (
                            <p className='text-lg'>Relevant Experience: {formData.experience} years</p>
                        ) : null
                    }
                    {
                        formData?.position === 'Designer' ? (
                            <p className='text-lg'>Portfolio: {formData.portfolio}</p>
                        ) : null
                    }
                    {
                        formData?.position === 'Manager' ? (
                            <p className='text-lg'>Management Experience: {formData.management}</p>
                        ) : null
                    }
                    <p className='text-lg'>Skills: {formData.skills?.join(', ')}</p>
                    <p className='text-lg'>Preferred Interview Time: {formData.interview}</p>
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
                    Job Application form
                </header>
                <form className='flex flex-col gap-2 w-1/2 max-md:w-full max-lg:w-3/4' onSubmit={handleSubmit}>

                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} minLength={3} required />
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

                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' id='phone' name='phone' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} minLength={10} required />
                    {
                        formData?.phone?.length < 10 && formData?.phone?.length > 0 && (
                            <p className='text-red-500'>Phone number must be at least 10 digits long</p>
                        )
                    }

                    <label htmlFor='position'>Applying for Position</label>
                    <select name='position' id='position' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange} required>
                        <option value=''>Select</option>
                        <option value='Developer'>Developer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Manager'>Manager</option>
                    </select>
                    {
                        formData?.position === '' && (
                            <p className='text-red-500'>Please select a position</p>
                        )
                    }

                    {
                        formData?.position === 'Developer' || formData?.position === 'Designer' ? (
                            <>
                                <label htmlFor='experience'>Relevant Experience (Number of years):</label>
                                <input type='number' id='experience' name='experience' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} min={1} required />
                                {
                                    formData?.experience < 1 && formData?.experience > 0 && (
                                        <p className='text-red-500'>Experience must be at least 1 year</p>
                                    )
                                }
                            </>
                        ) : null
                    }

                    {
                        formData?.position === 'Designer' ? (
                            <>
                                <label htmlFor='portfolio'>Portfolio URL</label>
                                <input type='url' id='portfolio' name='portfolio' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                                {
                                    !isValidURL(formData?.portfolio) && formData?.portfolio?.length > 0 && (
                                        <p className='text-red-500'>Please enter a valid URL</p>
                                    )
                                }
                            </>
                        ) : null
                    }

                    {
                        formData?.position === 'Manager' ? (
                            <>
                                <label htmlFor='management'>Management Experience</label>
                                <input type='text' id='management' name='management' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                                {
                                    formData?.management?.length < 3 && formData?.management?.length > 0 && (
                                        <p className='text-red-500'>Management experience must be at least 3 characters long</p>
                                    )
                                }
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
                    {
                        new Date(formData?.interview).getTime() < new Date().getTime() && (
                            <p className='text-red-500'>Interview time must be in the future</p>
                        )
                    }

                    < hr />
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
                </form>
            </main>
        )
    }
}

