import React, { useState } from "react";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="text-poppins min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">

      {/* ------- HEADER ------- */}
      <h1 className="text-3xl font-semibold mb-3">Zoho Aegis</h1>
      <p className="text-gray-300 mb-8 text-center text-lg">
        Video calls and meetings for everyone
      </p>

      {/* ------- BUTTONS ------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setShowPopup(true)}
          className="bg-indigo-600 px-6 py-3 rounded-full text-white font-medium hover:bg-indigo-700 transition flex items-center gap-2"
        >
          <span>📹</span> Start a Meeting
        </button>

        <button className="bg-indigo-600 px-6 py-3 rounded-full text-white font-medium hover:bg-indigo-700 transition flex items-center gap-2">
          <span>🕒</span> Schedule a Meeting
        </button>
      </div>

      {/* ------- POPUP MODAL ------- */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-gray-800 w-full max-w-2xl rounded-2xl p-6 relative">

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setShowPopup(false)}
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold mb-4">
              Enter your meeting target
            </h2>

            {/* Textarea */}
            <textarea
              placeholder="Type here..."
              className="w-full h-40 rounded-xl bg-gray-900 text-white p-4 outline-none resize-none"
            ></textarea>

            {/* Bottom Button */}
            <div className="mt-6 flex justify-center">
              <button className="bg-indigo-600 px-8 py-3 rounded-full text-white text-lg hover:bg-indigo-700 transition">
                Start now
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
