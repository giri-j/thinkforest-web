import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="기획의 숲에 오신 걸 환영합니다">
      <section className="space-y-4">
      <h1 className="text-3xl font-pretendard">기획의 숲</h1>

        <h2 className="text-2xl font-bold text-[#2D3E3F]">기획의 숲에 오신 걸 환영합니다</h2>
        <p className="text-gray-700">
          저는 기획의 숲을 가꾸는 기리입니다.<br />
          이곳은 저의 포트폴리오이자 생각의 아카이브입니다.
        </p>
      </section>
    </Layout>
  );
}
