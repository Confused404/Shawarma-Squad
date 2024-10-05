"use client";

const menuImages = ["/images/menu/how_to_order.jpg", "/images/menu/sides.jpg"];

export default function HomePage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-amber-600 text-center">
        Our Menu
      </h1>
      <div className="flex flex-col items-center">
        {menuImages.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image}
              alt={`Menu Page ${index + 1}`}
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
