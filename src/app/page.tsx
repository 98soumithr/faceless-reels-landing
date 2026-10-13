import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Pipeline } from '@/components/Pipeline';
import { Showcase } from '@/components/Showcase';
import { Stats } from '@/components/Stats';
import { Reasons } from '@/components/Reasons';
import { Comparison } from '@/components/Comparison';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { ClosingCta } from '@/components/ClosingCta';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pipeline />
        <Showcase />
        <Stats />
        <Reasons />
        <Comparison />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
