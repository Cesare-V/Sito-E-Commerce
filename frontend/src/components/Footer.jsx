import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            <div>
                <img src={assets.logo} className="mb-5 w-32" alt="" />
                <p className="w-full md:w-2/3 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nisi excepturi magni quidem, reprehenderit accusantium animi. Quod, expedita eius voluptate veritatis, iusto unde iste rerum libero laborum similique sint nemo!
                </p>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">Azienda</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Consegna</li>
                    <li>Politica della privacy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">CONTATTACI</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+2-359-854-8963</li>
                    <li>contattaci@foreveryou.com</li>
                </ul>
            </div>

        </div>

    <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@ forever.com - Tutti i diritti riservati.</p>
    </div>

    </div>
  )
}

export default Footer