import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight, Search, BookOpen, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../blog/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map((p) => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="reveal">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Expert Articles & Resources
            </h1>
            <p className="text-teal-100/80 text-lg max-w-2xl">
              Evidence-based guides and practical advice for parents and professionals
              supporting children with developmental needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-teal-50/30 min-h-[50vh]">
        <div className="max-w-7xl mx-auto section-padding">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="mx-auto text-teal-300 mb-4" size={48} />
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 text-teal-600 hover:text-teal-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="reveal"
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="card-hover block bg-white rounded-2xl p-6 border border-teal-100 h-full"
                  >
                    <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-teal-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-teal-500" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
