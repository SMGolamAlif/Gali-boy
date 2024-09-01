import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto p-4 m-5 flex flex-col items-center bg-gray-900 text-white rounded-md">
      <h1 className="text-6xl font-bold mb-8">
        Contact Me
        <span role="img" aria-label="waving hand">
          👋
        </span>
      </h1>
      <p className="text-center mb-12">
        If you have any questions or just want to say hi, feel free to send me a
        message. I'd love to chat with you!
      </p>
      <img
        src="https://images.unsplash.com/photo-1531546932101-155fd62dc6a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="man sitting on a couch with a laptop"
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
      <form
        action="https://formspree.io/f/mldrzqva"
        method="POST"
        className="flex flex-col w-full md:w-1/2 mt-12 bg-gray-800 p-4 rounded-lg shadow-lg"
      >
        <label htmlFor="name" className="mb-2 text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="p-2 mb-4 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />
        <label htmlFor="email" className="mb-2 text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="p-2 mb-4 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        />
        <label htmlFor="message" className="mb-2 text-white">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="p-2 mb-4 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}
