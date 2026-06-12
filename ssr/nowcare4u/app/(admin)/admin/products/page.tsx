import type { Metadata } from "next"
import ProductManagement from "@/components/admin/product/ProductManagement"
export const metadata: Metadata = { title: "Product Management - NowCare4U" }
export default function Page() { return <ProductManagement /> }
