import React from 'react'

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing strategies to boost your online presence and drive conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
            <p className="text-gray-600 mb-6">
              Improve your search engine rankings and organic traffic with our proven SEO strategies.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Keyword research & analysis</li>
              <li>• On-page optimization</li>
              <li>• Technical SEO audits</li>
              <li>• Link building strategies</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">PPC Advertising</h3>
            <p className="text-gray-600 mb-6">
              Drive immediate traffic and conversions with targeted pay-per-click campaigns.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Google Ads management</li>
              <li>• Facebook & Instagram ads</li>
              <li>• Campaign optimization</li>
              <li>• ROI tracking & reporting</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Marketing</h3>
            <p className="text-gray-600 mb-6">
              Engage your audience with compelling content that drives results.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Blog content creation</li>
              <li>• Social media content</li>
              <li>• Email marketing campaigns</li>
              <li>• Content strategy development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing
