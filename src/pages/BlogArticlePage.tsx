import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, ArrowLeft, Calendar, Tag, Share2, BookOpen } from 'lucide-react';
import { blogPosts } from '../blog/blogData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
          <p className="text-gray-500 mb-6">The article you&apos;re looking for doesn&apos;t exist.</p>
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
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700">
        <div className="max-w-4xl mx-auto section-padding">
          <div className="reveal">
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
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto section-padding">
          <article className="reveal">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

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
          </article>
        </div>
      </section>

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

      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions After Reading?
          </h2>
          <p className="text-teal-100/80 mb-8 max-w-xl mx-auto">
            Every child is unique. If you&apos;d like to discuss your child&apos;s specific needs,
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
