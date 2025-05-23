"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-[#0f1b44] py-6 px-8">
      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4"
      >
        <h3 className="text-white font-semibold text-lg whitespace-nowrap">
          Subscribe Today
        </h3>

        <p className="text-gray-300 flex-1 sm:mx-6 text-center sm:text-left">
          Be the first to know about exclusive deals, new product lines, company announcements, and industry news.
        </p>

        <div className="flex w-full sm:w-auto">
  <input
    type="email"
    placeholder="Type email"
    className="flex-grow px-4 py-2 bg-white text-gray-800 placeholder-gray-400 border border-black rounded-l-md focus:outline-none"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <button
    type="submit"
    className="bg-yellow-600 text-white px-5 py-2 rounded-r-md font-semibold  transition"
  >
    Subscribe
  </button>
</div>

      </form>
    </section>
  );
}
