"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 2, textAnimation: 'slide' }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoAlt="PawsCoin Logo"
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
        buttonText="Buy PawsCoin"
        onButtonClick={() => alert('Action')}
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to PawsCoin"
          description="Join the community and make an impact with PawsCoin!"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="PawsCoin is designed to revolutionize the pet care industry, offering innovative solutions and a community-driven ecosystem."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="simple" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="PawsCoin Tokenomics"
          description="Here are the key metrics that define the PawsCoin economy."
          kpiItems={[
            { value: "10M", description: "Total Supply" },
            { value: "1M", description: "Max Hold" },
            { value: "2%", description: "Transaction Fee" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          columns={[
            {
              title: 'Resources',
              items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }, { label: 'How to Buy', onClick: () => {} }]
            },
            {
              title: 'Community',
              items: [{ label: 'Forum', onClick: () => {} }, { label: 'Blog', onClick: () => {} }, { label: 'Events', onClick: () => {} }]
            },
            {
              title: 'Legal',
              items: [{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }, { label: 'Contact Us', onClick: () => {} }]
            }
          ]}
          copyrightText="© 2023 PawsCoin. All rights reserved."
          onPrivacyClick={() => alert('Privacy Policy')}
        />
      </div>
    </SiteThemeProvider>
  );
}
