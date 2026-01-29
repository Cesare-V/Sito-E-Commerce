import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
        
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTATTACI"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Il nostro Negozio</p>
          <p className="text-gray-500">20489 Via Lorem Ipsum <br /> 80, Dolor Italia</p>
          <p className="text-gray-500">Tel: (36) 555-0132 <br /> Email: admin@forever.com</p>
          <p className="font-semibold text-xl text-gray-600">Carriere presso Forever</p>
          <p className="text-gray-500">Scopri di più sui nostri team e sulle opportunità di lavoro</p>
          <button className="border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Esplora le offerte di lavoro</button>
        </div>
      </div>
    <NewsletterBox />
    </div>
  )
}

export default Contact