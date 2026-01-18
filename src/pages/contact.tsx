import Layout from '@/components/Layout';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const contactLinks = [
    {
      name: 'Instagram',
      label: '@gianteunkil',
      href: 'https://www.instagram.com/gianteunkil/',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: 'hover:text-[#E1306C]'
    },
    {
      name: 'YouTube',
      label: '@iamgil_Official',
      href: 'https://www.youtube.com/@iamgil_Official',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
      color: 'hover:text-[#FF0000]'
    },
    {
      name: 'Email',
      label: 'jek5797@naver.com',
      href: 'mailto:jek5797@naver.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      color: 'hover:text-forest-main'
    }
  ];

  return (
    <Layout title="Contact - 기획의 숲">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-forest-main/5 text-forest-main text-[10px] font-bold tracking-widest uppercase mb-6"
          >
            Connect
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-yeogiottae text-forest-text mb-6"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-forest-text/60 font-light max-w-lg mx-auto leading-relaxed"
          >
            기획의 숲은 언제나 새로운 연결을 기다립니다.<br />
            협업 제안이나 궁금한 점은 아래 채널로 편하게 말씀해 주세요.
          </motion.p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className={`group relative p-8 glass-card border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center rounded-3xl ${link.color}`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-forest-base/50 text-forest-text/40 group-hover:text-inherit transition-colors duration-500">
                {link.icon}
              </div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-forest-text/40 mb-2 group-hover:text-forest-text/60 transition-colors">
                {link.name}
              </h3>
              <p className="text-forest-text font-medium">
                {link.label}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t border-forest-main/10 text-center"
        >
          <p className="text-forest-text/30 font-light italic">
            "모든 위대한 기획은 한 번의 만남에서 시작됩니다."
          </p>
        </motion.div>
      </div>
    </Layout>
  );
}
