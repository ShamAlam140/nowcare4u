import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useAdminAuth } from '@/providers/AdminProvider';

interface ProtectedAdminRouteProps {
    children: React.ReactNode;
}

export default function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
    const { admin, loading } = useAdminAuth();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !admin) {
            router.push("/admin/login");
        }
    }, [loading, admin, router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    if (!admin) {
        return null;
    }

    return <>{children}</>;
}
