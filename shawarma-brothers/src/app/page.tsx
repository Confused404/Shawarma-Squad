import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";
import Hero from "@/components/Hero";
import MenuGrid from "@/components/MenuGrid";
import GiftCardPromo from "@/components/GiftCardPromo";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
// import ModeToggle from "@/components/ui/modetoggle";

export default function Home() {
  return (
    <main className="space-y-16">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-4 md:px-8">
        <h2 className="text-3xl font-bold text-amber-800 text-center mb-8"></h2>
        <MenuGrid />
      </section>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="px-4 md:px-8 py-12 bg-amber-100  dark:bg-black"
      >
        <Reviews />
      </section>

      {/* Gift Cards Section */}
      <section id="gift-cards" className="px-4 md:px-8">
        <GiftCardPromo />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-4 md:px-8 py-12 bg-amber-50  dark:bg-black"
      >
        <About />
      </section>

      {/* Location Section */}
      <section id="location" className="px-4 md:px-8 py-12">
        <h2 className="text-3xl font-bold text-amber-800 text-center mb-8">
          Find Us
        </h2>
        <Location />
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="px-4 md:px-8 py-12 gh">
        <h2 className="text-3xl font-bold text-amber-800 text-center mb-8">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
