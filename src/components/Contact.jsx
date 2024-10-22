import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [serviceType, setServiceType] = useState('');  // New state for the selected service type

    const handleWhatsAppSubmit = (e) => {
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

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Construct the mailto URL
        const mailtoUrl = `mailto:sohailmudabbir@gmail.com?subject=Client%20Service%20Request&body=
            Name: ${encodeURIComponent(name)}
            %0AContact Number: ${encodeURIComponent(contact)}
            %0AService Requested: ${encodeURIComponent(serviceType)}
            %0AMessage: ${encodeURIComponent(message)}`;

        // Open email client with pre-filled message
        window.open(mailtoUrl, '_blank');
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleWhatsAppSubmit}
                className="p-6 rounded shadow-md w-full max-w-md"
                style={{ boxShadow: '0px 0px 20px rgba(200, 200, 200, 0.5)' }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

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
                        Message <span className="text-gray-400 text-xs">(Please describe your project needs in detail)</span>
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
                <div className="mb-4">
    <label className="block text-white-700 text-sm font-bold mb-2">Preferred Contact Method</label>
    <div className="flex space-x-4">
        <label className="inline-flex items-center">
            <input
                type="radio"
                name="contactMethod"
                value="WhatsApp"
                onChange={(e) => setContactMethod(e.target.value)}
                className="form-radio"
                required
            />
            <span className="ml-2">WhatsApp</span>
        </label>
        <label className="inline-flex items-center">
            <input
                type="radio"
                name="contactMethod"
                value="Email"
                onChange={(e) => setContactMethod(e.target.value)}
                className="form-radio"
                required
            />
            <span className="ml-2">Email</span>
        </label>
        <label className="inline-flex items-center">
            <input
                type="radio"
                name="contactMethod"
                value="Phone Call"
                onChange={(e) => setContactMethod(e.target.value)}
                className="form-radio"
                required
            />
            <span className="ml-2">Phone Call</span>
        </label>
    </div>
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

                <div className="flex items-center justify-center space-x-4">
                    {/* WhatsApp button */}
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleWhatsAppSubmit}
                    >
                        Send via WhatsApp
                    </button>

                    {/* Email button */}
                    <button
                        type="button"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleEmailSubmit}
                    >
                        Send via Email
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
