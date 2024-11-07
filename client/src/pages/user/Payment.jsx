import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Payment = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [fullName, setFullName] = useState('')

  const handlePayment = () => {
    setIsPaid(false);
    setIsPaid(true);

  };

  return (
    <>
    {!isPaid && (
      <>
      <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base mx-auto my-16">
      <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Cart
        </span>
      </li>

      <li class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
        <span class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Checkout
        </span>
      </li>

      <li class="flex shrink-0 items-center">
        <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        Order summary
      </li>
    </ol>
     <div class="font-sans bg-white p-4">
     <div class="max-w-4xl mx-auto">
       <div class="text-center">
         <h2 class="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">Checkout</h2>
       </div>

       <div class="mt-12">
         <div class="grid md:grid-cols-3 gap-4">
           <div>
             <h3 class="text-3xl font-bold text-gray-300">01</h3>
             <h3 class="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
           </div>

           <div class="md:col-span-2">
             <form>
               <div class="grid sm:grid-cols-2 gap-4">
                 <div>
                   <input type="text" placeholder="First name"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
                 <div>
                   <input type="text" placeholder="Last name"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
                 <div>
                   <input type="email" placeholder="Email address"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
                 <div>
                   <input type="number" placeholder="Phone number"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
               </div>
             </form>
           </div>
         </div>

         <div class="grid md:grid-cols-3 gap-4 mt-12">
           <div>
             <h3 class="text-3xl font-bold text-gray-300">02</h3>
             <h3 class="text-xl font-bold text-gray-800 mt-1">Shopping Address</h3>
           </div>

           <div class="md:col-span-2">
             <form>
               <div class="grid sm:grid-cols-2 gap-4">
                 <div>
                   <input type="text" placeholder="Street address"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
                 <div>
                   <input type="text" placeholder="City"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
                 <div>
                   <input type="text" placeholder="State"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
                 <div>
                   <input type="number" placeholder="Zip Code"
                     class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                 </div>
               </div>
             </form>
           </div>
         </div>

         <div class="grid md:grid-cols-3 gap-4 mt-12">
           <div>
             <h3 class="text-3xl font-bold text-gray-300">03</h3>
             <h3 class="text-xl font-bold text-gray-800 mt-1">Payment method</h3>
           </div>

           <div class="md:col-span-2">
             <div class="grid gap-4 sm:grid-cols-2">
               <div class="flex items-center">
                 <input type="radio" class="w-5 h-5 cursor-pointer" id="card" checked />
                 <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                   <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1" />
                   <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="card2" />
                   <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="card3" />
                 </label>
               </div>

               <div class="flex items-center">
                 <input type="radio" class="w-5 h-5 cursor-pointer" id="paypal" />
                 <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                   <img src="https://readymadeui.com/images/paypal.webp" class="w-20" alt="paypalCard" />
                 </label>
               </div>
             </div>

             <div class="grid sm:grid-cols-4 gap-4 mt-4">
               <div class="col-span-2">
                 <input type="number" placeholder="Card number"
                   class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
               </div>
               <div>
                 <input type="number" placeholder="EXP."
                   class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
               </div>
               <div>
                 <input type="number" placeholder="CVV"
                   class="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
               </div>
             </div>
           </div>
         </div>

         <div class="flex flex-wrap justify-end gap-4 mt-12">
           <button type="button"
             class="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100">Pay later</button>
           <button type="button"
             class="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700">Pay now</button>
         </div>
       </div>
     </div>
   </div>
   </>
      )}

      {isPaid && (
        <div className="py-8">
          <Link className="mb-8 mt-8 underline mx-8" to='/home'>Página inicial </Link>

        <div className="mt-4 flex flex-col items-center justify-center py-64">
        <p className="text-center text-gray-600 flex gap-2  ">Obrigado, <p className="first-letter:uppercase">{fullName}</p></p>
        <p className="mt-4 text-green-500 text-xl mb-4">Pagamento efetuado com sucesso</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28"
          width="28"
          viewBox="0 0 512 512"
          className="mt-2" 
        >
          <path
            className="fill-green-500"
            d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
          />
        </svg>
      </div>
      </div>
      )}

    </>
  );
};

export default Payment;
