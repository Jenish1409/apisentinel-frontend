import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';
import {
  Activity, ShieldCheck, Zap, ServerCrash, Bell, Clock,
  CheckCircle, ArrowRight, BarChart2, Lock, RefreshCw,
  TrendingUp, Globe, AlertTriangle
} from 'lucide-react';

const FEATURES = [
  { icon: Activity, color: 'blue', title: 'Real-Time Analytics', desc: 'Response times and uptime percentages update in real-time via concurrent parallel checks.' },
  { icon: ShieldCheck, color: 'green', title: 'Secure & Encrypted', desc: 'API keys stored with AES-256 encryption. JWT-protected routes. Built on Spring Boot & PostgreSQL.' },
  { icon: ServerCrash, color: 'red', title: 'Incident Tracking', desc: 'Every outage is automatically logged with start time, duration, and recovery confirmation.' },
  { icon: Bell, color: 'amber', title: 'Email Alerts', desc: 'Notified instantly after 3 consecutive failures. Recovery alerts sent automatically too.' },
  { icon: BarChart2, color: 'purple', title: 'Visual Dashboards', desc: 'Area charts, uptime sparklines, pie distributions, and live summary cards — all on one screen.' },
  { icon: RefreshCw, color: 'teal', title: 'Rate Limit Protection', desc: 'Detects HTTP 429 and automatically pauses checking for 5 minutes to protect your quota.' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Register', desc: 'Create a free account with OTP email verification in under 60 seconds.', icon: CheckCircle },
  { step: '02', title: 'Add APIs', desc: 'Paste your endpoint URL, choose HTTP method and polling interval.', icon: Globe },
  { step: '03', title: 'Monitor', desc: 'ApiSentinel pings your endpoints immediately and shows live results.', icon: Activity },
  { step: '04', title: 'Get Alerted', desc: 'Receive email alerts on incidents and recovery notifications.', icon: Bell },
];

const colorBg = {
  blue: 'bg-blue-50   dark:bg-blue-900/20',
  green: 'bg-green-50  dark:bg-green-900/20',
  red: 'bg-red-50    dark:bg-red-900/20',
  amber: 'bg-amber-50  dark:bg-amber-900/20',
  purple: 'bg-purple-50 dark:bg-purple-900/20',
  teal: 'bg-teal-50   dark:bg-teal-900/20',
};
const colorText = {
  blue: 'text-blue-600   dark:text-blue-400',
  green: 'text-green-600  dark:text-green-400',
  red: 'text-red-600    dark:text-red-400',
  amber: 'text-amber-600  dark:text-amber-400',
  purple: 'text-purple-600 dark:text-purple-400',
  teal: 'text-teal-600   dark:text-teal-400',
};
const colorBorder = {
  blue: 'border-blue-100   dark:border-blue-800/50   group-hover:border-blue-200 dark:group-hover:border-blue-700',
  green: 'border-green-100  dark:border-green-800/50  group-hover:border-green-200',
  red: 'border-red-100    dark:border-red-800/50    group-hover:border-red-200',
  amber: 'border-amber-100  dark:border-amber-800/50  group-hover:border-amber-200',
  purple: 'border-purple-100 dark:border-purple-800/50 group-hover:border-purple-200',
  teal: 'border-teal-100   dark:border-teal-800/50   group-hover:border-teal-200',
};

// Fake live status pill for hero mockup
const DEMO_APIS = [
  { name: 'payments-api', status: 'UP', ms: 142 },
  { name: 'auth-service', status: 'UP', ms: 67 },
  { name: 'data-pipeline', status: 'DOWN', ms: null },
  { name: 'cdn-edge', status: 'UP', ms: 23 },
];

function HeroMockup() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setPulse(p => !p), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto max-w-lg">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-3xl rounded-3xl" />
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-blue-500/10 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md px-8 py-1 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              apisentinel.app/dashboard
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-5 space-y-2.5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold text-gray-900 dark:text-white">Live Monitor</p>
            <span className={`flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400 ${pulse ? 'opacity-100' : 'opacity-60'} transition-opacity duration-1000`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Checking…
            </span>
          </div>
          {DEMO_APIS.map(api => (
            <div key={api.name} className={`flex items-center justify-between rounded-xl px-4 py-2.5 ${api.status === 'DOWN' ? 'bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800' : 'bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700'}`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${api.status === 'UP' ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`} />
                <code className="text-xs text-gray-700 dark:text-gray-300 font-mono">{api.name}</code>
              </div>
              <div className="flex items-center gap-3">
                {api.ms && <span className="text-xs text-gray-400 font-mono">{api.ms}ms</span>}
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${api.status === 'UP' ? 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30' : 'text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-900/30'}`}>
                  {api.status}
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-2 text-xs text-gray-400 dark:text-gray-500">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
            1 incident active — email alert sent
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-200">
      <PublicNavbar />
      <main className="flex-grow">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden pt-16 pb-28 lg:pt-24 lg:pb-36">
          {/* Background: dot grid */}
          <div className="absolute inset-0 z-0"
            style={{ backgroundImage: 'radial-gradient(circle, rgb(148 163 184 / 0.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          {/* Gradient overlays */}
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-blue-400/15 dark:bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-300/15 dark:bg-cyan-700/8 rounded-full blur-3xl pointer-events-none" />

          <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: text */}
              <div className="text-center lg:text-left">
                {/* Live badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-700 mb-8">
                  <span className="w-2 h-2 rounded-full bg-blue-500 inline-block animate-pulse" />
                  Live API Monitoring Platform
                </div>

                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.07] mb-6">
                  Reliable API monitoring<br />
                  without the <br className="hidden sm:block" />
                  <span className="relative inline-block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400">
                      complexity
                    </span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 9C60 3 180 3 298 9" stroke="url(#ug)" strokeWidth="3" strokeLinecap="round" />
                      <defs><linearGradient id="ug" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2563eb" /><stop offset="0.5" stopColor="#06b6d4" /><stop offset="1" stopColor="#14b8a6" />
                      </linearGradient></defs>
                    </svg>
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                  Track uptime, latency, incidents, and alerts —<br />
                  all from one clean dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link to="/register"
                    className="inline-flex justify-center items-center gap-2 px-8 py-3.5 text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5">
                    Start for Free <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="#features"
                    className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-300 dark:border-gray-700 text-base font-semibold rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5">
                    Learn More
                  </a>
                </div>

                {/* Social proof */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  {[
                    { icon: ShieldCheck, text: 'No credit card' },
                    { icon: Clock, text: 'Free forever' },
                    { icon: Zap, text: 'Setup in 60s' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <Icon className="w-4 h-4 text-green-500" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: mockup */}
              <div className="hidden lg:block">
                <HeroMockup />
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-4 py-1.5 rounded-full mb-5 border border-purple-100 dark:border-purple-800">
                <TrendingUp className="w-3.5 h-3.5" /> Feature-rich monitoring
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Everything you need to stay online</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Production-grade features built for developers who take reliability seriously.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map(({ icon: Icon, color, title, desc }) => (
                <div key={title}
                  className={`group bg-white dark:bg-gray-900 rounded-2xl p-7 border ${colorBorder[color]} shadow-sm hover:shadow-xl dark:hover:shadow-gray-900/80 transition-all duration-300 hover:-translate-y-1.5 cursor-default`}>
                  <div className={`${colorBg[color]} w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${colorText[color]}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Up and running in minutes</h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">No credit card. No complex setup. Just monitoring.</p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Connector line */}
              <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800" />
              {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon }) => (
                <div key={step} className="relative text-center group">
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white font-extrabold mb-5 shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:shadow-blue-600/50 transition-all z-10">
                    <Icon className="w-6 h-6" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-black text-blue-600 border-2 border-blue-600">{step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 md:p-16 shadow-2xl shadow-blue-700/30 overflow-hidden text-center">
              {/* Decorative blobs */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mb-6 ring-4 ring-white/10">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Your APIs deserve<br className="hidden md:block" /> better monitoring
                </h2>
                <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Start tracking uptime, response times, and incidents today — completely free, forever.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5 text-base">
                    Create Free Account <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link to="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-all hover:-translate-y-0.5 text-base backdrop-blur-sm">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
