import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-blue-900/40">
      <div className="w-full max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          <h1 className="text-gray-400 text-3xl">
            © {new Date().getFullYear()} Quizz Buzz, Inc.
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
