import Link from 'next/link';

export default function PlannerDesignerCase() {
  return (
    <div className="min-h-screen bg-[#F4A581] flex flex-col items-center justify-center p-6">
      {/* 장식적 요소 */}
      <div className="absolute top-10 right-10 h-32 w-32 bg-[#F0C064] rounded-full opacity-20 blur-md"></div>
      <div className="absolute bottom-10 left-10 h-40 w-40 bg-[#98B9C7] rounded-full opacity-20 blur-md"></div>
      
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3D2D1D] mb-8 text-center">
          🎨 엇갈린 언어 속 서로의 마음
        </h1>
        
        <h2 className="text-2xl font-semibold text-[#3D2D1D] mb-4 text-center">
          상황 1: 기획자(고객) ↔ 디자이너
        </h2>
        <p className="text-lg text-[#3D2D1D]/80 mb-6 text-center">
          모호한 디자인 요청으로 인한 반복 작업 문제
        </p>
        
        {/* GPT 링크 */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a href="https://chatgpt.com/g/g-67e67ae868fc8191859934bd77197a1f-mohohan-gogaegnim" target="_blank" rel="noopener noreferrer" 
            className="bg-white/50 hover:bg-white/70 transition-colors px-4 py-2 rounded-lg shadow flex items-center justify-center">
            <span className="mr-2">🧑‍💼</span>
            <span className="font-medium text-[#3D2D1D]">모호한 기획자 GPT 체험하기</span>
          </a>
          <a href="https://chatgpt.com/g/g-67e67bfd2d3c8191b3b5b4ed02290b53" target="_blank" rel="noopener noreferrer" 
            className="bg-white/50 hover:bg-white/70 transition-colors px-4 py-2 rounded-lg shadow flex items-center justify-center">
            <span className="mr-2">🎨</span>
            <span className="font-medium text-[#3D2D1D]">디자이너 GPT 체험하기</span>
          </a>
        </div>
        
        {/* 대화 카드 섹션 */}
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-[#3D2D1D] mb-6">기획자의 막연한 요청:</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#F0C064] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">기</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">"이번 서비스 화면은 트렌디하고 세련된 느낌으로 해주세요."</p>
              </div>
            </div>
            
            <div className="flex items-start ml-14">
              <div className="bg-[#98B9C7] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">디</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">"구체적으로 어떤 느낌을 원하시나요?"</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F0C064] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">기</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">"트렌디한 느낌 아시죠?"</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F0C064] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">기</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">"요즘 잘 먹히는 디자인 있잖아요."</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F0C064] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">기</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">"심플하게, 복잡하지 않게."</p>
              </div>
            </div>
            
            <div className="flex items-start ml-14">
              <div className="bg-[#98B9C7] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">디</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">
                  "이렇게 시안을 만들어봤습니다. 어떤가요?"
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#F0C064] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">기</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">"아, 이 느낌은 아닌데…"</p>
              </div>
            </div>
            
            <div className="flex items-start ml-14">
              <div className="bg-[#98B9C7] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">디</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D] italic">
                  <span className="opacity-50">(내적 독백)</span> 대체 무슨 느낌을 원하는 거지...?
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-[#3D2D1D]/10 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-[#3D2D1D] mb-2">발생한 문제 상황</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#3D2D1D]/90">
              <li>디자이너는 명확하지 않은 기획자의 요청 때문에 디자인 방향 설정이 어렵고, 시안을 여러 번 반복해서 제작하게 됨.</li>
              <li>기획자는 계속 "이 느낌이 아닌데..." 라고 피드백하며 반복 수정을 요청함.</li>
              <li>두 부서 모두 업무 시간이 비효율적으로 증가하고, 스트레스 및 갈등이 발생함.</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl font-semibold text-[#3D2D1D] mb-6 italic border-l-4 border-r-4 border-[#3D2D1D]/30 px-6 py-3 inline-block">
            "꼬리 질문 프롬프트는 이 막막함을 명료하게 밝혀주는 등대가 됩니다."
          </p>
          
          <p className="text-lg md:text-xl text-[#3D2D1D]/90 max-w-3xl mx-auto">
            AI가 구체적이고 감각적인 질문으로 서로의 모호한 언어를 해석하고 이해하게 만들어줍니다.
          </p>
        </div>
        
        <div className="flex justify-center gap-6">
          <Link href="/tail-question">
            <span className="bg-[#3D2D1D] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#3D2D1D]/90 cursor-pointer">
              이전 페이지
            </span>
          </Link>
          <Link href="/designer-developer">
            <span className="bg-[#F0C064] text-[#3D2D1D] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#F0C064]/90 cursor-pointer">
              다음 페이지
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 