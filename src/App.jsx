import { useState } from 'react';
import HeroCover from './components/HeroCover.jsx';
import ProgressSteps from './components/ProgressSteps.jsx';
import AuthForm from './components/AuthForm.jsx';
import FamilySetup from './components/FamilySetup.jsx';
import { Heart, Shield, Users } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleAuthSuccess = () => {
    setStep(2);
  };

  const handleFamilyContinue = () => {
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#1A1F71] grid place-items-center shadow-sm">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-base font-semibold tracking-tight" style={{ color: '#1A1F71' }}>AIROHI</div>
              <div className="text-xs text-slate-500">Family Health Companion</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="text-slate-700 hover:text-[#1A1F71] transition-colors" href="#features">Features</a>
            <a className="text-slate-700 hover:text-[#1A1F71] transition-colors" href="#onboarding">Onboarding</a>
            <a className="text-slate-700 hover:text-[#1A1F71] transition-colors" href="#family">Family Hub</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <HeroCover />

        <section id="features" className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="Trusted & Secure"
              desc="Encrypted profiles, secure document storage, and record verification to keep your family safe."
              accent="#695DDC"
            />
            <FeatureCard
              icon={<Users className="h-5 w-5" />}
              title="Built for Families"
              desc="Unify physical, mental, financial, and environmental wellness in one shared hub."
              accent="#1A1F71"
            />
            <FeatureCard
              icon={<Heart className="h-5 w-5" />}
              title="AI-Powered Guidance"
              desc="Personalized insights and gentle nudges that feel calm, intelligent, and human."
              accent="#8b5cf6"
            />
          </div>
        </section>

        <section id="onboarding" className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight" style={{ color: '#1A1F71' }}>Onboarding & Authentication</h2>
              <p className="text-slate-600">Meet AIROHI and set up your personalized wellness journey.</p>
            </div>
            <ProgressSteps current={step} total={totalSteps} />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-100 p-6 bg-white shadow-sm">
              {step === 1 && (
                <AuthForm onSuccess={handleAuthSuccess} />
              )}
              {step === 2 && (
                <FamilySetup onContinue={handleFamilyContinue} />
              )}
              {step === 3 && (
                <div className="text-center py-16">
                  <div className="mx-auto h-14 w-14 rounded-2xl grid place-items-center mb-4" style={{ backgroundColor: '#E8E8E8' }}>
                    <Heart className="h-7 w-7" style={{ color: '#1A1F71' }} />
                  </div>
                  <h3 className="text-xl font-semibold" style={{ color: '#1A1F71' }}>Welcome to AIROHI</h3>
                  <p className="text-slate-600 mt-1">Your family health OS is ready. Explore your dashboard for AI insights, rewards, and doctor connect.</p>
                  <a href="#family" className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl text-white" style={{ backgroundColor: '#1A1F71' }}>
                    Go to Family Hub
                  </a>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-slate-100 p-6 bg-gradient-to-br from-white to-[#E8E8E8] shadow-sm">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1A1F71' }}>What to expect</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: '#695DDC' }}></span> Quick sign-in via Email or Apple ID with secure token storage.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: '#1A1F71' }}></span> Option to connect Apple Health and wearables for richer insights.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-400"></span> Add family members for a shared wellness view with permissions you control.</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span> Personalized dashboard with AI assistant and gentle reminders.</li>
              </ul>
              <div className="mt-6 rounded-xl p-4 bg-white border border-slate-100">
                <p className="text-sm text-slate-600">Backend endpoints planned:</p>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <Badge>POST /auth/register</Badge>
                  <Badge>POST /auth/login</Badge>
                  <Badge>POST /auth/family/add</Badge>
                  <Badge>GET /auth/profile</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="family" className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-2xl border border-slate-100 p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight mb-1" style={{ color: '#1A1F71' }}>Family Hub Preview</h2>
            <p className="text-slate-600 mb-6">A calm unified view of your family’s wellness. Share insights, track goals, and connect with doctors.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <HubCard title="Dashboard" desc="See today’s health summary, goals, and AI insights." color="#1A1F71" />
              <HubCard title="AI Assistant" desc="Ask anything: sleep, stress, nutrition — grounded in your data." color="#695DDC" />
              <HubCard title="Doctor Connect" desc="Search, message, and start a video visit using WebRTC." color="#8b5cf6" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} AIROHI — A trusted family health companion.</p>
          <div className="flex items-center gap-3 text-sm">
            <a className="text-slate-600 hover:text-[#1A1F71]" href="#">Privacy</a>
            <a className="text-slate-600 hover:text-[#1A1F71]" href="#">Security</a>
            <a className="text-slate-600 hover:text-[#1A1F71]" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc, accent }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-6 bg-white shadow-sm">
      <div className="h-10 w-10 rounded-xl grid place-items-center mb-3" style={{ backgroundColor: '#E8E8E8', color: accent }}>
        {icon}
      </div>
      <h3 className="font-semibold" style={{ color: '#1A1F71' }}>{title}</h3>
      <p className="text-slate-600 mt-1 text-sm">{desc}</p>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-slate-700">{children}</span>
  );
}

function HubCard({ title, desc, color }) {
  return (
    <div className="rounded-2xl border border-slate-100 p-5 bg-white shadow-sm">
      <div className="h-2 w-10 rounded-full mb-3" style={{ backgroundColor: color }} />
      <div className="font-semibold" style={{ color: '#1A1F71' }}>{title}</div>
      <div className="text-slate-600 text-sm mt-1">{desc}</div>
    </div>
  );
}
