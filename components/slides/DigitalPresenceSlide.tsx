interface DigitalPresenceSlideProps {
  digitalPresence: {
    websiteProfessionalism: number;
    socialConsistency: number;
    contentQuality: number;
    localAuthority: number;
    customerExperience: number;
    overall: number;
  };
  website: string;
  social: {
    instagram: string;
    facebook: string;
  };
}

export default function DigitalPresenceSlide({ digitalPresence, website, social }: DigitalPresenceSlideProps) {
  const metrics = [
    { label: 'Website Professionalism', score: digitalPresence.websiteProfessionalism, color: 'bg-blue-500' },
    { label: 'Social Consistency', score: digitalPresence.socialConsistency, color: 'bg-purple-500' },
    { label: 'Content Quality', score: digitalPresence.contentQuality, color: 'bg-green-500' },
    { label: 'Local Authority', score: digitalPresence.localAuthority, color: 'bg-amber-500' },
    { label: 'Customer Experience', score: digitalPresence.customerExperience, color: 'bg-pink-500' },
  ];

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Digital Presence</h2>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full">
            <span className="text-3xl font-bold text-white mr-3">{digitalPresence.overall}</span>
            <span className="text-white/80 text-lg">/10 Overall Score</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Metrics */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">{metric.label}</span>
                  <span className="text-white font-bold text-lg">{metric.score}/10</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${metric.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${metric.score * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Platform Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Platform Overview</h3>
            
            {/* Website */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                <h4 className="text-xl font-bold text-white">Website</h4>
              </div>
              <p className="text-white/90 text-lg mb-3">{website}</p>
              <p className="text-white/70">Art Storefronts platform with professional implementation</p>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                <h4 className="text-xl font-bold text-white">Social Media</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-pink-400 mr-3">Instagram:</span>
                  <span className="text-white/90">{social.instagram}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-400 mr-3">Facebook:</span>
                  <span className="text-white/90">{social.facebook}</span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <h4 className="text-xl font-bold text-white">Key Features</h4>
              </div>
              <ul className="space-y-2 text-white/90">
                <li>• AR Live Preview capability</li>
                <li>• Newsletter with discount incentives</li>
                <li>• Print-your-own options</li>
                <li>• Show schedule integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}