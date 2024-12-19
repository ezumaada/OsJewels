import React from "react";

import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
 

 

  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Get in Touch</h1>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center p-6 bg-gray-50 rounded-lg">
            <Mail className="w-8 h-8 text-black mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>
          </div>
          
          <div className="flex items-center p-6 bg-gray-50 rounded-lg">
            <Phone className="w-8 h-8 text-black mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center p-6 bg-gray-50 rounded-lg md:col-span-2 lg:col-span-1">
            <MapPin className="w-8 h-8 text-black mr-4" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">123 Business Street, Suite 100, City, State 12345</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ContactPage;