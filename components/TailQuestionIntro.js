import Link from 'next/link';

export default function TailQuestionIntro() {
  return (
    <div className="min-h-screen bg-[#F4A581] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl relative">
        <div className="absolute -top-24 right-10 w-32 h-32 bg-[#98B9C7] rounded-full opacity-30 blur-md"></div>
        <div className="absolute -bottom-16 left-10 w-40 h-40 bg-[#F0C064] rounded-full opacity-30 blur-md"></div>
      </div>
      
      <div className="max-w-3xl text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-[#3D2D1D] mb-8">
          AI로 진심을 묻다
        </h1>
        
        <div className="bg-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-10">
          <p className="text-lg md:text-xl text-[#3D2D1D]/90 mb-6 leading-relaxed">
            꼬리 질문 프롬프트란, AI가 정해진 역할과 목표에 따라 지속적인 질문을 던지며, 
            상대방의 숨겨진 진심과 의도를 명확히 이끌어내는 도구입니다.
          </p>
          
          <p className="text-lg md:text-xl text-[#3D2D1D]/90 mb-6 leading-relaxed">
            이를 통해 상대방을 깊이 이해하고, 진정성 있는 소통을 가능하게 합니다. 
            또한, GPT를 통해 일상적이고 효과적인 소통의 규칙으로 만들어 활용할 수 있습니다.
          </p>
        </div>
        
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="border-t border-[#3D2D1D]/20 w-full"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#F4A581] px-4 text-[#3D2D1D]/70 italic">마음의 간극</span>
          </div>
        </div>
        
        <p className="italic text-xl md:text-2xl font-semibold text-[#3D2D1D] mb-12 px-6 py-4 border-l-4 border-r-4 border-[#3D2D1D]/30 inline-block">
          "언어는 언제나 추상적이기에, 이를 구체적인 공감으로 바꾸는 것이 핵심입니다."
        </p>
        
        <div className="mt-12 flex justify-center gap-6">
          <Link href="/">
            <span className="bg-[#3D2D1D] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#3D2D1D]/90 cursor-pointer">
              이전 페이지
            </span>
          </Link>
          <Link href="/planner-designer">
            <span className="bg-[#F0C064] text-[#3D2D1D] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#F0C064]/90 cursor-pointer">
              다음 페이지
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 