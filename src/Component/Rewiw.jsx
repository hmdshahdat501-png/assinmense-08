"use client";
import { useState } from "react";

export default function ReviewSection() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    { id: 1, name: "Rahim", rating: 5, text: "Amazing product 🔥" },
    { id: 2, name: "Karim", rating: 4, text: "Very ভালো লেগেছে" },
  ]);

  const handleSubmit = () => {
    if (!review || rating === 0) return;

    const newReview = {
      id: Date.now(),
      name: "User",
      rating,
      text: review,
    };

    setReviews([newReview, ...reviews]);
    setReview("");
    setRating(0);
  };

  // average rating
  const avg =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Customer Feedback</h2>
          <p className="text-gray-500">{reviews.length} Reviews</p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-yellow-500">
            {avg.toFixed(1)} ⭐
          </p>
          <p className="text-sm text-gray-400">Average Rating</p>
        </div>
      </div>

      {/* Input Box */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6">

        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`text-3xl cursor-pointer transition ${
                star <= rating ? "text-yellow-400 scale-110" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          className="w-full border rounded-xl p-3 mb-4 focus:ring-2 focus:ring-black"
          placeholder="Write your experience..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Submit Review
        </button>
      </div>

      {/* Review List */}
      <div className="grid md:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex justify-between mb-2">
              <p className="font-semibold">{r.name}</p>
              <p className="text-yellow-400">
                {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </p>
            </div>
            <p className="text-gray-600">{r.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
}