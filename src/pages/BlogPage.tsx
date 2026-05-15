import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../blog/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const categoryColors: Record<string, string> = {
    'Parent Guide': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Conditions': 'bg-rose-50 text-rose-700 border-rose-200',
    'Planning': 'bg-violet-50 text-violet-700 border-violet-200',
    'Practical Skills': 'bg-amber-50 text-amber-700 border-amber-200',
    'Future/Tech': 'bg-sky-50 text-sky-700 border-sky-200',
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Simple header */}
      <div className="pt-20 pb-8 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="max-w-7xl mx-auto section-padding">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-4 transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Blog</h1>
          <p className="text-teal-100/80 mt-2">{blogPosts.length} articles on paediatric occupational therapy</p>
        </div>
      </div>

      {/* Category pills */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto section-padding py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-700'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-2 text-xs opacity-70">
                    {blogPosts.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div className="py-10 bg-gray-50/50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal-300 transition-all"
              >
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[post.category] || 'bg-gray-50 text-gray-700 border-gray-200'}`}>
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                    <ChevronRight size={14} className="ml-auto text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
