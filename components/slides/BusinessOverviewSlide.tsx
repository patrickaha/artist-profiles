interface BusinessOverviewSlideProps {
  keyStrengths: string[];
  businessMaturity: string;
  revenueStreams: string[];
}

export default function BusinessOverviewSlide({ 
  keyStrengths, 
  businessMaturity, 
  revenueStreams 
}: BusinessOverviewSlideProps) {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Business Overview</h2>
          <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full">
            <span className="text-green-300 text-lg font-semibold">
              Maturity Level: {businessMaturity}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Key Strengths */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
              Key Strengths
            </h3>
            <ul className="space-y-4">
              {keyStrengths.map((strength, index) => (
                <li key={index} className="flex items-start text-white/90">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue Streams */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
              Revenue Streams
            </h3>
            <div className="space-y-4">
              {revenueStreams.map((stream, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-white/90 text-lg">{stream}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}