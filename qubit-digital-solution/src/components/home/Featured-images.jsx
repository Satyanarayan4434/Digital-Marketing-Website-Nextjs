import Image from "next/image";

export default function FeaturedImages() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out some of our recent projects and success stories
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Digital marketing campaign"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Website redesign project"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Brand identity design"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
