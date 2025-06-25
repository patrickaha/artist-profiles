import Slideshow from '@/components/Slideshow';
import HeroSlide from '@/components/slides/HeroSlide';
import BusinessOverviewSlide from '@/components/slides/BusinessOverviewSlide';
import PortfolioSlide from '@/components/slides/PortfolioSlide';
import DigitalPresenceSlide from '@/components/slides/DigitalPresenceSlide';
import SuccessMetricsSlide from '@/components/slides/SuccessMetricsSlide';
import StrategicInsightsSlide from '@/components/slides/StrategicInsightsSlide';
import artistData from '@/data/artists/david-arteaga.json';

export default function DavidArteagaProfile() {
  const slides = [
    <HeroSlide 
      key="hero"
      name={artistData.name}
      businessName={artistData.businessName}
      tagline={artistData.tagline}
      location={artistData.location}
    />,
    <BusinessOverviewSlide 
      key="business"
      keyStrengths={artistData.keyStrengths}
      businessMaturity={artistData.businessMaturity}
      revenueStreams={artistData.revenueStreams}
    />,
    <PortfolioSlide 
      key="portfolio"
      categories={artistData.categories}
    />,
    <DigitalPresenceSlide 
      key="digital"
      digitalPresence={artistData.digitalPresence}
      website={artistData.website}
      social={artistData.social}
    />,
    <SuccessMetricsSlide 
      key="metrics"
      pricing={artistData.pricing}
      revenueStreams={artistData.revenueStreams}
    />,
    <StrategicInsightsSlide 
      key="insights"
      successFactors={artistData.successFactors}
      uniquePositioning={artistData.uniquePositioning}
    />,
  ];

  return <Slideshow slides={slides} />;
}

export const metadata = {
  title: 'David Arteaga - Teaga Photo | Artist Profile',
  description: 'Long Island\'s premier landscape photographer specializing in rural Americana and coastal scenes.',
};