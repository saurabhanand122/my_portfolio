import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './AppIcon';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '');
const contactApiUrl = apiBaseUrl ? `${apiBaseUrl}/api/contact` : '/api/contact';
const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_g42hw1f';
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5oh9udo';
const emailjsAutoReplyTemplateId =
  process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID || 'template_hp9ugjr';
const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'D0Jls9_8cwJFZjynu';

const sendEmailjsTemplate = (templateId, templateParams) =>
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: emailjsServiceId,
      template_id: templateId,
      user_id: emailjsPublicKey,
      template_params: templateParams,
    }),
  });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactLinks = [
    {
      name: 'Gmail',
      href: 'mailto:saurabh.anandofficial122@gmail.com',
      icon: 'Mail',
      primary: true
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/saurabh-anand-2b5620279/',
      icon: 'Linkedin'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/saurabhanand122',
      icon: 'Github'
    },
    {
      name: 'GFG',
      href: 'https://www.geeksforgeeks.org/profile/saurabhatweeknd',
      icon: 'Code2'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        name: formData.name,
        email: formData.email,
      };

      const notificationPromise = sendEmailjsTemplate(emailjsTemplateId, templateParams);
      const autoReplyPromise = sendEmailjsTemplate(emailjsAutoReplyTemplateId, templateParams);
      const dbPromise = fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const [notificationResult, autoReplyResult, dbResult] = await Promise.allSettled([
        notificationPromise,
        autoReplyPromise,
        dbPromise,
      ]);

      const notificationSuccess =
        notificationResult.status === 'fulfilled' && notificationResult.value.ok;
      const autoReplySuccess =
        autoReplyResult.status === 'fulfilled' && autoReplyResult.value.ok;
      
      let dbSuccess = false;
      let dbMessage = '';
      if (dbResult.status === 'fulfilled') {
        dbSuccess = dbResult.value.ok;
        try {
          const data = await dbResult.value.json();
          dbMessage = data.message;
        } catch (_) {}
      }

      if (!autoReplySuccess) {
        console.error('EmailJS auto-reply failed:', autoReplyResult);
      }

      if (notificationSuccess) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else if (dbSuccess) {
        // If email delivery fails but it was successfully saved to MongoDB, we still got it!
        setSubmitStatus({ 
          type: 'success', 
          message: dbMessage || 'Thank you! Your message has been received.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        if (notificationResult.status === 'fulfilled' && !notificationResult.value.ok) {
          try {
            const errText = await notificationResult.value.text();
            console.error('EmailJS Error details:', errText);
          } catch (_) {}
        }
        setSubmitStatus({ 
          type: 'error', 
          message: 'Failed to send message. Please check your network or try again later.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="relative overflow-hidden scroll-mt-20 py-20 bg-transparent">
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on something amazing? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 shadow-brand-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </motion.div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-center p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-success/20 text-success border border-success/30'
                    : 'bg-destructive/20 text-destructive border border-destructive/30'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex min-w-[150px] items-center justify-center gap-3 rounded-xl border px-7 py-4 text-lg font-semibold transition-all duration-300 hover-lift ${
                link.primary
                  ? 'border-primary bg-primary text-primary-foreground shadow-brand hover:shadow-brand-lg'
                  : 'border-primary/25 bg-primary/5 text-foreground hover:border-primary/50 hover:bg-primary/10'
              }`}
            >
              <Icon name={link.icon} size={22} />
              <span>{link.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
