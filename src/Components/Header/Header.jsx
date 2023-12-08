import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b my-2 py-2'>
            <div>
                <h2 className='text-3xl font-extrabold'>Knowledge Cafe</h2>
            </div>
            <div>
                <img src="../../../images/profile.png" alt="" />
            </div>
        </div>
    );
};

export default Header;