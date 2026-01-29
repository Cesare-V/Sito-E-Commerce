import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
        <div className="text-2xl text-center pt-8 border-t">
          <Title text1={"CHI"} text2={"SIAMO"}/>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempore, tempora officia illo, neque optio aliquam ullam inventore tenetur eos, cupiditate deserunt? Omnis sequi quidem aperiam dolores perferendis! Consequuntur, minima!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cumque atque beatae iste nemo quae doloribus quod in laudantium deserunt praesentium possimus omnis modi? Tempore dolor quos illo perspiciatis enim!</p>
            <b className="text-gray-800">La nostra Missione</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officia consequatur numquam mollitia similique voluptatem, quos delectus id pariatur consectetur animi culpa cumque autem! Aspernatur quod quidem eaque sint ipsum.</p>
          </div>
        </div>

        <div className="text-xl py-4">
          <Title text1={"PERCHÉ"} text2={"SCEGLIERE NOI"} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Garanzia di qualità:</b>
            <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium autem pariatur tenetur perspiciatis aut voluptatibus rem obcaecati, tempora est, commodi, officia omnis possimus. Sequi voluptate ipsa dolorum harum iste consequuntur.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Comodità:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas at dolores sint facere dolorum corrupti, officia esse quidem adipisci nobis, laborum quia cupiditate. Totam doloremque libero expedita reprehenderit quasi.</p>
          </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Servizio clienti eccezionale</b>
            <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consectetur molestiae quibusdam tempore dolore porro, mollitia magni adipisci nam, consequatur aliquid. Laborum similique magni, voluptatibus cupiditate incidunt nobis consectetur obcaecati.</p>
          </div>
        </div>

        <NewsletterBox/>
    </div>
  )
}

export default About