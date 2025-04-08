import React from 'react'
import facebook from "../../assets/images/facebook.svg"
import linkedin from "../../assets/images/linkedin.svg"
import "./Footer.css"
import { RiGithubLine } from 'react-icons/ri'
const Footer = () => {
    return (
    <footer>
        <div className='footercontainer'>
            <p>@ 2024. All Rights Reserved</p>
            <p>Develpoment by Sarah</p>
            <div className='mysocial'>
                <a aria-label="sarah's facebook"
                    href="https://www.facebook.com/sarah.salame.75">
                    <img src={facebook} alt='facebook' className='facebook'/>
                </a>
                <a aria-label="sarah's linkedin"
                    target="_blank"
                    href="https://www.linkedin.com/in/sarah-salame-29aa0335a">
                    <img src={linkedin} alt='linkedIn' className='linkedIn'/>
                </a>
                <a 
                aria-label="sarah's github"
                target="_blank"
                href="https://github.com/SarahSalame"
                >
                    <RiGithubLine className='github' />
                </a>
            </div>
        </div>
    </footer>
    )
}

export default Footer