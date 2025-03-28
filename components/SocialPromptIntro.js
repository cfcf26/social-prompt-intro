import Link from 'next/link';
import Image from 'next/image';

export default function SocialPromptIntro() {
  return (
    <div className="min-h-screen bg-[#F4A581] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl relative rounded-2xl shadow-lg mb-8 overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image 
          src="/background.png" 
          alt="개발자와 디자이너 대화" 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ objectFit: 'contain' }}
          className="rounded-2xl"
        />
      </div>
      <div className="max-w-3xl text-center mt-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3D2D1D] mb-6">
          마음까지 닿는 대화를 꿈꾸다
        </h1>
        <p className="text-lg md:text-xl text-[#3D2D1D]/80 mb-8">
          우리는 매일 수많은 말을 주고받지만,<br />
          서로의 진짜 의도와 감정은 종종 언어의 사이에 가려져 있습니다.
        </p>
        <p className="italic text-xl md:text-2xl font-semibold text-[#3D2D1D] mb-10">
          "정말로 원하는 게 무엇일까?"
        </p>
        <p className="text-lg md:text-xl text-[#3D2D1D]/80">
          그 마음의 간극을 좁히는 새로운 방법을 만나보세요.
        </p>
        <div className="mt-12 flex justify-center">
          <Link href="/tail-question">
            <span className="bg-[#F0C064] text-[#3D2D1D] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer">
              다음 페이지
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 