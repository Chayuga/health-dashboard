import { useSession, getProviders, signIn, signOut } from 'next-auth/react';

import Layout from '../components/layout/Layout';
import Dashboard from '../components/dashboard/Dashboard';

export default function Home() {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return 'Loading...';
  }
  return (
    <Layout title='Home Layout'>
      <Dashboard />
    </Layout>
  );
}
