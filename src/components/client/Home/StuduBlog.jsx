import React from "react";
import { Link } from "react-router-dom";


const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for the IELTS Exam in 30 Days",
    excerpt: "A complete day-wise plan to crack IELTS, with tips, resources, and mock test strategies.",
    image: "./images",
    slug: "/blogs/ielts-prep-30-days",
  },
  {
    id: 2,
    title: "Top 5 Countries for Affordable Education Abroad",
    excerpt: "Explore the most budget-friendly and high-quality study destinations for Nepalese students.",
    image: "https://source.unsplash.com/600x400/?abroad,university",
    slug: "/blogs/affordable-study-abroad",
  },
  {
    id: 3,
    title: "Time Management Tips for Busy Students",
    excerpt: "Balance study, assignments, and personal life with these practical time management hacks.",
    image: "https://source.unsplash.com/600x400/?student,time",
    slug: "/blogs/time-management-tips",
  },
];

export default function StudyBlogSection() {
  return (
    <section className="bg-gradient-to-r from-blue-200 via-white to-blue-300 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Latest Study Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition-all">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={post.slug}
                  className="text-blue-700 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
