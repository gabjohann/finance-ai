import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

export default async function Home() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/login')
  }

  return (
    <div className="flex h-full items-start justify-end p-6">
      <UserButton showName />
    </div>
  )
}
