<<<<<<< HEAD
import ShawarmaHero from '@/components/ShawarmaHero'
import MenuGrid from '@/components/MenuGrid'

export default function Home() {
  return (
    <main>
      <ShawarmaHero />
      <MenuGrid />
    </main>
  )
}
=======
// Update the import statements
import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Location />
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
>>>>>>> refs/remotes/origin/main