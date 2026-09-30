"use client"

const scooters = [
  { operator: "Tier", color: "#00B4FF", distance: "80 m" },
  { operator: "Voi", color: "#FF3366", distance: "130 m" },
  { operator: "Lime", color: "#00CC44", distance: "210 m" },
]

const pins = [
  { top: "28%", left: "20%", color: "#00B4FF", delay: "0s" },
  { top: "50%", left: "55%", color: "#FF3366", delay: "0.7s" },
  { top: "20%", left: "60%", color: "#00CC44", delay: "1.4s" },
  { top: "65%", left: "25%", color: "#00B4FF", delay: "0.3s" },
  { top: "75%", left: "70%", color: "#00CC44", delay: "1s" },
]

export function PhoneMockup() {
  return (
    <div className="max-w-[280px] mx-auto">
      <div className="bg-gray rounded-[36px] p-3 border border-gray-mid shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]">
        {/* Phone notch */}
        <div className="w-20 h-6 bg-background rounded-full mx-auto mb-2.5" />
        
        {/* Phone screen */}
        <div className="bg-[#1C2B1A] rounded-[26px] overflow-hidden aspect-[9/16] relative">
          {/* Map background with grid */}
          <div 
            className="w-full h-full relative"
            style={{
              background: `
                linear-gradient(rgba(28,43,26,0.95), rgba(28,43,26,0.95)),
                repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px),
                repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)
              `
            }}
          >
            {/* Roads */}
            <div className="absolute top-[35%] left-0 right-0 h-2 bg-white/[0.08] rounded" />
            <div className="absolute top-[62%] left-0 right-0 h-1.5 bg-white/[0.08] rounded" />
            <div className="absolute left-[30%] top-0 bottom-0 w-2 bg-white/[0.08] rounded" />
            <div className="absolute left-[65%] top-0 bottom-0 w-1.5 bg-white/[0.08] rounded" />
            <div 
              className="absolute top-[20%] -left-[10%] w-[120%] h-1.5 bg-white/[0.05] rounded"
              style={{ transform: "rotate(-8deg)" }}
            />
            
            {/* User location */}
            <div className="absolute top-[43%] left-[38%] w-4 h-4 rounded-full bg-white border-[3px] border-orange animate-user-pulse z-10" />
            
            {/* Scooter pins */}
            {pins.map((pin, i) => (
              <div 
                key={i}
                className="absolute flex flex-col items-center animate-float"
                style={{ 
                  top: pin.top, 
                  left: pin.left,
                  animationDelay: pin.delay
                }}
              >
                <div 
                  className="w-8 h-8 rounded-[50%_50%_50%_0] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                  style={{ 
                    backgroundColor: pin.color,
                    transform: "rotate(-45deg)"
                  }}
                >
                  <span className="text-sm" style={{ transform: "rotate(45deg)" }}>🛴</span>
                </div>
              </div>
            ))}
            
            {/* Bottom sheet */}
            <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md rounded-t-[20px] p-4">
              <div className="w-8 h-0.5 bg-white/20 rounded mx-auto mb-3" />
              <div className="font-[family-name:var(--font-syne)] font-bold text-xs text-text-muted uppercase tracking-wider mb-2.5">
                5 skuuttia lähellä
              </div>
              <div className="flex flex-col gap-2">
                {scooters.map((scooter, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray rounded-lg px-2.5 py-2">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: scooter.color }}
                      />
                      <div>
                        <div className="text-xs font-medium text-white">{scooter.operator}</div>
                        <div className="text-[10px] text-text-muted">{scooter.distance}</div>
                      </div>
                    </div>
                    <div className="text-[9px] font-medium bg-orange text-background px-2 py-0.5 rounded-full">
                      Avaa →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
