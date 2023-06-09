import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Table from '@/components/Table';
import Text from '@/components/Text';

export default function Home() {
  return (
    <div className='container mx-auto px-2'>
      <Navbar />
      <Hero />
      <Text text='Vote yang saya buat' className='text-lg font-semibold px-2' />
      <div className='overflow-x-scroll overflow-hidden w-full space-y-2'>
        <Table />
      </div>
    </div>
  );
}
