import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import me2 from './me2.jpeg';

export default function AboutMe() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Banner />

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image and Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center transform hover:scale-105 transition duration-300 ease-in-out">
            <img
              src={me2}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover transition-transform transform hover:scale-110"
            />
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">Nguyễn Hữu Luân</h1>
            <p className="text-xl text-gray-600 mb-2">IT Student</p>
            <p className="text-md text-gray-500 mb-4">The Ho Chi Minh City University of Technology (HUTECH) | GPA: 3.3</p>

            {/* Additional Info */}
            <div className="space-y-4 text-left">
              {/* JavaScript */}
              <div>
                <p className="text-gray-600 mb-2">JavaScript</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-500 text-white">80%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-blue-200 rounded-full">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* React */}
              <div>
                <p className="text-gray-600 mb-2">React</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-green-500 text-white">90%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-green-200 rounded-full">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Node.js */}
              <div>
                <p className="text-gray-600 mb-2">Node.js</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-500 text-white">70%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-gray-200 rounded-full">
                          <div className="h-full bg-gray-500 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Python */}
              <div>
                <p className="text-gray-600 mb-2">Python</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-yellow-500 text-white">85%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-yellow-200 rounded-full">
                          <div className="h-full bg-yellow-500 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HTML */}
              <div>
                <p className="text-gray-600 mb-2">HTML</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-orange-500 text-white">95%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-orange-200 rounded-full">
                          <div className="h-full bg-orange-500 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CSS */}
              <div>
                <p className="text-gray-600 mb-2">CSS</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-teal-500 text-white">90%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-teal-200 rounded-full">
                          <div className="h-full bg-teal-500 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TypeScript */}
              <div>
                <p className="text-gray-600 mb-2">TypeScript</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-600 text-white">75%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-blue-200 rounded-full">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SQL */}
              <div>
                <p className="text-gray-600 mb-2">SQL</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-purple-500 text-white">100%</span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <div className="relative pt-1 flex-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div className="flex-grow h-2 mb-1 bg-purple-200 rounded-full">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Hobbies</h3>
                <p className="text-gray-600">Coding, Driving, Drawing</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Contact</h3>
                <p className="text-gray-600">Email: nguyenhuuluanit69@gmail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
