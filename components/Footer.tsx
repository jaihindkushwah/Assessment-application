import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 md:px-6 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto grid sm:grid-cols-2 grid-cols-1  md:grid-cols-4 gap-8 ">
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Company
          </h3>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Our Team
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Services
          </h3>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Lorem, ipsum.
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Lorem, ipsum.
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Lorem, ipsum.
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Lorem, ipsum.
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Resources
          </h3>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Whitepapers
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Case Studies
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Documentation
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Connect With Us
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Stay updated with our latest news and offers!
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Quizz Buzz, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
