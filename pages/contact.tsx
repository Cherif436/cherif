import emailjs from 'emailjs-com';
import { useState } from 'react';
import { motion } from 'framer-motion'

const Result = () => {
    return (
        <h3 className="text-yellow-500">Votre message est envoyée avec succés</h3>
    )
}

export default function Contact(props){
    const [result, showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_bc38yge', 'template_g6n4vam', e.target, 'user_pUyHpt1FBh4I0cg7cx4b8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset();
            showResult(true)
    }

    setTimeout(() => {
        showResult(false)
    }, 9000)

  return (
    <motion.div className="flex items-center overflow-y-scroll dark:bg-dark-500">
        <div className="container mx-auto">
            <div className="max-w-xl p-1 mx-auto my-10 rounded-md shadow-sm">
                <div className="text-center">
                    <h3 className="my-4 text-3xl font-medium tracking-wider text-red-500">Contactez-moi</h3>
                    <p className="text-gray-400 dark:text-white"></p>
                </div>
                <div className="m-7">
                    <form action="" onSubmit={sendEmail}>
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 pr-2 mb-4 sm:col-span-6 lg:col-span-6">
                                <label htmlFor="nom" className="block mb-2 text-sm text-gray-600 dark:text-white">Nom</label>
                                <input type="text" name="nom" placeholder="John" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-dark-700 dark:text-white dark:placeholder-white dark:border-white dark:focus:border-white" />
                            </div>
                            <div className="col-span-12 mb-4 sm:col-span-6 lg:col-span-6">
                                <label htmlFor="prenom" className="block mb-2 text-sm text-gray-600 dark:text-white">Prénom</label>
                                <input type="text" name="prenom" placeholder="Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-dark-700 dark:text-white dark:placeholder-white dark:border-white dark:focus:border-white" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-white">Email</label>
                            <input type="email" name="email" placeholder="xyz@exemple.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-dark-700 dark:text-white dark:placeholder-white dark:border-white dark:focus:border-white" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="sujet" className="text-sm text-gray-600 dark:text-white">Sujet</label>
                            <input type="text" name="sujet" placeholder="Sujet du message" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-dark-700 dark:text-white dark:placeholder-white dark:border-white dark:focus:border-white" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-white">Message</label>

                            <textarea placeholder="Votre message" name="message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-dark-700 dark:text-white dark:placeholder-white dark:border-white dark:focus:border-white" />
                        </div>
                        <div className="mb-4">
                            <button className="w-full px-3 py-4 text-white bg-gradient-to-r dark:from-dark-500 dark:to-dark-700 dark:text-white">Envoyer le message</button>
                        </div>
                        <div className="flex text-center">
                            { result ? <Result /> : null } 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

