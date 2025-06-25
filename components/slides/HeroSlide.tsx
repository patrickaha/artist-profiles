interface HeroSlideProps {
  name: string;
  businessName: string;
  tagline: string;
  location: string;
}

export default function HeroSlide({ name, businessName, tagline, location }: HeroSlideProps) {
  return (
    <div className="flex items-center justify-center h-full relative">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-slate-900/60">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')] bg-cover bg-center opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-8 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          {name}
        </h1>
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-blue-100">
          {businessName}
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
          {tagline}
        </p>
        <div className="flex items-center justify-center gap-2 text-white/80">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-lg">{location}</span>
        </div>
      </div>
    </div>
  );
}