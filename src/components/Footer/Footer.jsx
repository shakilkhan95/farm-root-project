import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-800 pt-12 pb-6 px-5 lg:px-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {/* Logo section  */}
        <div>
          <h3 className="text-2xl font-bold text-green-700 mb-3">
            OrganicRoot
          </h3>
          <p className="text-sm text-gray-600">
            Fresh, healthy, and 100% organic products delivered to your
            doorstep. Supporting local farmers and sustainable living.
          </p>
        </div>

        {/* Quick Links  */}
        <div>
          <h4 className="font-semibold text-green-700 mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a className="hover:text-green-600" href="/">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-green-600" href="/">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-green-600" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-green-600" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* categories  */}
        <div>
          <h4 className="font-semibold text-green-700 mb-3">Categories</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a className="hover:text-green-600" href="/">
                Vegetables
              </a>
            </li>
            <li>
              <a className="hover:text-green-600" href="/">
                Fruits
              </a>
            </li>
            <li>
              <a className="hover:text-green-600" href="/">
                Dairy Products
              </a>
            </li>
            <li>
              <a className="hover:text-green-600" href="/">
                Beverages
              </a>
            </li>
          </ul>
        </div>

        {/* contact + social ? */}
        <div>
          <h4 className="font-semibold text-green-700 mb-3">Contact</h4>
          <p className="text-sm text-gray-600 mb-2">
            123 Organic Street, London, UK
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Email: support@organicroot.com
          </p>
          <p className="text-sm text-gray-600 mb-4">Phone: +44 123 456 7890</p>

          <div className='flex space-x-4'>
            <a className="text-green-700 hover:text-green-900" href="/">
              <FaFacebookF />
            </a>
            <a className="text-green-700 hover:text-green-900" href="/">
              <FaInstagram />
            </a>
            <a className="text-green-700 hover:text-green-900" href="/">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer