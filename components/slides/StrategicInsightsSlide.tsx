interface StrategicInsightsSlideProps {
  successFactors: string[];
  uniquePositioning: string[];
}

export default function StrategicInsightsSlide({ successFactors, uniquePositioning }: StrategicInsightsSlideProps) {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Strategic Insights</h2>
          <p className="text-xl text-white/80">What makes this artist successful & replicable factors</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Success Factors */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">⭐</span>
              Success Factors
            </h3>
            <div className="space-y-4">
              {successFactors.map((factor, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white/90 leading-relaxed">{factor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Positioning */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              Unique Positioning
            </h3>
            <div className="space-y-4">
              {uniquePositioning.map((position, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-white/90 leading-relaxed">{position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Key Takeaway</h3>
            <p className="text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
              Success comes from the intersection of <span className="text-blue-400 font-semibold">technical excellence</span>, 
              <span className="text-purple-400 font-semibold"> authentic community engagement</span>, and 
              <span className="text-green-400 font-semibold"> professional business practices</span>. 
              David has mastered all three.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer">
            <span>Learn More About Art Storefronts</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}