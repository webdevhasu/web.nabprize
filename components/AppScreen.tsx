export default function AppScreen() {
  return (
    <div className="w-full h-full flex flex-col bg-[#FDF6F0] overflow-hidden text-[11px] leading-tight">
      {/* Status bar - fixed */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1 flex-shrink-0">
        <span className="text-[9px] font-semibold text-navy">9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-2 bg-navy rounded-sm" />
          <div className="w-1 h-2 bg-navy/40 rounded-sm" />
          <div className="w-3 h-2 bg-navy rounded-sm" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-2 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        {/* Header */}
        <div className="flex items-center justify-between py-2">
          <div>
            <div className="text-[9px] text-warm-gray">Good morning,</div>
            <div className="text-sm font-bold text-navy">@alex_j</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-purple/15 flex items-center justify-center">
            <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>

        {/* Wallet cards */}
        <div className="flex gap-2.5 py-1.5">
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-[8px] text-warm-gray font-medium">Direct Wallet</span>
            </div>
            <div className="text-lg font-bold text-navy">$24.50</div>
            <div className="text-[8px] text-success font-medium mt-0.5">Withdrawable</div>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-[8px] text-warm-gray font-medium">Pending Wallet</span>
            </div>
            <div className="text-lg font-bold text-navy">$8.20</div>
            <div className="text-[8px] text-warm-gray mt-0.5">Unlocks in 3 days</div>
          </div>
        </div>

        {/* Today's Goal */}
        <div className="mt-2.5 bg-white rounded-2xl p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-navy">Today&apos;s Goal</span>
            <span className="text-[8px] bg-coral/10 text-coral px-2 py-0.5 rounded-full font-medium">🔥 5 day streak</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-1.5">
            <div className="h-full bg-gradient-to-r from-coral to-coral-light rounded-full" style={{ width: "75%" }} />
          </div>
          <div className="flex justify-between">
            <span className="text-[8px] text-navy font-medium">$1.12 / $1.50 earned</span>
            <span className="text-[8px] text-warm-gray">$0.38 to go</span>
          </div>
        </div>

        {/* Lucky Draw */}
        <div className="mt-2.5 bg-gradient-to-br from-purple/10 to-purple/5 rounded-2xl p-3 shadow-sm border border-purple/10">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-navy">Weekly Lucky Draw</span>
            <span className="text-[7px] bg-success/15 text-success px-1.5 py-0.5 rounded-full font-semibold">Qualified ✓</span>
          </div>
          <div className="text-base font-bold text-coral mb-2">$847.20 pool</div>
          <div className="flex gap-1.5">
            {[
              { val: "2", label: "Days" },
              { val: "14", label: "Hrs" },
              { val: "36", label: "Min" },
            ].map((u) => (
              <div key={u.label} className="bg-white rounded-lg px-2 py-1 text-center min-w-[32px]">
                <div className="text-[10px] font-bold text-navy">{u.val}</div>
                <div className="text-[7px] text-warm-gray">{u.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex gap-2.5 mt-2.5">
          <button className="flex-1 flex flex-col items-center gap-1 py-2.5 bg-coral rounded-xl text-white">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[8px] font-semibold">Earn</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 py-2.5 bg-white border border-gray-200 rounded-xl text-navy">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-[8px] font-semibold">Withdraw</span>
          </button>
          <button className="flex-1 flex flex-col items-center gap-1 py-2.5 bg-white border border-gray-200 rounded-xl text-navy">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <span className="text-[8px] font-semibold">Refer</span>
          </button>
        </div>

        {/* Recent Earnings */}
        <div className="mt-3 pb-2">
          <div className="text-[10px] font-semibold text-navy mb-2">Recent Earnings</div>
          {[
            { icon: "📱", name: "Installed TikTok", time: "12m ago", amount: "+$0.45" },
            { icon: "📋", name: "Survey completed", time: "1h ago", amount: "+$0.80" },
            { icon: "🎮", name: "Played Wordle", time: "3h ago", amount: "+$0.25" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-t border-gray-100 first:border-0">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-peach-100 flex items-center justify-center text-[10px]">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[9px] font-medium text-navy">{item.name}</div>
                  <div className="text-[7px] text-warm-gray">{item.time}</div>
                </div>
              </div>
              <span className="text-[9px] font-bold text-success">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav - always visible at bottom */}
      <div className="flex-shrink-0 bg-white border-t border-gray-100 px-2 pt-1 pb-1.5 flex items-end justify-around">
        {[
          { label: "Home", active: true, icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          )},
          { label: "Earn", active: false, icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          )},
          { label: "Lucky Draw", active: false, icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
          )},
          { label: "Profile", active: false, icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          )},
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all ${
              tab.active
                ? "bg-coral text-white shadow-sm"
                : "text-gray-400"
            }`}>
              {tab.icon}
            </div>
            <span className={`text-[7px] font-medium ${
              tab.active ? "text-coral" : "text-gray-400"
            }`}>
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
