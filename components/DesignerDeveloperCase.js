import Link from 'next/link';

export default function DesignerDeveloperCase() {
  return (
    <div className="min-h-screen bg-[#F4A581] flex flex-col items-center justify-center p-6">
      {/* 장식적 요소 */}
      <div className="absolute top-20 left-10 h-32 w-32 bg-[#F0C064] rounded-full opacity-20 blur-md"></div>
      <div className="absolute bottom-20 right-10 h-40 w-40 bg-[#98B9C7] rounded-full opacity-20 blur-md"></div>
      
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3D2D1D] mb-8 text-center">
          💻 작은 요청 뒤 숨겨진 어려움
        </h1>
        
        <h2 className="text-2xl font-semibold text-[#3D2D1D] mb-4 text-center">
          상황 2: 디자이너 ↔ 개발자
        </h2>
        <p className="text-lg text-[#3D2D1D]/80 mb-6 text-center">
          디자인 변경 요청으로 인한 개발 난이도 급상승 문제
        </p>
        
        {/* GPT 링크 */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a href="https://chatgpt.com/g/g-67e68868147881919742dba5012959e8-gaebalja-ddarahagi" target="_blank" rel="noopener noreferrer" 
            className="bg-white/50 hover:bg-white/70 transition-colors px-4 py-2 rounded-lg shadow flex items-center justify-center">
            <span className="mr-2">💻</span>
            <span className="font-medium text-[#3D2D1D]">개발자 GPT 체험하기</span>
          </a>
          <a href="https://chatgpt.com/g/g-67e6875174c081919a6424f6a853957d-mohohan-dijaineo" target="_blank" rel="noopener noreferrer" 
            className="bg-white/50 hover:bg-white/70 transition-colors px-4 py-2 rounded-lg shadow flex items-center justify-center">
            <span className="mr-2">🎨</span>
            <span className="font-medium text-[#3D2D1D]">모호한 디자이너 GPT 체험하기</span>
          </a>
        </div>
        
        {/* 대화 카드 섹션 */}
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-[#3D2D1D] mb-6">디자이너의 갑작스러운 부탁:</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#98B9C7] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">디</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow max-w-2xl">
                <p className="text-lg text-[#3D2D1D]">"버튼 하나 추가하는 거 금방이잖아요? 옵션 자동 추가, 스크롤 시 자연스러운 움직임 부탁해요."</p>
              </div>
            </div>
            
            <div className="flex items-start ml-14">
              <div className="bg-[#F0C064] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">개</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D] italic">
                  <span className="opacity-50">(내적 독백)</span> 이게 금방 될 작업이 아닌데...
                </p>
              </div>
            </div>
            
            <div className="flex items-start ml-14">
              <div className="bg-[#F0C064] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">개</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow max-w-2xl">
                <p className="text-lg text-[#3D2D1D]">
                  "이 기능을 추가하려면 데이터 구조도 변경해야 하고, 스크롤 애니메이션은 성능 이슈도 고려해야 해요."
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#98B9C7] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 text-[#3D2D1D] font-bold">디</div>
              <div className="bg-white/60 rounded-2xl rounded-tl-none p-4 shadow">
                <p className="text-lg text-[#3D2D1D]">"그렇게 복잡한 건가요?"</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl font-semibold text-[#3D2D1D] mb-6 italic border-l-4 border-r-4 border-[#3D2D1D]/30 px-6 py-3 inline-block">
            "AI는 이런 순간, 서로의 상황과 어려움을 이해하도록 도와줍니다."
          </p>
          
          <p className="text-lg md:text-xl text-[#3D2D1D]/90 max-w-3xl mx-auto">
            구체적이고 세심한 꼬리 질문을 통해 두 사람 간의 공감과 소통의 벽을 허물어줍니다.
          </p>
        </div>
        
        <div className="flex justify-center gap-6">
          <Link href="/planner-designer">
            <span className="bg-[#3D2D1D] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#3D2D1D]/90 cursor-pointer">
              이전 페이지
            </span>
          </Link>
          <Link href="/conclusion">
            <span className="bg-[#F0C064] text-[#3D2D1D] px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#F0C064]/90 cursor-pointer">
              다음 페이지
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 