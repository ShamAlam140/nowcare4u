"use client"

import AdminLayoutComponent from "@/components/admin/AdminLayout"
import ProtectedAdminRoute from "@/components/admin/ProtectedAdminRoute"
import { usePathname } from "next/navigation"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/admin/login"

  if (isLoginPage) {
    return <div className="min-h-screen bg-gray-50">{children}</div>
  }

  return (
    <ProtectedAdminRoute>
      <AdminLayoutComponent>{children}</AdminLayoutComponent>
    </ProtectedAdminRoute>
  )
}
