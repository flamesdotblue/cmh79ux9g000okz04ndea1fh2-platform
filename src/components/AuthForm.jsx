import { useState } from 'react';
import { Mail, Lock, Apple, CheckCircle } from 'lucide-react';

export default function AuthForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter email and password.');
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      setTimeout(() => {
        onSuccess?.();
      }, 600);
    } catch (err) {
      setError('Sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleApple = async () => {
    setLoading(true);
    setError('');
    try {
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      setTimeout(() => onSuccess?.(), 600);
    } catch (e) {
      setError('Apple sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold" style={{ color: '#1A1F71' }}>Sign in or Create Account</h3>
      <p className="text-slate-600 text-sm mt-1">Secure sign-in with Email or Apple ID. Tokens stored safely.</p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:border-[#1A1F71]">
          <Mail className="h-4 w-4 text-slate-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 focus-within:border-[#1A1F71]">
          <Lock className="h-4 w-4 text-slate-500" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
        {error && <div className="text-xs text-red-600">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
          style={{ backgroundColor: '#1A1F71' }}
        >
          {loading ? 'Signing in…' : 'Continue'}
        </button>
      </form>

      <div className="my-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-500">or</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <button
        onClick={handleApple}
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium border border-slate-200 bg-white disabled:opacity-60"
      >
        <Apple className="h-4 w-4" /> Sign in with Apple
      </button>

      {success && (
        <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm">
          <CheckCircle className="h-4 w-4" /> Success. Redirecting…
        </div>
      )}

      <div className="mt-6 rounded-xl p-4 bg-gradient-to-br from-white to-[#E8E8E8] border border-slate-100">
        <p className="text-xs text-slate-600">By continuing, you agree to AIROHI’s Privacy Policy and data processing for personalized wellness insights.</p>
      </div>
    </div>
  );
}
