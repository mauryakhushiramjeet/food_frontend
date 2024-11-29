import React from 'react'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 min-h-[80vh] w-full">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything to your cart yet!
        </p>
        <div>
          <img
            src="https://bdcosmeticsbazar.com/assets/images/empty-cart.png"
            alt="Empty Cart"
            className="mx-auto mb-6 w-80"
          />
        </div>
       <Link to={"/"}> <button className="bg-[#0d7c66] text-white font-bold py-2 px-4 rounded-md hover:bg-[#54f6d6] hover:text-black active:scale-95
         transition-all duration-300">
          Go Shopping
        </button></Link>
      </div>
    </div>;
    </div>
  )
}

export default EmptyCart
