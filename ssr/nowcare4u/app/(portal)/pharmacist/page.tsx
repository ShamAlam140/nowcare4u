import type { Metadata } from "next"
export const metadata: Metadata = { title: "Pharmacist Portal - NowCare4U" }
import { PharmacistPage } from "@/components/portal/pharmacist"
export default function Page() { return <PharmacistPage /> }
