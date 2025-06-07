import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center !px-4">
      <div className="flex items-center space-x-3 max-md:flex-col">
        <AlertTriangle size={32} className="text-red-500" />
        <h1 className="text-4xl !font-bold text-gray-800 max-md:text-2xl">404 - Page Not Found</h1>
      </div>
      
      <p className="text-gray-600 !mt-4 text-center">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link href="/" className="!mt-6 inline-block !px-5 !py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
