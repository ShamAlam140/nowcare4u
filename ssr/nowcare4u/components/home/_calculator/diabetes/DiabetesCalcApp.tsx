"use client"
import { useEffect } from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import { useUser } from '@/providers/UserProvider';
import DiabetesCalc from './DiabetesCalc';

export default function DiabetesCalcApp() {
  const { user, token } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!user || !token) {
      const redirect = encodeURIComponent(location.pathname + location.search);
      router.push(`/login?redirect=${redirect}`);
    }
  }, [user, token, router, searchParams]);

  if (!user || !token) return null;

  return <DiabetesCalc />;
}
