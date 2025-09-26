import React from 'react'

const SEO = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            SEO Optimization Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Improve your search engine rankings and organic traffic with our proven SEO strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO</h3>
            <p className="text-gray-600 mb-6">
              Optimize your website's technical foundation for better search engine visibility.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Site speed optimization</li>
              <li>• Mobile responsiveness</li>
              <li>• Schema markup implementation</li>
              <li>• XML sitemap creation</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Content Optimization</h3>
            <p className="text-gray-600 mb-6">
              Create and optimize content that ranks well and engages your audience.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Keyword research & analysis</li>
              <li>• On-page optimization</li>
              <li>• Content strategy development</li>
              <li>• Meta tags & descriptions</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Link Building</h3>
            <p className="text-gray-600 mb-6">
              Build high-quality backlinks to improve your domain authority and rankings.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Guest posting campaigns</li>
              <li>• Influencer outreach</li>
              <li>• Directory submissions</li>
              <li>• Link audit & disavowal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SEO
