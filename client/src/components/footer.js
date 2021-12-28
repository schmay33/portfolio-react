import React from 'react';
import Stack from 'react-bootstrap/Stack';

function Footer() {
    return (
        <div>
            
            <Stack direction="horizontal" gap="3" className='justify-content-center'>
                Connect with me on:
                <a href='https://www.linkedin.com/in/nathan-schmidt-1b083a72/' target='_blank' rel="noreferrer">LinkedIn</a>
                <a href="https://www.instagram.com/schmay.n/" target='_blank' rel="noreferrer">Instagram</a> 
            </Stack>
        </div>
    )
}

export default Footer
