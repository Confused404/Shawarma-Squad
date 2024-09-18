"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export function Location() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-amber-600">Our Location</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-amber-600">
              Shawarma Delight
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="text-amber-600" />
              <p>1808 Portage Trail, Cuyahoga Falls, OH, United States, Ohio</p>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-amber-600" />
              <p>Mon-Sat: 11am-10pm, Sun: 12pm-9pm</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-amber-600" />
              <p>(234) 334-3996</p>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700 mt-4">
              Get Directions
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.4270364740973!2d-81.50712948822652!3d41.14703227121187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883127ed59113679%3A0xf2060c3c16e78aa!2sShawarma%20Brothers!5e0!3m2!1sen!2sus!4v1726624408011!5m2!1sen!2sus"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
