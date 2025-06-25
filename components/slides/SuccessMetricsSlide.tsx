interface SuccessMetricsSlideProps {
  pricing: {
    entryPoint: number;
    premiumRange: string;
    positioning: string;
  };
  revenueStreams: string[];
}

export default function SuccessMetricsSlide({ pricing, revenueStreams }: SuccessMetricsSlideProps) {
  const achievements = [
    { 
      title: 'Healthcare Installations', 
      value: 'Multiple', 
      description: 'Stony Brook Medicine, Mirza Orthopedics',
      icon: '🏥'
    },
    { 
      title: 'Art Show Circuit', 
      value: 'Regular', 
      description: 'Sustainable festival participation',
      icon: '🎨'
    },
    { 
      title: 'Instagram Engagement', 
      value: '15-50+', 
      description: 'Likes per post (strong for niche)',
      icon: '📱'
    },
    { 
      title: 'Platform Utilization', 
      value: 'Full', 
      description: 'Complete Art Storefronts features',
      icon: '⚙️'
    }
  ];

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Success Metrics</h2>
          <p className="text-xl text-white/80">Quantifiable business performance indicators</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Pricing Strategy */}
          <div className="lg:col-span-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">💰</span>
              Pricing Strategy
            </h3>
            <div className="space-y-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-green-400">${pricing.entryPoint}</div>
                <div className="text-white/80">Entry Point</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400">${pricing.premiumRange}</div>
                <div className="text-white/80">Premium Range</div>
              </div>
              <p className="text-white/90 text-sm text-center italic">
                {pricing.positioning}
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{achievement.value}</div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-white/70 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Streams Visualization */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Revenue Diversification</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="text-white font-semibold text-sm">{stream}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}