"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

// Contact details data - easy to update
const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and support.",
    action: "admin@zth.co.in",
    href: "mailto:admin@zth.co.in",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team directly.",
    action: "+91 93566 17639",
    href: "tel:+919356617639",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Plot no 15/3, 1, Jaiprakash Nagar, Nagpur, Maharashtra 440025",
    action: "Get Directions",
    href: "https://www.google.com/maps/dir//Plot+no+15%2F3,+1,+Jaiprakash+Nagar,+Nagpur,+Maharashtra+440025/@21.1187083,79.0577623,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3bd4bf8a072121d7:0x4796553680582e93!2m2!1d79.0603372!2d21.1187083!3e0?entry=ttu",
  },
];

const Contact = () => {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            Have questions about our platform or want to discuss your fundraising strategy? We're here to help.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-4 bg-blue-50 text-primary rounded-full">
                <detail.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{detail.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{detail.description}</p>
              <a
                href={detail.href}
                className="text-primary font-medium hover:underline hover:text-blue-700 transition-colors"
                target={detail.icon === MapPin ? "_blank" : "_self"}
                rel={detail.icon === MapPin ? "noopener noreferrer" : ""}
              >
                {detail.action}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.584151366222!2d79.05776227596133!3d21.11870828433614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf8a072121d7%3A0x4796553680582e93!2sPlot%20no%2015%2F3%2C%201%2C%20Jaiprakash%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440025!5e0!3m2!1sen!2sin!4v1709716524564!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location of ZTH Office"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;