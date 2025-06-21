import Hero from '@/components/Hero';
import './styles/globals.css';
import FeaturedCourse from '@/components/FeaturedCourse';

export default async function Home() {



  return (
    <div >
      <Hero />
      <FeaturedCourse />
    </div>
  );
}
