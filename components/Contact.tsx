import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Example: send to your API route or email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Network error. Please try again later.');
    }
  };

  return (
    <section ref={ref} id="contact" className="py-24 md:py-48 text-center">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-accent font-mono mb-2">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">Get In Touch</h2>
        <p className="max-w-xl mx-auto mb-12 text-dark-text-secondary">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi,
          feel free to reach out using the form below — I'll do my best to get back to you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-dark-card p-8 rounded-xl shadow-lg border border-accent/20 text-left"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block font-mono text-sm text-dark-text-secondary mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-accent/30 text-dark-text focus:border-accent focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block font-mono text-sm text-dark-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-accent/30 text-dark-text focus:border-accent focus:outline-none"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block font-mono text-sm text-dark-text-secondary mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-accent/30 text-dark-text focus:border-accent focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full font-mono text-lg border border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent/10 transition-colors duration-300"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-center font-mono text-sm text-accent">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
