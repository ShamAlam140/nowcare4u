"use client"
import { useEffect } from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import { useUser } from '@/providers/UserProvider';
import CognitiveTest from './CognitiveTest';

export default function CognitiveTestApp() {
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!user) {
      const redirect = encodeURIComponent(location.pathname + location.search);
      router.push(`/login?redirect=${redirect}`);
    }
  }, [user, router, searchParams]);

  return <CognitiveTest />;
}
