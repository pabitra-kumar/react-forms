import React from 'react'
import { useNavigation } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigation()
    navigate('/basic_form')
    return (
        <div>Home</div>
    )
}
