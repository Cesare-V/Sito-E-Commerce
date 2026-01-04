import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm md:text-base text-gray-700">
        <div>
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Politica dei cambi</p>
          <p className="text-gray-400">Offriamo una politica di cambio senza complicazioni</p>
        </div>
        <div>
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Restituzione entro 7 giorni</p>
          <p className="text-gray-400">Offriamo una politica di reso gratuito entro 7 giorni</p>
        </div>
        <div>
          <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Miglior servizio clienti</p>
          <p className="text-gray-400">Forniamo assistenza clienti 24 ore su 24, 7 giorni su 7</p>
        </div>
    </div>
  )
}

export default OurPolicy