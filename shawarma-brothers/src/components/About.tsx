"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <div className="bg-amber-50 dark:bg-black py-12"> {/* Keep the original background and top/bottom padding */}
      <div className="container mx-auto px-[15px] md:px-[60px]"> {/* Matching the padding from MenuGrid */}
        <h1 className="text-4xl font-bold mb-8 text-amber-600">
          About Shawarma Delight
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Card className="bg-white shadow-lg h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-amber-600">
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 dark:text-black">
                  Founded in 2010, Shawarma Delight has been serving the most
                  authentic and delicious shawarma in town for over a decade. Our
                  journey began with a simple goal: to bring the rich flavors of
                  Middle Eastern cuisine to our local community.
                </p>
                <p >
                  What started as a small family-owned shop has now grown into a
                  beloved establishment, thanks to our commitment to quality
                  ingredients, traditional recipes, and exceptional customer
                  service.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative h-[300px] md:h-auto">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Shawarma preparation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-600">
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 dark:text-black">At Shawarma Delight, we're committed to:</p>
              <ul className="list-disc list-inside space-y-2 dark:text-black">
                <li>Using only the freshest, highest-quality ingredients</li>
                <li>Preparing our meats and vegetables daily</li>
                <li>Offering a variety of options for different dietary needs</li>
                <li>Providing a warm and welcoming atmosphere for our guests</li>
                <li>
                  Continuously improving our recipes and service based on customer
                  feedback
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-600">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Authentic Recipes",
              "Fresh Ingredients",
              "Fast Service",
              "Family Owned",
            ].map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="p-4 text-center text-amber-600 border-amber-600 hover:bg-amber-800 hover:text-amber"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
