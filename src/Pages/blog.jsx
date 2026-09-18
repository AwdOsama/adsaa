import { useState } from "react";
import { Link } from "react-router-dom";
import postsData from "../data/posts.json";

const CATEGORIES = [
  "جميع المقالات",
  "إضاءة",
  "بورتريه",
  "مناظر طبيعية",
  "تقنيات",
  "معدات",
];
const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = postsData.posts.filter((post) => {
    const matchesCategory =
      activeCategory === "جميع المقالات" || post.category === activeCategory;
    const matchesSearch =
      post.title.includes(search) || post.excerpt.includes(search);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  function handleCategoryChange(category) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function handleSearchChange(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a]">
        <div className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-500">
              <i className="fa-solid fa-book-open"></i>
              مدونتنا
            </span>

            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              استكشف <span className="text-orange-500">مقالاتنا</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-neutral-400">
              اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
            </p>
          </div>
        </div>

        <div className="sticky top-20 z-40 border-b border-[#262626] bg-[#0a0a0a]/90 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="relative w-full md:w-80">
                <input
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="ابحث في المقالات..."
                  type="text"
                  className="w-full rounded-xl border border-[#262626] bg-[#161616] px-5 py-3 pr-12 text-white placeholder-neutral-500 transition-colors focus:border-orange-500/50 focus:outline-none"
                />
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"></i>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "border border-[#262626] bg-[#161616] text-neutral-400 hover:border-orange-500/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="mx-auto max-w-7xl scroll-mt-[146px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات
            </p>

            <div className="flex items-center gap-1 rounded-xl border border-[#262626] bg-[#161616] p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-lg p-2 transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-grip w-5"></i>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-lg p-2 transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-list w-5"></i>
              </button>
            </div>
          </div>

          {paginatedPosts.length === 0 ? (
            <div className="rounded-2xl border border-[#262626] bg-[#161616] py-20 text-center text-neutral-500">
              لا توجد مقالات مطابقة لبحثك
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30"
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
          ) : (
            <div className="flex flex-col gap-6">
              {paginatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex flex-col md:flex-row"
                  >
                    <div className="relative h-52 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
                      <img
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={post.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>

                    <div className="flex flex-1 flex-col justify-center p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-clock"></i>
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-neutral-500">
                          <i className="fa-regular fa-calendar"></i>
                          {new Date(post.date).toLocaleDateString("ar-EG", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h2 className="mb-3 line-clamp-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-orange-500 lg:text-2xl">
                        {post.title}
                      </h2>

                      <p className="mb-4 line-clamp-2 leading-relaxed text-neutral-400">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            alt={post.author.name}
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-[#262626]"
                            src={post.author.avatar}
                          />
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {post.author.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {post.author.role}
                            </p>
                          </div>
                        </div>

                        <span className="hidden items-center gap-2 text-sm font-semibold text-orange-500 transition-all duration-300 group-hover:gap-3 sm:inline-flex">
                          اقرأ المقال
                          <i className="fa-solid fa-arrow-left"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`rounded-xl border p-3 transition-all duration-300 ${
                  currentPage === 1
                    ? "cursor-not-allowed border-[#262626] bg-[#0a0a0a] text-neutral-600"
                    : "border-[#262626] bg-[#161616] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                }`}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-11 min-w-[44px] rounded-xl text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                          : "border border-[#262626] bg-[#161616] text-neutral-400 hover:border-orange-500/50 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className={`rounded-xl border p-3 transition-all duration-300 ${
                  currentPage === totalPages
                    ? "cursor-not-allowed border-[#262626] bg-[#0a0a0a] text-neutral-600"
                    : "border-[#262626] bg-[#161616] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                }`}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <p className="mt-4 text-center text-sm text-neutral-500">
              صفحة {currentPage} من {totalPages}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
