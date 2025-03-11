import Image from "next/image";

export const metadata = {
  title: "About Us - PromotEdge",
  description: "Learn about our company, mission, and team",
};

export default function AboutPage() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero section */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About PromotEdge
          </h1>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-12 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                We are a team of digital marketing experts passionate about
                helping businesses grow their online presence and reach their
                target audience.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Founded in 2015, PromotEdge has been at the forefront of
                  digital marketing innovation, helping businesses of all sizes
                  navigate the ever-changing digital landscape. Our approach
                  combines creativity, data-driven insights, and strategic
                  thinking to deliver exceptional results for our clients.
                </p>
                <p className="mt-6">
                  We believe that every business has a unique story to tell, and
                  we're here to help you tell it in the most effective way
                  possible. Whether you're looking to increase brand awareness,
                  drive website traffic, or generate leads, we have the
                  expertise and tools to help you achieve your goals.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Team meeting"
                width={500}
                height={500}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Mission & Vision
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900">Mission</h3>
                  <p className="mt-2">
                    To empower businesses with innovative digital marketing
                    solutions that drive growth, enhance brand visibility, and
                    create meaningful connections with their audience. enhance
                    brand visibility, and create meaningful connections with
                    their audience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vision</h3>
                  <p className="mt-2">
                    To be the leading digital marketing agency known for
                    delivering exceptional results, fostering innovation, and
                    setting new standards of excellence in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-24 sm:mt-32 lg:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Meet the talented individuals who make PromotEdge a success. Our
                diverse team brings together expertise from various backgrounds
                to deliver comprehensive digital marketing solutions.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((person) => (
                <li key={person}>
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                    src={`/placeholder.svg?height=300&width=450`}
                    alt=""
                    width={450}
                    height={300}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                    Team Member {person}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    Position Title
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
