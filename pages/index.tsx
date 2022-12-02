import Dashboard from '../components/dashboard/Dashboard';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 bg-gray-200'>
      <Header />
      <Dashboard />
    </div>
  );
}
