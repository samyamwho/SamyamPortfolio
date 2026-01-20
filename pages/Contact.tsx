import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { EMAIL_CONFIG } from '../pages/emailconfig';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAIL_CONFIG;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('EmailJS credentials are missing.');
        alert('System Error: The email service is not configured correctly.');
        setIsSubmitting(false);
        return;
    }

    try {
        // Mapping form data to variables matching common EmailJS templates
        const templateParams = {
            subject: formData.subject,
            from_name: `${formData.firstName} ${formData.lastName}`,
            reply_to: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
            // Adding a 'name' param too as it was in your snippet
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' }); 
    } catch (error) {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please check your internet connection and try again.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white selection:bg-red-500 selection:text-white">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        
        {/* Info Side (Left on Desktop) */}
        <div className="w-full lg:w-5/12 bg-black text-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-md">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">Contact</h2>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-none">
              Let's craft <br/> something <span className="text-red-500">great.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
              Whether you have a specific project in mind or just want to say hi, I'm always open to new connections.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-3 rounded-full border border-gray-800 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                  <a href="mailto:samyamshr@gmail.com" className="text-lg hover:text-red-500 transition-colors">samyamshr@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-3 rounded-full border border-gray-800 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Call</p>
                  <p className="text-lg">+977 9841956958</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-3 rounded-full border border-gray-800 group-hover:bg-red-500 group-hover:border-red-500 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                  <p className="text-lg">Gatthaghar, Bhaktapur, Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side (Right on Desktop) */}
        <div className="w-full lg:w-7/12 bg-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-2xl w-full mx-auto">
            {isSubmitted ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle className="text-red-500 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-bold tracking-tight mb-4">Message Received!</h3>
                <p className="text-gray-500 text-lg font-light mb-12 max-w-sm">
                  Thanks for reaching out. I've received your inquiry and will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-black font-bold border-b-2 border-black pb-1 hover:text-red-500 hover:border-red-500 transition-all duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold tracking-tighter mb-10">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-2 group-focus-within:text-black transition-colors">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-b border-gray-200 py-3 text-lg focus:border-black outline-none transition-all disabled:opacity-50 bg-transparent" 
                        placeholder="e.g. Samyam" 
                      />
                    </div>
                    <div className="relative group">
                      <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-2 group-focus-within:text-black transition-colors">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full border-b border-gray-200 py-3 text-lg focus:border-black outline-none transition-all disabled:opacity-50 bg-transparent" 
                        placeholder="e.g. Shrestha" 
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-2 group-focus-within:text-black transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-200 py-3 text-lg focus:border-black outline-none transition-all disabled:opacity-50 bg-transparent" 
                      placeholder="email@example.com" 
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-2 group-focus-within:text-black transition-colors">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-200 py-3 text-lg focus:border-black outline-none transition-all disabled:opacity-50 bg-transparent" 
                      placeholder="Project Inquiry, Hello, etc." 
                    />
                  </div>

                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-2 group-focus-within:text-black transition-colors">Your Message</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full border-b border-gray-200 py-3 text-lg focus:border-black outline-none transition-all disabled:opacity-50 bg-transparent resize-none" 
                      placeholder="Tell me about your vision..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group bg-black text-white px-12 py-5 font-bold tracking-wide hover:bg-gray-800 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-gray-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;