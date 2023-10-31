import React from 'react'
import { Element } from 'react-scroll'
function ContactUs() {
  return (
    <Element name="contact">
    <section className="h-full bg-gradient-to-r from-white to-gray-100">
      <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 rounded opacity-75 bg-primary-300"></div>
        <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
          If you got any issue, Want to get any help about anything feel free to get any help about anything? <strong className='font-bold'>Call at: <span className='text-black'>03186595507</span></strong> and also <strong className='font-bold'> Email us: <span className='text-black'>ahsanzjt@gmail.com</span> </strong>
        </p>
        <form action="/" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="123455598"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a comment..."
            />
          </div>
          <button
            type="submit"
            className="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 sm:w-fit hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </Element>
  )
}

export default ContactUs