import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { SiGmail, SiHashnode } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/SudarshanDhage' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/sudarshan-dhage/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://twitter.com/DhageSudarshan_' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>

            <a href='mailto:sudarshan096k@gmail.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiGmail />
            </a>

            <a href='https://www.youtube.com/@SudarshanDhageVlogs' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaYoutube />
            </a>          

            <a href='https://wa.link/2u9pw7' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaWhatsapp />
            </a>

            
        </div>
    );
};

export default HeaderSocials;
