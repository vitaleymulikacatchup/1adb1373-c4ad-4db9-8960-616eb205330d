"use client";
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
    <SiteThemeProvider theme={{
      styleVariant: "futuristicAndOutOfBox",
      colorTemplate: 2,
      textAnimation: "slide",
    }}> 
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          logoSrc="/images/logo.svg" 
          logoWidth={120} 
          logoHeight={40}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "Roadmap", id: "roadmap" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Discover the Future with NebulaCoin"
          subtitle="Join the memecoin revolution."
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About NebulaCoin"
          descriptions={["An innovative memecoin designed for the community", "Simple, transparent, and community-focused"]} />
      </div>

      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <YearRoadmapTimeline
          items={[
            { year: "2023", title: "Launch", description: "Official launch of NebulaCoin" },
            { year: "2024", title: "Community Development", description: "Building a vibrant community and ecosystem" },
            { year: "2025", title: "Expansion", description: "Expanding utility and partnerships" }
          ]}
          className="my-24"
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy NebulaCoin"
          steps={[
            { title: "Step One", description: "Get a crypto wallet", image: "/images/logo-dot.svg", position: "left", isCenter: false },
            { title: "Step Two", description: "Purchase the coin through an exchange", image: "/images/logo-dot.svg", position: "center", isCenter: true },
            { title: "Step Three", description: "HODL and join our community", image: "/images/logo-dot.svg", position: "right", isCenter: false }
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="A clear overview of NebulaCoin's structure and distribution"
          tokenData={[
            { value: "1B", description: "Total Supply" },
            { value: "900M", description: "Circulating Supply" },
            { value: "10%", description: "Liquidity" },
            { value: "70%", description: "Community Rewards" },
            { value: "20%", description: "Development Fund" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="NebulaCoin Logo"
          logoText="NebulaCoin"
          items={[
            { label: "Privacy Policy", onClick: () => console.log('Privacy clicked') },
            { label: "Terms of Service", onClick: () => console.log('Terms clicked') },
            { label: "Contact Us", onClick: () => console.log('Contact clicked') }
          ]}
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}