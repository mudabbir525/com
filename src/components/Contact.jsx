import React, { useState } from 'react';
const Contact = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [serviceType, setServiceType] = useState('');  // New state for the selected service type

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct the WhatsApp URL
        const whatsappUrl = `https://api.whatsapp.com/send?phone=+918328497607&text=
            Name: ${encodeURIComponent(name)}
            %0AContact Number: ${encodeURIComponent(contact)}
            %0AService Requested: ${encodeURIComponent(serviceType)}
            %0AMessage: ${encodeURIComponent(message)}`;

        // Open WhatsApp with pre-filled message
        window.open(whatsappUrl, '_blank');
    };
    return (
        <div className="flex justify-center items-center min-h-screen  ">
            <form 
                onSubmit={handleSubmit} 
                className=" p-6 rounded shadow-md w-full max-w-md 0"
                style={{ boxShadow: '0px 0px 20px rgba(200, 200, 200, 0.5)' }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center ">Contact Us</h2>
                
                <div className="mb-4">
                    <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="contact">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your contact number"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your message"
                        rows="1"
                        required
                    ></textarea>
                </div>
                
                <div className="mb-6">
                    <label className="block text-white-900 text-xl font-bold mb-2">
                        Select Service Type:
                    </label>

                    <div className="mb-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="serviceType"
                                value="Frontend Development (New Build)"
                                onChange={(e) => setServiceType(e.target.value)}
                                className="form-radio"
                                required
                            />
                            <span className="ml-2">Frontend Development (New Build)</span>
                        </label>
                    </div>

                    <div className="mb-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="serviceType"
                                value="Backend Development (New Build)"
                                onChange={(e) => setServiceType(e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">Backend Development (New Build)</span>
                        </label>
                    </div>

                    <div className="mb-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="serviceType"
                                value="Full Stack Development (Frontend & Backend)"
                                onChange={(e) => setServiceType(e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">Full Stack Development (Frontend & Backend)</span>
                        </label>
                    </div>

                    <div className="mb-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="serviceType"
                                value="Enhancements to Existing Website"
                                onChange={(e) => setServiceType(e.target.value)}
                                className="form-radio"
                            />
                            <span className="ml-2">Enhancements to Existing Website</span>
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Send via WhatsApp
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
