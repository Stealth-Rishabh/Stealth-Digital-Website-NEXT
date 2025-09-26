import React from 'react'

const SocialMedia = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Social Media Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engage your audience and build brand awareness across all major social media platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Social Media Strategy</h3>
            <p className="text-gray-600 mb-6">
              Develop comprehensive social media strategies tailored to your brand and audience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Platform selection & optimization</li>
              <li>• Content calendar development</li>
              <li>• Brand voice & tone guidelines</li>
              <li>• Competitor analysis</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Creation</h3>
            <p className="text-gray-600 mb-6">
              Create engaging visual and written content that resonates with your audience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Graphic design & visuals</li>
              <li>• Video content production</li>
              <li>• Copywriting & captions</li>
              <li>• User-generated content</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Paid Advertising</h3>
            <p className="text-gray-600 mb-6">
              Run targeted social media ad campaigns to reach your ideal customers.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Facebook & Instagram ads</li>
              <li>• LinkedIn advertising</li>
              <li>• Twitter & TikTok campaigns</li>
              <li>• Campaign optimization & tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
