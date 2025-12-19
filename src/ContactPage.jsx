import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Icons for contact methods

const ContactPage = () => {
  // Simple state management for form inputs
  const [formData, setFormData] = React.useState({
    fullName: '',
    workEmail: '',
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

  return (
    // Outer container: Full height, centered content, light gray background
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-20">
      
      {/* Main Container: Split layout for more content */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">

        {/* Left Side (Column 1): Contact Information & Secondary CTA */}
        <div className="lg:col-span-1 bg-gray-900 text-white p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">Start the conversation.</h3>
            <p className="text-gray-300 mb-8">
              Tell us about your challenges, and let's explore how we can help your business grow.
            </p>
            
            {/* Direct Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a href="mailto:contact@consulting.com" className="text-gray-300 hover:text-white transition duration-150">
                  contact@consulting.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition duration-150">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 mt-1 text-gray-300 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Main Street, Suite 500, City, State 90210
                </span>
              </div>
            </div>
          </div>

          {/* Optional Footer/Branding in the sidebar */}
          <div className="mt-8 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Consulting Co.</p>
          </div>
        </div>

        {/* Right Side (Columns 2 & 3): Form */}
        <div className="lg:col-span-2 p-8 sm:p-10 lg:p-12">
          
          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Request a Consultation</h2>
            <p className="mt-1 text-gray-600">Fill out the form and a senior consultant will be in touch within one business day.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900">
                Your Name*
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="eg: Jane Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-900 focus:border-gray-900 text-base"
              />
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-sm font-semibold text-gray-900">
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
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-900 focus:border-gray-900 text-base"
              />
            </div>

             {/* Comments/Project Details */}
            <div>
              <label htmlFor="comments" className="block text-sm font-semibold text-gray-900">
                Project Details
              </label>
              <textarea
                name="comments"
                id="comments"
                rows="6" // Made the text area larger
                placeholder="Tell us a little about your business and project needs..."
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-900 focus:border-gray-900 text-base"
              ></textarea>
            </div>

            {/* Submit Button (Sleek Black) */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-gray-900 text-white font-semibold text-lg hover:bg-gray-700 transition duration-150 shadow-md"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;