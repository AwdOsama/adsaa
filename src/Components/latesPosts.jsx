import { Link } from "react-router-dom";
import postsData from "../data/posts.json";

export default function LatestPosts() {
  const latestPosts = postsData.posts
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
      <div className="absolute bottom-0 left-0 h-full w-1/3 bg-gradient-to-r from-orange-500/5 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              </span>
              الأحدث
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              أحدث المقالات
            </h2>
            <p className="mt-2 max-w-lg text-neutral-400">
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-400"
          >
            عرض جميع المقالات
            <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, index) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    src={post.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full border border-[#333333] bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500">
                    <span className="flex items-center gap-1">
                      <i className="fa-regular fa-clock"></i>
                      {post.readTime}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-neutral-600"></span>
                    <span>
                      {new Date(post.date).toLocaleDateString("ar-EG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="mb-3 line-clamp-2 text-xl leading-tight font-bold text-white transition-colors duration-300 group-hover:text-orange-500">
                    {post.title}
                  </h3>

                  <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#262626] pt-4">
                    <div className="flex items-center gap-3">
                      <img
                        alt={post.author.name}
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src={post.author.avatar}
                      />
                      <div>
                        <p className="text-sm font-medium text-white">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {post.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 transition-colors duration-300 group-hover:border-transparent group-hover:bg-orange-500">
                      <i className="fa-solid fa-arrow-left text-sm text-orange-500 transition-colors duration-300 group-hover:text-white"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
