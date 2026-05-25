import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl font-black font-heading text-brand-orange mb-4"
        >
          404
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold uppercase tracking-wider text-brand-dark mb-6"
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-500 mb-8 max-w-md mx-auto leading-relaxed"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/" 
            className="inline-block bg-brand-orange hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 tracking-wide"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
