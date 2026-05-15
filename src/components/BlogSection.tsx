import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import { blogPosts } from '../blog/blogData';

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  const activePost = blogPosts.find((p) => p.id === activeArticle);

  if (activePost) {
    return (
      <section id="blog" className="py-20 lg:py-28 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => {
              setActiveArticle(null);
              window.location.hash = '';
            }}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to All Articles
          </motion.button>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              {activePost.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{activePost.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-10 pb-6 border-b border-gray-200">
              <span>{activePost.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {activePost.readTime}
              </span>
            </div>

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: activePost.content }}
            />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Topics covered:</p>
              <div className="flex flex-wrap gap-2">
                {activePost.keywords.map((kw) => (
                  <span key={kw} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 lg:py-28 bg-teal-50/30">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Expert Articles for <span className="gradient-text">Parents & Professionals</span>
          </h2>
          <p className="text-gray-600">
            Evidence-based guides, research insights, and practical advice on paediatric occupational therapy,
            child development, and supporting children with special needs.
          </p>
        </motion.div>

        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="mx-auto text-teal-300 mb-4" size={48} />
            <p className="text-gray-500">Articles coming soon. Check back shortly!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setActiveArticle(post.id);
                  window.location.hash = `blog-${post.id}`;
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="card-hover bg-white rounded-2xl p-6 border border-teal-100 cursor-pointer group"
              >
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">
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
                  <ChevronRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
