import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerItems = [
    { name: "Menu", href: "#menu" },
    { name: "Location", href: "#location" },
    { name: "About", href: "#about" },
    { name: "Gift Cards", href: "#gift-cards" },
  ];

  return (
    <footer className="bg-amber-100 dark:bg-black border-t border-amber-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-800">
              Shawarma Brothers
            </h3>
            <p className="text-amber-700">"The Heart of Shawarma, Wrapped for You."</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-amber-800">Quick Links</h4>
            <ul className="space-y-2">
              {footerItems.map(
                (item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-amber-700 hover:text-amber-600 transition duration-150 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-amber-800">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/shawarmabrothersportagetrailcrossing/"
                className="text-amber-700 hover:text-amber-600 transition duration-150 ease-in-out"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/explore/locations/551667251694193/shawarma-brothers/"
                className="text-amber-700 hover:text-amber-600 transition duration-150 ease-in-out"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-amber-200 text-center text-amber-700">
          <p>&copy; {currentYear} Shawarma Brothers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
