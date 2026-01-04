import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Iscriviti ora e ottieni uno sconto del 20%</p>
        <p className="text-gray-400 mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil itaque, amet fugiat accusamus ducimus dicta delectus iusto nesciunt ipsa culpa, et, earum ratione sapiente quasi atque deleniti minima nisi quaerat!
        </p>
        <form  onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Inserisci la tua email" required />
            <button type="submit" className="bg-black text-white text-xs px-10 py-4">ISCRIVITI</button>
        </form>
    </div>
  )
}

export default NewsletterBox