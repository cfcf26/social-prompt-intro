import Link from 'next/link';

export default function Conclusion() {
  return (
    <div className="min-h-screen bg-[#F4A581] flex flex-col items-center justify-center p-6">
      {/* 장식적 요소 */}
      <div className="absolute top-10 left-20 h-40 w-40 bg-[#F0C064] rounded-full opacity-20 blur-md"></div>
      <div className="absolute bottom-20 right-10 h-32 w-32 bg-[#98B9C7] rounded-full opacity-20 blur-md"></div>
      <div className="absolute bottom-40 left-10 h-24 w-24 bg-[#3D2D1D] rounded-full opacity-10 blur-md"></div>
      
      <div className="max-w-4xl w-full relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3D2D1D] mb-10 text-center">
          우리가 놓치는 건 언어가 아닌 진심
        </h1>
        
        <div className="text-center mb-14">
          <p className="text-xl md:text-2xl text-[#3D2D1D]/90 mb-12">
            서로의 진짜 마음을 이해하는 길은 멀지 않습니다.
          </p>
          
          <div className="w-full max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-10">
            <p className="text-2xl md:text-3xl font-semibold text-[#3D2D1D] mb-8 italic">
              "AI의 꼬리 질문으로 언어의 장벽을 넘어 더 가까워지고, 더 깊이 소통하세요."
            </p>
            
            <p className="text-xl text-[#3D2D1D]/90">
              이제 서로를 이해하는 대화가 어렵지 않습니다.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
          <Link href="/designer-developer">
            <span className="bg-[#3D2D1D] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#3D2D1D]/90 cursor-pointer text-center block mb-4 md:mb-0">
              이전 페이지
            </span>
          </Link>
          <Link href="/">
            <span className="bg-[#F0C064] text-[#3D2D1D] px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#F0C064]/90 cursor-pointer text-center block">
              처음으로
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
} 