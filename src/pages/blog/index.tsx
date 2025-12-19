// src/pages/blog/index.tsx

import Layout from '@/components/Layout';
import Link from 'next/link';

type Post = {
  title: string;
  slug: string;
  excerpt: string;
};

const dummyPosts: Post[] = [
  {
    title: '기획자는 왜 숲을 가꾸는가',
    slug: 'why-plan-a-forest',
    excerpt: '기획자로서 내가 “기획의 숲”이라는 개념을 떠올리게 된 배경.',
  },
  {
    title: '회의를 덜 지루하게 만드는 법',
    slug: 'meeting-guide',
    excerpt: '기획자가 회의를 주도할 때 중요한 3가지 포인트를 소개합니다.',
  },
];

export default function BlogIndex() {
  return (
    <Layout title="블로그 - 기획의 숲">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#2D3E3F]">블로그</h2>
        <p className="text-gray-700">기획의 숲에서 피어난 생각들을 공유합니다.</p>

        <ul className="space-y-6">
          {dummyPosts.map((post) => (
            <li
              key={post.slug}
              className="border border-[#D8D8D8] rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h3 className="text-xl font-semibold text-[#2D3E3F]">{post.title}</h3>
                <p className="text-gray-600 mt-1">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
