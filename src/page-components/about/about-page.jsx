import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our company! We are dedicated to providing the best service
        possible.
      </p>
      <p className="text-gray-700 mb-4">
        Our team is made up of skilled professionals who are passionate about
        their work.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link to="employee1" className="text-blue-500 hover:underline">
            Employee 1
          </Link>
        </li>
        <li>
          <Link to="employee2" className="text-blue-500 hover:underline">
            Employee 2
          </Link>
        </li>
        <li>
          <Link to="employee3" className="text-blue-500 hover:underline">
            Employee 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
