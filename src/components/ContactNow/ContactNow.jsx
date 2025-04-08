import React from 'react'
import "./ContactNow.css"
import { FaArrowRight } from 'react-icons/fa'
const ContactNow = () => {
return (
    <section id='contactNow'>
        <div className='content'>
        <h3>Try me out, risk free!</h3>
        <p>If you’re not happy with the design after the first draft,
                I’ll refund your deposit,</p>
                <span> no questions asked</span>
    </div>
    <a className="primaryBtn" href="#contact">
            Contact <FaArrowRight className='arrow'/>
    </a>
    </section>
    )
}

export default ContactNow