'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
    '/placeholder.svg?height=600&width=1200',
    '/placeholder.svg?height=600&width=1200',
    '/placeholder.svg?height=600&width=1200',
]

export default function ShawarmaHero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative h-[600px] overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Delicious Shawarma ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        priority={index === 0}
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Shawarma Brothers
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8">
                        Falafel ● Gyro ● Mid-East Rotisserie
                    </p>
                    <button className="bg-amber-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition duration-300">
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    )
}