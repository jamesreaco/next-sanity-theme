import { Metadata } from 'next';
import Button from '@/components/shared/button';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className='my-20 flex flex-col items-center text-center text-black'>
      <h1 className='text-3xl md:text-4xl'>
        Page Not Found
      </h1>
      <Button
        href='/'
        variant="default"
        size="default"
        className="mt-6"
      >
        Back To Home
      </Button>
    </div>
  );
}
