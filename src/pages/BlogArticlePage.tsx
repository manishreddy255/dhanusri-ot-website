import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, Calendar, Tag, Share2, BookOpen } from 'lucide-react';
import { blogPosts } from '../blog/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';

export default function BlogArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();

  const post = useMemo(() => blogPosts.find((p) => p.id === articleId), [articleId]);
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return blogPosts
      .filter((p) => p.id !== post.id && (p.category === post.category || p.keywords.some((k) => post.keywords.includes(k))))
      .slice(0, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <BookOpen className="mx-auto text-teal-300 mb-4" size={48} />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Article Not Found</h1>
          <p className="text-gray-500 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-teal-600 hover:text-teal-800 font-medium">
            Browse all articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative">
      <FloatingElements />
      <Navbar />

      {/* Hero header for article */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              All Articles
            </Link>
            <span className="inline-block px-3 py-1 bg-white/20 text-teal-100 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-teal-100/80">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={16} className="text-teal-600" />
                <span className="font-semibold text-gray-900">Topics covered:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-sm text-gray-500">Share this article:</span>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
              >
                <Share2 size={14} />
                Share
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12 lg:py-16 bg-teal-50/30">
          <div className="max-w-7xl mx-auto section-padding">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="card-hover block bg-white rounded-2xl p-6 border border-teal-100"
                >
                  <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold mb-3">
                    {related.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-teal-700 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions After Reading?
          </h2>
          <p className="text-teal-100/80 mb-8 max-w-xl mx-auto">
            Every child is unique. If you'd like to discuss your child's specific needs,
            book a free consultation with Sarikonda Dhanusri.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-white text-teal-800 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
