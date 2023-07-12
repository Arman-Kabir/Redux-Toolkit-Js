import { CartIcon, Testing } from '../icons';
import { UseSelector, useSelector } from 'react-redux';


import React from 'react'

export const Navbar = () => {
    // console.log(useSelector((store) => { console.log(store) }));

    const {amount}  = useSelector((store)=>store.cart);

    return (
        <nav>
            <div className='nav-center'>
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    {/* <Testing></Testing> */}
                    <CartIcon></CartIcon>
                    <div className="amount-container">
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

