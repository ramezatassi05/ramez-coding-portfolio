import VerifyImages from "@/scripts/verify-images"

export default function DebugPage() {
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-6">Debug Tools</h1>
      <VerifyImages />
    </div>
  )
}
