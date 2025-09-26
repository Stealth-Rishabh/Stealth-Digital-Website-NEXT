import React from 'react'

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Web Development Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Custom web applications and websites built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend Development</h3>
            <p className="text-gray-600 mb-6">
              Modern, responsive user interfaces built with the latest technologies.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• React & Next.js applications</li>
              <li>• Vue.js & Angular projects</li>
              <li>• Mobile-responsive design</li>
              <li>• Performance optimization</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend Development</h3>
            <p className="text-gray-600 mb-6">
              Robust server-side solutions and APIs for your applications.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Node.js & Express APIs</li>
              <li>• Python & Django backends</li>
              <li>• Database design & optimization</li>
              <li>• Cloud deployment & scaling</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600 mb-6">
              Complete online store solutions for your business needs.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Custom e-commerce platforms</li>
              <li>• Payment gateway integration</li>
              <li>• Inventory management</li>
              <li>• Order processing systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopment
