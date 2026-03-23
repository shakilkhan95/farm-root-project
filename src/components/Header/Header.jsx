import React from 'react';

const Header = () => {
    return (
        <header className=''>
            {/* logo section  */}
            <div>
                <h3>FarmRoot</h3>
            </div>

            {/* nav section  */}
            <nav>
                <a href="/">Home</a>
                <a href="/">Menu</a>
                <a href="/">About Us</a>
                <a href="/">Subscription</a>
                <a href="/">Recipes</a>
                <a href="/">Contact Us</a>
            </nav>
        </header>
    );
};

export default Header;