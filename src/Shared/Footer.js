import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className='absolute bottom-0 w-full'>
            <div className="bg-indigo-600 text-center w-full">
                <div className="text-gray-100 text-center p-4" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                    &copy; {getCurrentYear()} Copyright:
                    <a className="text-gray-100" href="https://tailwind-elements.com/">Todo app</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;