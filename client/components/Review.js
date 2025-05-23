"use client"
import { FaStar, FaStarHalfAlt  , FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useState } from 'react';

export default function CustomerReviews() {
    const reviews = [
    { rating: 5, title: "Great choice and fast to arrive", name: "Trusted Customer", date: "May 22, 2025" },
    { rating: 5, title: "Excellent", name: "Trusted Customer", date: "May 22, 2025" },
    { rating: 5, title: "Excellent,", name: "Kevin Harvey", date: "May 21, 2025" },
    { rating: 4, title: "A positive experience", comment: "Fair and affordable.", name: "ELROY McKenzie", date: "May 20, 2025" },
    { rating: 5, title: "Top notch quality", name: "Michael", date: "May 19, 2025" },
    { rating: 5, title: "Perfect delivery", name: "Sarah D.", date: "May 18, 2025" },
    { rating: 4, title: "Good but late", comment: "Product was good, shipping delayed.", name: "Jonas", date: "May 17, 2025" },
    { rating: 5, title: "Very satisfied", name: "Linda", date: "May 16, 2025" },
    { rating: 5, title: "Quick service", name: "David", date: "May 15, 2025" },
    { rating: 4, title: "Helpful staff", name: "Emma", date: "May 14, 2025" },
    { rating: 5, title: "High quality", name: "Jack", date: "May 13, 2025" },
    { rating: 4, title: "Reasonable prices", name: "Ava", date: "May 12, 2025" },
    { rating: 5, title: "Exactly what I needed", name: "Liam", date: "May 11, 2025" },
    { rating: 5, title: "Excellent service", name: "Sophia", date: "May 10, 2025" },
    { rating: 4, title: "Great team", name: "Olivia", date: "May 09, 2025" },
    { rating: 5, title: "Highly recommend", name: "Noah", date: "May 08, 2025" },
  ];

  const [page, setPage] = useState(0);
  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const paginatedReviews = reviews.slice(page * reviewsPerPage, (page + 1) * reviewsPerPage);

  return (
    <section className="bg-white px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0b1e45] mb-8">Customer Reviews</h2>

      {/* Rating and Award Row */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 mb-10">
        {/* Rating Box */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-lg">Average Customer Rating:</p>
          <div className="flex justify-center md:justify-start items-center mt-2 gap-1 text-yellow-400 text-xl">
            {Array(5).fill(0).map((_, i) => <FaStar key={i} />)}
            <span className="text-black text-xl ml-2 font-bold">4.8</span>
            <span className="text-sm">/5</span>
            <img src="/icons/feefo.svg" alt="feefo" className="h-6 ml-2" />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Independent Service Rating based on 1164 verified reviews.{' '}
            <span className="text-blue-600 underline cursor-pointer">Read all reviews</span>
          </p>
        </div>

        {/* Platinum Award Image */}
        <img
          src="/icons/ratingsss.svg"
          alt="Platinum Trusted Service Award"
          className="h-24 object-contain"
        />
      </div>
      <hr/>
      <br/>

      {/* Reviews Grid */}
      {/* <div className="grid md:grid-cols-4 gap-6 text-left max-w-6xl mx-auto">
        {[
          {
            rating: 5,
            title: "Great choice and fast to arrive",
            name: "Trusted Customer",
            date: "May 22, 2025",
          },
          {
            rating: 5,
            title: "Excellent",
            name: "Trusted Customer",
            date: "May 22, 2025",
          },
          {
            rating: 5,
            title: "Excellent,",
            name: "Kevin Harvey",
            date: "May 21, 2025",
          },
          {
            rating: 4,
            title: "A positive experience",
            comment: "Fair and affordable.",
            name: "ELROY McKenzie",
            date: "May 20, 2025",
          },
        ].map((review, idx) => (
          <div key={idx} className="border p-4 rounded-lg shadow-sm bg-gray-50">
            <div className="flex items-center text-yellow-400 mb-2">
              {Array(review.rating).fill(0).map((_, i) => <FaStar key={i} />)}
              {review.rating < 5 && <FaStarHalfAlt />}
            </div>
            <p className="font-semibold">{review.title}</p>
            {review.comment && <p className="text-sm mt-1">{review.comment}</p>}
            <p className="text-xs text-gray-500 mt-1">{review.name} – {review.date}</p>
          </div>
        ))}
      </div> */}
      <div className="flex items-stretch justify-center gap-4 max-w-6xl mx-auto">
        {/* Prev Arrow */}
<button onClick={handlePrev} disabled={page === 0} className="text-4xl text-gray-600 hover:text-black transition disabled:opacity-30">
          <FaChevronLeft />
        </button>
        {/* Reviews */}
        {paginatedReviews.map((review, idx) => (
          <div key={idx} className="flex-1 px-2 text-left">
            <div className="flex items-center text-yellow-400 mb-2">
              {Array(review.rating).fill(0).map((_, i) => <FaStar key={i} />)}
              {review.rating < 5 && <FaStarHalfAlt />}
            </div>
            <p className="font-semibold">{review.title}</p>
            {review.comment && <p className="text-sm mt-1">{review.comment}</p>}
            <p className="text-xs text-gray-500 mt-1">{review.name} – {review.date}</p>
          </div>
        ))}

        {/* Next Arrow */}
<button onClick={handleNext} disabled={page === totalPages - 1} className="text-4xl text-gray-600 hover:text-black transition disabled:opacity-30">
          <FaChevronRight />
        </button>      </div>

    </section>
  );
}
