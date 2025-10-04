import { Coffee, Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Socialmedia = () => {
    return (
        <>
            <div className="w-1/2 pt-10 lg:pt-0">
                <div className="hidden icon-box md:flex justify-center items-center gap-10 text-teal-400 ">
                    <a target='_blank' href="https://www.linkedin.com/in/asutoshsahoo/" className='border border-teal-400 p-10 rounded-xl hover:-translate-y-5 transition-all hover:text-white hover:border-white'><Linkedin size={60}/></a>
                    <a target='_blank' href="https://github.com/DearAsutosh" className='border border-teal-400 p-10 rounded-xl hover:-translate-y-5 transition-all hover:text-white hover:border-white'><Github size={60}/></a>
                    <a target='_blank' href="https://x.com/DearAsutosh" className='border border-teal-400 p-10 rounded-xl hover:-translate-y-5 transition-all hover:text-white hover:border-white'><Twitter size={60}/></a>
                    <a target='_blank' href="https://buymeacoffee.com/asutoshsahoo" className='border border-teal-400 p-10 rounded-xl hover:-translate-y-5 transition-all hover:text-white hover:border-white'><Coffee size={60}/></a>
                </div>
                 <div className="md:hidden icon-box flex justify-center items-center gap-10 text-teal-400">
                    <a target='_blank' href="https://www.linkedin.com/in/asutoshsahoo/" className='border border-teal-400 p-3 rounded-lg hover:-translate-y-5 transition-all'><Linkedin size={30}/></a>
                    <a target='_blank' href="https://github.com/DearAsutosh" className='border border-teal-400 p-3 rounded-lg hover:-translate-y-5 transition-all'><Github size={30}/></a>
                    <a target='_blank' href="https://x.com/DearAsutosh" className='border border-teal-400 p-3 rounded-lg hover:-translate-y-5 transition-all'><Twitter size={30}/></a>
                    <a target='_blank' href="https://buymeacoffee.com/asutoshsahoo" className='border border-teal-400 p-3 rounded-lg hover:-translate-y-5 transition-all'><Coffee size={30}/></a>
                </div>
            </div>
        </>
    )
}

export default Socialmedia