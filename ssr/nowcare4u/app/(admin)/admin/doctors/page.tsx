import type { Metadata } from "next"
import DoctorManagement from "@/components/admin/DoctorManagement"
export const metadata: Metadata = { title: "Doctor Management - NowCare4U" }
export default function Page() { return <DoctorManagement /> }
