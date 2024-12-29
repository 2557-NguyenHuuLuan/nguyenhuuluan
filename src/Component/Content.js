import React, { useState } from 'react';
import j1 from '../Images/cef/j1.png';
import j2 from '../Images/cef/j2.png';
import nb from '../Images/cef/nb.png';

export default function Content() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Function to open modal with the selected image
  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-4xl mx-auto my-8">
      {/* Title */}
      <h1 className="text-5xl font-semibold mb-6">My Certificates</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto">
          <div
            style={{
              backgroundImage: `url(${j1})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="bg-transparent h-64 w-full rounded-lg shadow-md"
          />
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              JavaScript Essentials 1
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-blue-400">
              <h1 className="text-gray-800 font-bold ">December 13, 2024</h1>
              <button
                onClick={() => openModal(j1)}
                className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700"
              >
                Finished
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto">
          <div
            style={{
              backgroundImage: `url(${j2})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="bg-transparent h-64 w-full rounded-lg shadow-md"
          />
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              JavaScript Essentials 2
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-blue-400">
              <h1 className="text-gray-800 font-bold ">December 26, 2024</h1>
              <button
                onClick={() => openModal(j2)}
                className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700"
              >
                Finished
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto">
          <div
            style={{
              backgroundImage: `url(${nb})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="bg-transparent h-64 w-full rounded-lg shadow-md"
          />
          <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
            <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
              Networking Basic
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-blue-400">
              <h1 className="text-gray-800 font-bold ">November 24, 2024</h1>
              <button
                onClick={() => openModal(nb)}
                className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700"
              >
                Finished
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal} // Bấm vào overlay sẽ đóng modal
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()} // Ngăn sự kiện click từ modal truyền lên overlay
            className="relative bg-white p-4 rounded-lg max-w-3xl"
          >
            <img
              src={currentImage}
              alt="Certificate"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}

    </div>
  );
}
