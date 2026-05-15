import { Link } from 'react-router-dom';
import { Clock, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import { blogPosts } from '../blog/blogData';

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 6);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-teal-50/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Expert Articles for <span className="gradient-text">Parents & Professionals</span>
          </h2>
          <p className="text-gray-600">
            Evidence-based guides, research insights, and practical advice on paediatric occupational therapy,
            child development, and supporting children with special needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {featuredPosts.map((post) => (
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

        <div className="reveal text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            <BookOpen size={18} />
            View All {blogPosts.length} Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
