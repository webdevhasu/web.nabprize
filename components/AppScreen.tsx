export default function AppScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#FFF1E0] overflow-hidden text-[11px] leading-tight">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 flex-shrink-0">
        <span className="text-[9px] font-semibold text-navy">9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-2 bg-navy rounded-sm" />
          <div className="w-1 h-2 bg-navy/40 rounded-sm" />
          <div className="w-3 h-2 bg-navy rounded-sm" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-2" style={{ scrollbarWidth: "none" }}>
        {/* Header */}
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="text-[9px] text-warm-gray">Assalam o Alaikum,</div>
            <div className="text-sm font-bold text-navy">@hassan_wali</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-[#FF6B4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* NP-Coins balance */}
        <div className="mt-1 bg-white rounded-2xl p-3 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#F5B942]/15 flex items-center justify-center">
            <span className="text-lg">🪙</span>
          </div>
          <div className="flex-1">
            <div className="text-[8px] text-warm-gray font-medium">NP-Coins Balance</div>
            <div className="text-lg font-bold text-navy">1,250</div>
          </div>
          <div className="text-[8px] text-[#4CAF50] font-medium bg-[#4CAF50]/10 px-2 py-1 rounded-full">
            +25 today
          </div>
        </div>

        {/* Daily Check-in */}
        <div className="mt-2.5 bg-white rounded-2xl p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-navy">Daily Check-in</span>
            <span className="text-[8px] bg-[#FF6B4A]/10 text-[#FF6B4A] px-2 py-0.5 rounded-full font-medium">🔥 Day 5 streak</span>
          </div>
          <div className="flex gap-1.5 mt-2">
            {["1", "2", "3", "4", "5", "6", "7"].map((day, i) => (
              <div key={day} className={`flex-1 text-center py-1.5 rounded-lg text-[8px] font-medium ${
                i < 5 ? "bg-[#4CAF50] text-white" : i === 5 ? "bg-[#FF6B4A] text-white" : "bg-gray-100 text-warm-gray"
              }`}>
                {i < 5 ? "✓" : day}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2.5 mt-2.5">
          <button className="flex-1 flex flex-col items-center gap-1 py-2.5 bg-[#FF6B4A] rounded-xl text-white">
            <span className="text-base">🎮</span>
            <span className="text-[8px] font-semibold">Play Now</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 py-2.5 bg-white border border-gray-200 rounded-xl text-navy">
            <span className="text-base">🎁</span>
            <span className="text-[8px] font-semibold">Rewards</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 py-2.5 bg-white border border-gray-200 rounded-xl text-navy">
            <span className="text-base">📺</span>
            <span className="text-[8px] font-semibold">Watch Ad</span>
          </button>
        </div>

        {/* Mini Game Preview */}
        <div className="mt-3 bg-white rounded-2xl p-3 shadow-sm">
          <div className="text-[10px] font-semibold text-navy mb-2">Practice vs NabBot</div>
          <div className="bg-[#FFF7F0] rounded-xl p-3 flex items-center justify-center">
            {/* Mini dots & boxes grid */}
            <svg viewBox="0 0 120 120" className="w-full max-w-[140px]">
              {/* Dots */}
              {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={10 + col * 20}
                    cy={10 + row * 20}
                    r={3}
                    fill="#333333"
                  />
                ))
              )}
              {/* Some lines drawn */}
              <line x1={10} y1={10} x2={30} y2={10} stroke="#FF6B4A" strokeWidth={2} />
              <line x1={30} y1={10} x2={30} y2={30} stroke="#FF6B4A" strokeWidth={2} />
              <line x1={10} y1={30} x2={30} y2={30} stroke="#FF6B4A" strokeWidth={2} />
              <line x1={10} y1={10} x2={10} y2={30} stroke="#FF6B4A" strokeWidth={2} />
              <rect x={11} y={11} width={18} height={18} fill="#FF6B4A" opacity={0.15} rx={2} />

              <line x1={50} y1={10} x2={70} y2={10} stroke="#7B5FE0" strokeWidth={2} />
              <line x1={70} y1={10} x2={70} y2={30} stroke="#7B5FE0" strokeWidth={2} />
              <line x1={50} y1={30} x2={70} y2={30} stroke="#7B5FE0" strokeWidth={2} />
              <line x1={50} y1={10} x2={50} y2={30} stroke="#7B5FE0" strokeWidth={2} />
              <rect x={51} y={11} width={18} height={18} fill="#7B5FE0" opacity={0.15} rx={2} />

              <line x1={10} y1={50} x2={30} y2={50} stroke="#7B5FE0" strokeWidth={2} />
              <line x1={50} y1={70} x2={70} y2={70} stroke="#FF6B4A" strokeWidth={2} />
              <line x1={90} y1={50} x2={90} y2={70} stroke="#FF6B4A" strokeWidth={2} />
            </svg>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-[8px]"><span className="text-[#FF6B4A] font-bold">You:</span> <span className="text-navy font-medium">2 boxes</span></div>
            <div className="text-[8px]"><span className="text-[#7B5FE0] font-bold">NabBot:</span> <span className="text-navy font-medium">1 box</span></div>
          </div>
        </div>

        {/* Lifetime Stats */}
        <div className="mt-3 pb-2">
          <div className="text-[10px] font-semibold text-navy mb-2">Lifetime Stats</div>
          <div className="flex gap-2">
            <div className="flex-1 bg-white rounded-xl p-2 text-center shadow-sm">
              <div className="text-base font-bold text-navy">47</div>
              <div className="text-[7px] text-warm-gray">Matches</div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-2 text-center shadow-sm">
              <div className="text-base font-bold text-[#4CAF50]">32</div>
              <div className="text-[7px] text-warm-gray">Wins</div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-2 text-center shadow-sm">
              <div className="text-base font-bold text-[#E53935]">15</div>
              <div className="text-[7px] text-warm-gray">Losses</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex-shrink-0 bg-white border-t border-gray-100 px-2 pt-1 pb-1.5 flex items-end justify-around">
        {[
          { label: "Home", active: true, icon: "🏠" },
          { label: "Play & Earn", active: false, icon: "🎮" },
          { label: "Rewards", active: false, icon: "🏆" },
          { label: "Profile", active: false, icon: "👤" },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
              tab.active
                ? "bg-[#FF6B4A] shadow-sm"
                : ""
            }`}>
              <span className="text-sm">{tab.icon}</span>
            </div>
            <span className={`text-[7px] font-medium ${
              tab.active ? "text-[#FF6B4A]" : "text-gray-400"
            }`}>
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
