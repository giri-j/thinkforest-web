// src/pages/contact.tsx

import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout title="연락하기 - 기획의 숲">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#2D3E3F]">연락하기</h2>
        <p className="text-gray-700">
          기획의 숲에 오신 걸 환영합니다.  
          궁금한 점이나 협업 문의는 언제든지 편하게 연락 주세요.
        </p>

        <div className="space-y-3">
          <div>
            <span className="font-semibold text-[#2D3E3F]">📧 이메일:</span>{' '}
            <a
              href="mailto:hello@giri.com"
              className="text-blue-600 hover:underline"
            >
              hello@giri.com
            </a>
          </div>

          <div>
            <span className="font-semibold text-[#2D3E3F]">📸 인스타그램:</span>{' '}
            <a
              href="https://instagram.com/giri_forest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @giri_forest
            </a>
          </div>

          <div>
            <span className="font-semibold text-[#2D3E3F]">🧾 노션 포트폴리오:</span>{' '}
            <a
              href="https://notion.so/..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              notion.so/...
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
