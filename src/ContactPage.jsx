import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi'; // Using a standard check icon
import TalkToUsButton from './TalkToUsButton';



const ShowYouAroundSection = () => {

  // Simple state management for form inputs (optional, but good practice)

  const [formData, setFormData] = React.useState({

    fullName: '',

    workEmail: '',

    phoneNumber: '',

    comments: '',

  });



  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    console.log('Form Submitted:', formData);

    alert('Form submitted! Check the console for data.');

    // Add your actual form submission logic here

  };



  const listItems = [

    'No sales pitches - just a quick tour.',

    'See real results in action.',

    'Personalized for your needs.',

    'Answers to your questions, live.',

  ];



  return (

    // Outer container with the subtle grid background pattern

    // Note: The grid background is approximated using a radial-gradient for simplicity. 

    // For a perfect grid, a background image or complex CSS may be needed.

    <section 

      className="py-16 px-4 sm:px-6 lg:px-8"

      style={{ 

        backgroundColor: '#f8f8fa', // Very light gray background

        backgroundImage: 'radial-gradient(#e0e0e0 1px, transparent 0)',

        backgroundSize: '20px 20px',

      }}

    >

      <div className="max-w-7xl mx-auto flex justify-center items-center min-h-[600px]">

        {/* Main Content Card/Container */}

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2">

          

          {/* Left Side: Text and Bullet Points */}

          <div className="p-10 lg:p-12 flex flex-col justify-center">

            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">

              <span className="text-purple-700">We'd love to</span><br />

              Show you around!

            </h1>

            

            <ul className="mt-8 space-y-4">

              {listItems.map((item, index) => (

                <li key={index} className="flex items-start text-gray-700">

                  <FiCheckCircle className="w-5 h-5 mt-1 text-purple-600 flex-shrink-0" />

                  <span className="ml-3 text-base">{item}</span>

                </li>

              ))}

            </ul>

          </div>



          {/* Right Side: Form */}

          <div className="p-8 lg:p-12 bg-white border-l border-gray-100">

            <form onSubmit={handleSubmit} className="space-y-6">

              

              {/* Full Name */}

              <div>

                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">

                  Full Name*

                </label>

                <input

                  type="text"

                  name="fullName"

                  id="fullName"

                  placeholder="eg: Jack Sparrow"

                  value={formData.fullName}

                  onChange={handleChange}

                  required

                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-base"

                />

              </div>



              {/* Work Email */}

              <div>

                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">

                  Work Email*

                </label>

                <input

                  type="email"

                  name="workEmail"

                  id="workEmail"

                  placeholder="you@company.com"

                  value={formData.workEmail}

                  onChange={handleChange}

                  required

                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-base"

                />

              </div>



              {/* Phone Number */}

              <div>

                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">

                  Phone number

                </label>

                <input

                  type="tel"

                  name="phoneNumber"

                  id="phoneNumber"

                  value={formData.phoneNumber}

                  onChange={handleChange}

                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-base"

                />

              </div>



              {/* Comments */}

              <div>

                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">

                  Comments

                </label>

                <textarea

                  name="comments"

                  id="comments"

                  rows="4"

                  value={formData.comments}

                  onChange={handleChange}

                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-base"

                ></textarea>

              </div>



              {/* Submit Button */}

              <div>

                <button

                  type="submit"

                  className="w-full py-3 px-4 rounded-lg text-white font-semibold text-lg transition duration-300"

                  style={{

                    // Custom style for the gradient button

                    background: 'linear-gradient(90deg, #9333ea 0%, #d8b4fe 100%)',

                    boxShadow: '0 4px 10px rgba(147, 51, 234, 0.4)',

                  }}

                >

                  Submit

                </button>

              </div>



            </form>

          </div>

        </div>

      </div>

    </section>

  );

};



// Navbar component for Contact Page
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Optylize */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter">Optylize</Link>
          </div>

          {/* Desktop Menu - Talk to us button (navigates to home) */}
          <div className="hidden md:flex space-x-8 items-center">
            <TalkToUsButton onClick={() => navigate('/')} />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <TalkToUsButton onClick={() => navigate('/')} />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Main Contact Page Component
const ContactPage = () => {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <ShowYouAroundSection />
      </main>
    </div>
  );
};

export default ContactPage;


