import React from 'react'
import ContactForm from './ContactForm'
import Socialmedia from './Socialmedia'

const Contact = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center justify-center '>
            <Socialmedia />
            <ContactForm/>
    </div>
  )
}

export default Contact