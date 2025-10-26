import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative" style={{ minHeight: 420 }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/20 to-white/0" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 text-white">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live Preview
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">Meet AIROHI, your family health companion</h1>
          <p className="mt-3 text-white/90 max-w-xl">A calm, intelligent OS for preventive care. Manage physical, mental, financial, and environmental wellness — together.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#onboarding" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white" style={{ backgroundColor: '#695DDC' }}>
              Start Onboarding
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#family" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium" style={{ color: '#1A1F71', backgroundColor: '#E8E8E8' }}>
              Explore Family Hub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
