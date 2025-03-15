import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

export const metadata = {
  title: "Blog - Qubit Digital Solution",
  description:
    "Read our latest articles on digital marketing trends and strategies",
};

// This would typically come from your database
const posts = [
  {
    id: 1,
    title: "10 SEO Strategies to Boost Your Website Ranking",
    excerpt:
      "Learn the top SEO strategies that can help improve your website's visibility and ranking on search engines.",
    date: new Date("2023-05-15"),
    author: "John Doe",
    slug: "10-seo-strategies",
    category: "SEO",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "The Power of Social Media Marketing for Small Businesses",
    excerpt:
      "Discover how small businesses can leverage social media marketing to reach their target audience and grow their brand.",
    date: new Date("2023-05-10"),
    author: "Jane Smith",
    slug: "social-media-marketing-small-businesses",
    category: "Social Media",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Email Marketing Best Practices for 2023",
    excerpt:
      "Stay ahead of the curve with these email marketing best practices that will help you improve open rates and conversions.",
    date: new Date("2023-05-05"),
    author: "Mike Johnson",
    slug: "email-marketing-best-practices-2023",
    category: "Email Marketing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "How to Create a Successful Content Marketing Strategy",
    excerpt:
      "Learn how to develop a content marketing strategy that engages your audience and drives business results.",
    date: new Date("2023-04-28"),
    author: "Sarah Williams",
    slug: "successful-content-marketing-strategy",
    category: "Content Marketing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "The Future of Digital Marketing: Trends to Watch",
    excerpt:
      "Explore the emerging trends in digital marketing that will shape the industry in the coming years.",
    date: new Date("2023-04-20"),
    author: "David Brown",
    slug: "future-digital-marketing-trends",
    category: "Digital Marketing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Measuring ROI in Digital Marketing Campaigns",
    excerpt:
      "Learn how to effectively measure the return on investment of your digital marketing campaigns.",
    date: new Date("2023-04-15"),
    author: "Emily Davis",
    slug: "measuring-roi-digital-marketing",
    category: "Analytics",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Blog
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights, strategies, and news from the world of digital marketing
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.date.toISOString()}
                    className="text-gray-500"
                  >
                    {formatDistanceToNow(post.date, { addSuffix: true })}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
