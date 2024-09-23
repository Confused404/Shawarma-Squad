import Image from 'next/image'

const menuItems = [
    { name: 'Shawarma Wrap', image: '/placeholder.svg?height=300&width=300', digitalOnly: false },
    { name: 'Shawarma Plate', image: '/placeholder.svg?height=300&width=300', digitalOnly: false },
    { name: 'Falafel Bowl', image: '/placeholder.svg?height=300&width=300', digitalOnly: true },
    { name: 'Mezze Platter', image: '/placeholder.svg?height=300&width=300', digitalOnly: false },
    { name: 'Tabouleh Salad', image: '/placeholder.svg?height=300&width=300', digitalOnly: false },
    { name: 'Baklava', image: '/placeholder.svg?height=300&width=300', digitalOnly: false },
]

export default function MenuGrid() {
    return (
        <div className="bg-amber-50 dark:bg-black py-16">
            <div className="container mx-auto px-[15px] md:px-[60px]">
                <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item) => (
                        <div key={item.name} className="flex flex-col items-center">
                            <div className="relative w-full aspect-square mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-amber-900">{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}   