interface PortfolioSlideProps {
  categories: string[];
}

export default function PortfolioSlide({ categories }: PortfolioSlideProps) {
  // Stock images representing different photography categories
  const categoryImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Seascape
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Landscape
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Rural
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Night
    'https://images.unsplash.com/photo-1544967882-1d1a5ad1fb6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Farm
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Barn
  ];

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">Portfolio Highlights</h2>
          <p className="text-xl text-white/80">Specialized collections showcasing Long Island&apos;s beauty</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.slice(0, 6).map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${categoryImages[index % categoryImages.length]})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-lg mb-2">{category}</h3>
                <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Strategic Insight */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Insight</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Portfolio structure shows sophisticated understanding of customer psychology - 
              leading with &quot;Best Sellers&quot; creates social proof and guides purchase decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}