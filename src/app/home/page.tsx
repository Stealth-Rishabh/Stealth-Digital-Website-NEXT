import Services from './sections/services';
import MarketingStats from './sections/marketing-stats';
import Testimonials from './sections/testimonials';
import MarketingProcess from './sections/marketing-process';
import Blog from './sections/blog';

const Home = () => {
  return (
    <section>
      <Services />
      <MarketingStats />
      <Testimonials />
      <MarketingProcess />
      <Blog />
    </section>
  );
};

export default Home;
