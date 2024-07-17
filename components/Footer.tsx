'use client'
import React, { useState } from 'react';

interface FooterLink {
  title: string;
  href: string;
}

const links: { [key: string]: FooterLink[] } = {
  'Links': [
    { title: 'Home ', href: '/' },
    { title: 'About Us', href: '/About_Us' },
    { title: 'Track Now', href: '/Tracking' },
    { title: 'Ship Now', href: '/Ship_Now' },
    { title: 'Contact Us', href: '/Contact_Us' },
  ],
  'Quick Link': [
    { title: 'Customer Service', href: '/Customer_Service' },
    { title: 'Customer Portal Logins', href: '/Customer_Portal' },
    { title: 'Get a Quote', href: '/Get_a_Quote' },
    { title: 'R-Zone For Business', href: '/' },
  ],
  'Contact Us': [
    { title: 'Phone', href: 'tel:+1234567890' },
    { title: 'Phone', href: 'tel:+1234567890' },
    { title: 'Email', href: 'mailto:support@example.com' },
    { title: 'Email', href: 'mailto:support@example.com' },
  ],
  'Company Information': [
    { title: 'About R-Zone', href: '/About_Us' },
    { title: 'Services', href: '/Services_' },
    { title: 'Terms of Service', href: '/Terms_Condition' },
    { title: 'Privacy Policy', href: '/Privacy_' },
  ],
};

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Implement email subscription logic here (e.g., send to API)
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white text-black p-8 box-border border-2 ">
      <div className="container mx-auto flex flex-wrap justify-between items-center md:mb-5">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <a href="/" className="text-2xl font-bold">
            R-Zone Cargo
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <form onSubmit={handleEmailSubmit} className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-2 rounded-lg focus:outline-none ring ring-blue-500 mr-2 border-x-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.entries(links).map(([columnTitle, columnLinks]) => (
          <div key={columnTitle} className="text-sm">
            <h5 className="font-bold uppercase mb-2 text-blue-500">{columnTitle}</h5>
            <ul>
              {columnLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-black hover:text-gray-400 hover:border-b-2">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-8 pt-2 pb-2 text-center text-white bg-blue-400">
        &copy; {new Date().getFullYear()} R-Zone Cargo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
