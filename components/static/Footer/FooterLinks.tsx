import React from 'react'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export const FooterLinks = () => {
  return (
    <footer className='bg-[#4F0072] py-8 px-4 mt-auto'>
      <div className='max-w-7xl mx-auto'>
        {/* Desktop Layout */}
        <div className='hidden md:flex justify-between items-center'>
          {/* Left side - Social Media Icons */}
          <div className='flex gap-6'>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaFacebook size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaTwitter size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Right side - Links and Copyright */}
          <div className='flex gap-6 items-center text-white text-[16px] font-[500]'>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              About Us
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              Terms of Use
            </a>
            <span className='text-gray-300'>
              ©2025 Revve. All rights reserved.
            </span>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className='md:hidden'>
          {/* Links and Copyright */}
          <div className='flex flex-col gap-4 items-center text-white text-[16px] font-[500] mb-6'>
            <div className='flex flex-wrap gap-4 justify-center'>
              <a href='#' className='hover:text-gray-300 transition-colors'>
                About Us
              </a>
              <a href='#' className='hover:text-gray-300 transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-gray-300 transition-colors'>
                Terms of Use
              </a>
            </div>
            <span className='text-gray-300 text-center'>
              ©2025 Revve. All rights reserved.
            </span>
          </div>

          {/* Social Media Icons */}
          <div className='flex gap-6 justify-center'>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaFacebook size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaTwitter size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-gray-300 transition-colors'
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
