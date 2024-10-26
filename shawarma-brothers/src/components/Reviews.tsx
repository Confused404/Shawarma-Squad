"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Reviews() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.trustmary.com/AOd6PYRj0";
    script.async = true;

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current && widgetRef.current.contains(script)) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="w-full max-w-4xl mx-auto bg-amber-50 dark:bg-black shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-amber-800 text-center">
          What Our Customers Say
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={widgetRef} className="w-full min-h-[400px]" />
        <style jsx global>{`
          /* Trustmary widget custom styling */
          #trustmary-widget {
            font-family: inherit !important;
          }
          #trustmary-widget .tm-widget {
            background-color: transparent !important;
          }
          #trustmary-widget .tm-reviews {
            gap: 1.5rem !important;
          }
          #trustmary-widget .tm-review {
            background-color: #fffbeb !important; /* bg-amber-50 */
            border: 1px solid #fbbf24 !important; /* border-amber-400 */
            border-radius: 0.5rem !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
          }
          #trustmary-widget .tm-review-content {
            color: #92400e !important; /* text-amber-800 */
          }
          #trustmary-widget .tm-review-name {
            color: #b45309 !important; /* text-amber-700 */
            font-weight: 600 !important;
          }
          #trustmary-widget .tm-review-date {
            color: #d97706 !important; /* text-amber-600 */
          }
          #trustmary-widget .tm-stars {
            color: #f59e0b !important; /* text-amber-500 */
          }
          #trustmary-widget .tm-powered-by {
            color: #92400e !important; /* text-amber-800 */
            opacity: 0.7;
          }
          #trustmary-widget .tm-powered-by a {
            color: #92400e !important; /* text-amber-800 */
            text-decoration: underline;
          }
          #trustmary-widget .tm-widget-heading {
            display: none !important; /* Hide the widget's own heading */
          }
        `}</style>
      </CardContent>
    </Card>
  );
}
