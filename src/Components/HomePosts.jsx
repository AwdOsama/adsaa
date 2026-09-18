import React from "react";
import postsData from "../data/posts.json";
import { Link } from "react-router-dom";
function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
    </span>
  );
}
export default function HomePosts() {
  const featuredPosts = postsData.posts.filter((post) => post.featured);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-orange-500/5 to-transparent"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-500">
                <LiveDot />
                مميز
              </span>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                مقالات مختارة
              </h2>
              <p className="mt-2 max-w-lg text-neutral-400">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>

            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
            </Link>
          </div>

          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group relative overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="grid gap-0 md:grid-cols-2">
                    <div className="relative h-72 overflow-hidden md:h-[400px]">
                      <img
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        src={post.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-3 py-1.5 text-xs font-semibold text-white">
                          <i className="fa-solid fa-star"></i>
                          مميز
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center bg-[#161616] p-8 md:p-10">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-clock"></i>
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="mb-4 text-2xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-orange-500 md:text-3xl">
                        {post.title}
                      </h2>

                      <p className="mb-6 line-clamp-3 leading-relaxed text-neutral-400">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img
                              alt={post.author.name}
                              className="h-12 w-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                              src={post.author.avatar}
                            />
                            <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full border-2 border-[#161616] bg-orange-500"></div>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {new Date(post.date).toLocaleDateString("ar-EG", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-3">
                          اقرأ المقال
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
