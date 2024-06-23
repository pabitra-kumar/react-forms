import React from 'react'
import { useState } from 'react'

export const AdvancedForm = () => {
    const [formData, setFormData] = useState({})

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
        setFormData({})
    }

    if (!frm) {
        return (
            <main className='w-full min-h-[100vh] flex justify-center items-center'>
                <div className='bg-green-100 p-5 rounded-lg'>
                    <h1 className='text-2xl font-semibold'>Your form has been submitted successfully!</h1>
                    <p className='text-lg'>Name: {formData.name}</p>
                    <p className='text-lg'>Email: {formData.email}</p>
                    <p className='text-lg'>Survey Topic: {formData.surveyTopic}</p>
                    {
                        formData?.surveyTopic === 'Technology' ? (
                            <>
                                <p className='text-lg'>Favorite Programming Language: {formData.favLanguage}</p>
                                <p className='text-lg'>Years of Experience: {formData.yearsExp}</p>
                            </>
                        ) : null
                    }
                    {
                        formData?.surveyTopic === 'Health' ? (
                            <>
                                <p className='text-lg'>Exercise Frequency: {formData.exerciseFreq}</p>
                                <p className='text-lg'>Diet Preference: {formData.dietPref}</p>
                            </>
                        ) : null
                    }
                    {
                        formData?.surveyTopic === 'Education' ? (
                            <>
                                <p className='text-lg'>Highest Qualification: {formData.highestQual}</p>
                                <p className='text-lg'>Field of Study: {formData.fieldOfStudy}</p>
                            </>
                        ) : null
                    }
                    <p className='text-lg'>Feedback: {formData.feedback}</p>
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
                    Advanced Survey form
                </header>
                <form className='flex flex-col gap-2 w-1/2 max-md:w-full max-lg:w-3/4' onSubmit={handleSubmit}>

                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} minLength={3} required />

                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />

                    <label htmlFor='surveyTopic'>Survey Topic</label>
                    <select name='surveyTopic' id='surveyTopic' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange} required>
                        <option value=''>Select</option>
                        <option value='Technology'>Technology</option>
                        <option value='Health'>Health</option>
                        <option value='Education'>Education</option>
                    </select>

                    {
                        formData?.surveyTopic === 'Technology' ? (
                            <>
                                <label htmlFor='favLanguage'>Favorite Programming Language</label>
                                <select name='favLanguage' id='favLanguage' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange} required>
                                    <option value=''>Select</option>
                                    <option value='JavaScript'>JavaScript</option>
                                    <option value='Python'>Python</option>
                                    <option value='Java'>Java</option>
                                    <option value='C#'>C#</option>
                                </select>
                                <label htmlFor='yearsExp'>Years of Experience</label>
                                <input type='number' id='yearsExp' name='yearsExp' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} min={1} required />
                            </>
                        ) : null
                    }

                    {
                        formData?.surveyTopic === 'Health' ? (
                            <>
                                <label htmlFor='exerciseFreq'>Exercise Frequency</label>
                                <select name='exerciseFreq' id='exerciseFreq' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange} required>
                                    <option value=''>Select</option>
                                    <option value='Daily'>Daily</option>
                                    <option value='Weekly'>Weekly</option>
                                    <option value='Monthly'>Monthly</option>
                                    <option value='Rarely'>Rarely</option>
                                </select>
                                <label htmlFor='dietPref'>Diet Preference</label>
                                <select name='dietPref' id='dietPref' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange} required>
                                    <option value=''>Select</option>
                                    <option value='Vegetarian'>Vegetarian</option>
                                    <option value='Vegan'>Vegan</option>
                                    <option value='Non-Vegetarian'>Non-Vegetarian</option>
                                </select>
                            </>
                        ) : null
                    }

                    {
                        formData?.surveyTopic === 'Education' ? (
                            <>
                                <label htmlFor='highestQual'>Highest Qualification</label>
                                <select name='highestQual' id='highestQual' className='p-2 border border-gray-300 rounded-md w-1/2' onChange={handleChange} required>
                                    <option value=''>Select</option>
                                    <option value='High School'>High School</option>
                                    <option value='Bachelor'>Bachelor</option>
                                    <option value='Master'>Master</option>
                                    <option value='PhD'>PhD</option>
                                </select>
                                <label htmlFor='fieldOfStudy'>Field of Study</label>
                                <input type='text' id='fieldOfStudy' name='fieldOfStudy' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required />
                            </>
                        ) : null
                    }

                    <label htmlFor='feedback'>Feedback</label>
                    <textarea id='feedback' name='feedback' className='p-2 border border-gray-300 rounded-md' onChange={handleChange} required></textarea>

                    < hr />
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
                </form>
            </main>
        )
    }
}


