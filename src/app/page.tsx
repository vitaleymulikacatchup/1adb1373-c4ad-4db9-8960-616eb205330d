use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={100}
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'Roadmap', id: 'roadmap' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' },
          ]}
          buttonText="Buy NebulaCoin"
          onButtonClick={() => { /* Add your button action here */ }}
        />
      </div>
      <div id="hero" className="scroll-mt-24" data-section="hero">
        <BillboardHero title="Welcome to NebulaCoin" subtitle="Join the future of memecoins today!" />
      </div>
      <div id="about" className="scroll-mt-24" data-section="about">
        <CtaAbout title="Community First" descriptions={["A memecoin built for you.", "Join us on this exciting journey.", "Let's create a new financial future together!"]} />
      </div>
      <div id="roadmap" className="scroll-mt-24" data-section="roadmap">
        <YearRoadmapTimeline items={[{ year: '2022', title: 'Launch', description: 'Launching the memecoin.' }, { year: '2023', title: 'Expansion', description: 'Expanding our community and features.' }]} className="futuristic-card-bg" />
      </div>
      <div id="how-to-buy" className="scroll-mt-24" data-section="how-to-buy">
        <HowToBuy3D title="How to Buy" steps={[{ title: 'Step 1', description: 'Get a crypto wallet.', image: '/images/placeholdersmall1.avif', position: 'left', isCenter: false }, { title: 'Step 2', description: 'Purchase on an exchange.', image: '/images/placeholdersmall2.avif', position: 'center', isCenter: true }, { title: 'Step 3', description: 'Store your tokens safely.', image: '/images/placeholdersmall3.avif', position: 'right', isCenter: false }]} />
      </div>
      <div id="tokenomics" className="scroll-mt-24" data-section="tokenomics">
        <TextGridTokenomics title="Tokenomics Overview" description="A quick overview of the NebulaCoin tokenomics." tokenData={[{ value: '1B', description: 'Total Supply' }, { value: '300M', description: 'Circulating Supply' }, { value: '0.01', description: 'Initial Price' }]} />
      </div>
      <div id="footer" className="scroll-mt-24" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="NebulaCoin Logo" logoText="NebulaCoin" items={[{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Use', onClick: () => {} }, { label: 'Contact', onClick: () => {} }]} className="text-white" gradientStyle={{ background: 'linear-gradient(135deg, rgba(0,230,255,.25), rgba(123,0,255,.25) 60%, rgba(0,0,0,.85))' }} />
      </div>
    </SiteThemeProvider>
  );
}
