import { useEffect, useState } from 'react'
import {
  ArrowDownToLine, ArrowRight, Camera, Calculator, Check, ChevronDown,
  CircleHelp, Clock3, Database, Flashlight, Images, Lightbulb, Menu,
  RefreshCw, Scan, Settings, ShieldCheck, Sparkles, X, History, ClipboardList,
  WifiOff, Smartphone, Cpu, Sun, Moon, Zap, Layers, TrendingUp
} from 'lucide-react'

const MASCOT = '/assets/shrimp-mascot.png'
const APK_URL = 'https://github.com/varun-padavala/shrimp-counter/releases/download/v2.0.1/app-arm64-v8a-release.apk'

function Brand({ compact = false }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="ShrimpCounter home">
      <img src={MASCOT} alt="" className={`${compact ? 'h-9 w-9' : 'h-11 w-11'} object-contain drop-shadow-[0_0_13px_rgba(161,124,255,.3)]`} />
      <span className="font-display text-[15px] font-extrabold leading-[1.03] tracking-[-.04em] text-white">
        SHRIMP<br /><span className="text-[#8fa5ff]">COUNTER</span>
      </span>
    </a>
  )
}

function DownloadLink({ children = 'Download APK', className = '' }) {
  return (
    <a
      href={APK_URL}
      download
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#a47bff] to-[#7851ef] px-5 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_35px_rgba(132,91,255,.27)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_42px_rgba(132,91,255,.4)] ${className}`}
    >
      <ArrowDownToLine size={17} strokeWidth={2.4} /> {children}
    </a>
  )
}

function PhoneMockup({ light }) {
  const [mode, setMode] = useState('Large')
  const [flash, setFlash] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [tip, setTip] = useState(true)

  const phone = light ? {
    shell: 'border-[#dcd7ed] bg-gradient-to-br from-[#e7e3f5] via-white to-[#d8d1ef] shadow-[0_30px_75px_rgba(74,55,130,.18)]',
    screen: 'border-[#e6e1f4] bg-[#fbfaff] text-[#191a31]',
    subbar: 'border-violet-200 bg-[#f0ebff] text-violet-700',
    switcher: 'border-violet-100 bg-[#f3f0fc]',
    inactive: 'text-slate-500 hover:text-slate-900',
    camera: 'border-violet-100 bg-[#e9eaf5]',
    control: 'border-violet-100 bg-white text-slate-600',
    stats: 'border border-violet-100 bg-[#f0edfb]',
    bottom: 'border border-violet-100 bg-[#f0edfb]',
    secondary: 'text-slate-500',
  } : {
    shell: 'border-white/20 bg-gradient-to-br from-[#5a587c] via-[#17182c] to-[#34304e] shadow-[0_40px_100px_rgba(0,0,0,.55),0_0_55px_rgba(139,99,255,.12)]',
    screen: 'border-violet-200/10 bg-[#101225] text-white',
    subbar: 'border-violet-300/15 bg-[#201c3d] text-violet-200',
    switcher: 'border-white/5 bg-[#0b0d1b]',
    inactive: 'text-slate-500 hover:text-white',
    camera: 'border-violet-200/10 bg-[#171b2d]',
    control: 'border-white/10 bg-[#0b0d1b] text-slate-300',
    stats: 'bg-[#181b30]',
    bottom: 'bg-[#181b30]',
    secondary: 'text-slate-400',
  }

  return (
    <div className={`phone-float relative z-10 w-[min(73vw,284px)] rounded-[38px] border p-[8px] ${phone.shell}`}>
      <div className={`min-h-[495px] overflow-hidden rounded-[30px] border p-3 ${phone.screen}`}>
        <div className="flex items-center justify-between gap-2">
          <Brand compact />
          <span className={`flex items-center gap-1 rounded-full border px-2 py-1 text-[8px] font-bold ${light ? 'border-violet-200 bg-violet-50 text-violet-700' : 'border-violet-300/15 bg-violet-400/10 text-violet-200'}`}><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> v1.0.4</span>
        </div>
        <div className={`mt-3 flex items-center justify-between rounded-full border px-3 py-2 text-[9px] ${phone.subbar}`}>
          <span className="flex items-center gap-1.5"><Sparkles size={12} /> Auto</span>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-violet-500 font-bold text-white">4</span>
          <ChevronDown size={12} />
          <span className={`ml-1 flex items-center gap-1.5 border-l pl-2 ${light ? 'border-violet-200 text-slate-700' : 'border-white/10 text-slate-200'}`}><RefreshCw size={11} /> AI Models</span>
        </div>
        <div className={`mt-3 flex w-fit rounded-full border p-1 ${phone.switcher}`}>
          {['Small', 'Large'].map((item) => <button key={item} onClick={() => setMode(item)} className={`rounded-full px-3 py-1.5 text-[9px] font-bold transition ${mode === item ? (light ? 'bg-violet-100 text-violet-700' : 'bg-violet-500/20 text-violet-200') : phone.inactive}`}>{item}</button>)}
        </div>
        <div className={`relative mt-3 h-[180px] overflow-hidden rounded-[18px] border ${phone.camera}`}>
          <img src="/assets/shrimp-seed-sample.jpg" alt="Actual shrimp seed sample from the ShrimpCounter dataset" className={`absolute inset-0 h-full w-full object-cover object-[50%_82%] ${light ? 'opacity-100 saturate-[1.08] contrast-[1.04]' : 'opacity-80 saturate-[1.04]'}`} />
          <div className={`absolute inset-0 ${light ? 'bg-[#20153b]/[.04]' : 'bg-[#101329]/20'}`} />
          <span className="absolute left-3 top-3 h-6 w-6 border-l-[3px] border-t-[3px] border-violet-400" />
          <span className="absolute right-3 top-3 h-6 w-6 border-r-[3px] border-t-[3px] border-violet-400" />
          <span className="absolute bottom-3 left-3 h-6 w-6 border-b-[3px] border-l-[3px] border-violet-400" />
          <span className="absolute bottom-3 right-3 h-6 w-6 border-b-[3px] border-r-[3px] border-violet-400" />
          <div className="scan-beam absolute left-[10%] right-[10%] h-[2px] bg-violet-300 shadow-[0_0_13px_2px_rgba(185,156,255,.8)]" />

          <div className="absolute right-3 top-1/2 rounded-full border border-white/40 bg-black/50 px-1.5 py-1 text-[8px] text-white">{mode} seed</div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button onClick={() => setFlash(!flash)} className={`flex flex-col items-center gap-1 text-[8px] ${flash ? 'text-violet-500' : phone.secondary}`}><span className={`grid h-8 w-8 place-items-center rounded-full border ${flash ? 'border-violet-400 bg-violet-400/20' : phone.control}`}><Flashlight size={14} /></span>Flash</button>
          <button onClick={() => setZoom(zoom === 1 ? 2 : zoom === 2 ? 3 : 1)} className={`flex flex-col items-center gap-1 text-[8px] ${phone.secondary}`}><span className={`grid h-8 w-8 place-items-center rounded-full border font-bold ${phone.control}`}>{zoom}x</span>Zoom</button>
          <button onClick={() => setTip(false)} aria-label="Capture sample (demo)" className="capture-glow -mt-2 flex flex-col items-center gap-1 text-[8px] text-violet-500"><span className="grid h-[54px] w-[54px] place-items-center rounded-full border-[3px] border-violet-300 bg-white text-violet-600 shadow-[0_0_0_5px_rgba(149,101,255,.12)]"><Camera size={23} fill="currentColor" /></span>Capture</button>
          <button onClick={() => alert('Gallery is part of the mobile app. This website mockup does not access your photos.')} className={`flex flex-col items-center gap-1 text-[8px] ${phone.secondary}`}><span className={`grid h-8 w-8 place-items-center rounded-full border ${phone.control}`}><Images size={14} /></span>Gallery</button>
          <button onClick={() => alert('Use the Guide section in the ShrimpCounter app for help.')} className={`flex flex-col items-center gap-1 text-[8px] ${phone.secondary}`}><span className={`grid h-8 w-8 place-items-center rounded-full border ${phone.control}`}><Lightbulb size={14} /></span>Guide</button>
        </div>
        <div className={`mt-4 grid grid-cols-4 rounded-[17px] p-2.5 ${phone.stats}`}>
          {[{ icon: Database, value: '410', label: 'Total', color: 'text-sky-500' }, { icon: Clock3, value: '0', label: 'Today', color: 'text-emerald-500' }, { icon: ClipboardList, value: '12', label: 'Records', color: 'text-teal-500' }, { icon: History, value: '--', label: 'Recent', color: 'text-amber-500' }].map(({ icon: Icon, value, label, color }) => <div key={label} className="text-center"><Icon size={13} className={`mx-auto mb-1 ${color}`} /><b className="block text-[11px]">{value}</b><span className={`text-[7px] ${light ? 'text-slate-600' : 'text-slate-400'}`}>{label}</span></div>)}
        </div>
        <div className={`mt-2 grid grid-cols-5 rounded-[17px] px-1 py-3 ${phone.bottom}`}>
          {[{ icon: History, label: 'Recents' }, { icon: ClipboardList, label: 'Records' }, { icon: Camera, label: 'Counter' }, { icon: Calculator, label: 'Calculator' }, { icon: Settings, label: 'Settings' }].map(({ icon: Icon, label }) => <div key={label} className={`text-center ${label === 'Counter' ? 'text-violet-500' : phone.secondary}`}><Icon size={15} className="mx-auto mb-1" /><span className="text-[7px]">{label}</span></div>)}
        </div>
      </div>
    </div>
  )
}
function SectionLabel({ children }) {
  return <p className="font-mono text-[10px] uppercase tracking-[.19em] text-violet-300">{children}</p>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const labelCount = 2007

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const light = theme === 'light'
  return (
    <div className={light ? 'site light-site' : 'site'}>
      <div id="top" />
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex h-[78px] w-[min(1160px,calc(100%-36px))] items-center justify-between border-b border-white/10">
          <Brand />
          <nav className="hidden items-center gap-7 text-[13px] text-slate-300 xl:flex">
            <a className="transition hover:text-white" href="#features">Features</a>
            <a className="transition hover:text-white" href="#seed-modes">Seed modes</a>
            <a className="transition hover:text-white" href="#updates">Updates</a>
            <button onClick={() => setTheme(light ? 'dark' : 'light')} className="theme-toggle" aria-label="Toggle website theme">{light ? <Moon size={15} /> : <Sun size={15} />} {light ? 'Dark' : 'Light'}</button>
            <DownloadLink />
          </nav>
          <div className="flex items-center gap-2 xl:hidden">
            <button onClick={() => setTheme(light ? 'dark' : 'light')} className="theme-toggle !px-3" aria-label="Toggle theme">{light ? <Moon size={15} /> : <Sun size={15} />}</button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5"><Menu size={18} /></button>
          </div>
        </div>
        {menuOpen && <div className="mx-auto mt-2 flex w-[calc(100%-36px)] flex-col gap-4 rounded-2xl border border-white/10 bg-[#111329]/95 p-5 text-sm text-slate-200 shadow-xl backdrop-blur-xl xl:hidden">
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#seed-modes" onClick={() => setMenuOpen(false)}>Seed modes</a><a href="#updates" onClick={() => setMenuOpen(false)}>Updates</a><a href="#download" onClick={() => setMenuOpen(false)}>Download APK</a>
        </div>}
      </header>

      <main>
        <section className="hero-section relative isolate overflow-hidden pb-14 pt-32 sm:pt-36 xl:min-h-0 xl:pb-10 xl:pt-28">
          <div className="hero-grid absolute inset-0 -z-10" />
          <div className="pointer-events-none absolute -right-40 top-36 -z-10 h-[480px] w-[480px] rounded-full border border-violet-300/10 shadow-[0_0_0_55px_rgba(167,139,250,.025),0_0_0_110px_rgba(167,139,250,.018)]" />
          <div className="mx-auto grid w-[min(1160px,calc(100%-36px))] items-center gap-8 xl:grid-cols-[.96fr_1.04fr]">
            <div className="reveal relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[.08] px-3.5 py-2 font-mono text-[10px] tracking-wide text-violet-200"><Sparkles size={12} /> BUILT FOR SHRIMP SEED FARMS</div>
              <h1 className="mt-6 max-w-[680px] font-display text-[clamp(3.2rem,5.1vw,4.8rem)] font-extrabold leading-[.98] tracking-[-.075em] text-white">Fast counts.<br /><span className="gradient-text">Clear decisions.</span></h1>
              <p className="mt-6 max-w-[490px] text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">Count shrimp seed in seconds, inspect every detected point, and track growth over time. Built for farm work—even when there is no internet connection.</p>
              <div className="mt-7 flex flex-wrap items-center gap-3"><DownloadLink /><a href="#features" className="inline-flex items-center gap-2 rounded-full border border-violet-200/20 px-5 py-3.5 text-sm font-semibold text-violet-100 transition hover:bg-violet-300/10"><span className="grid h-5 w-5 place-items-center rounded-full border border-violet-200/60 text-[8px]">▶</span> Explore features</a></div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-200"><span className="grid h-9 w-9 place-items-center rounded-full border border-violet-300/15 bg-violet-400/10 text-violet-200"><WifiOff size={16} /></span><span>Works offline<small className="mt-1 block text-[10px] text-slate-500">No internet for counting</small></span></div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200"><span className="grid h-9 w-9 place-items-center rounded-full border border-violet-300/15 bg-violet-400/10 text-violet-200"><RefreshCw size={16} /></span><span>Under 30 sec<small className="mt-1 block text-[10px] text-slate-500">Fast image analysis</small></span></div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200"><span className="grid h-9 w-9 place-items-center rounded-full border border-violet-300/15 bg-violet-400/10 text-violet-200"><Scan size={16} /></span><span>Two seed sizes<small className="mt-1 block text-[10px] text-slate-500">Small + large</small></span></div>
              </div>
            </div>

            <div className="relative mx-auto flex min-h-[500px] w-full max-w-[570px] items-center justify-center xl:min-h-[500px]">
              <div className="orbit-ring absolute h-[350px] w-[350px] rounded-full border border-violet-300/20 sm:h-[420px] sm:w-[420px]" />
              <div className="absolute left-[2%] top-[15%] z-20 rounded-2xl border border-violet-200/15 bg-[#14152be8] px-4 py-3 shadow-xl backdrop-blur-xl float-slow">
                <span className="flex items-center gap-2 text-xs font-bold"><WifiOff size={14} className="text-emerald-400" /> Works offline</span>
                <span className="mt-1 block text-[10px] text-slate-400">Count without a connection</span>
              </div>
              <PhoneMockup light={light} />
              <div className={`absolute bottom-[7%] right-0 z-20 rounded-2xl border px-3.5 py-3 shadow-xl backdrop-blur-xl ${light ? 'border-violet-200 bg-white/95 text-[#211a3c]' : 'border-violet-200/15 bg-[#14152be8] text-white'}`}>
                <span className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-400/15 text-emerald-500"><Check size={15} /></span><span><b className="block text-xs">{labelCount === null ? "Label count unavailable" : `${labelCount.toLocaleString()} shrimp labelled`}</b><span className="mt-1 block text-[10px] text-slate-400">YOLO annotation count</span></span></span>
              </div>
            </div>
          </div>
        </section>

        <section id="seed-modes" className="relative z-10 mx-auto -mt-1 grid w-[min(1160px,calc(100%-36px))] gap-3 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-card flex items-center gap-4 rounded-2xl p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-300"><WifiOff size={22} /></span><div><p className="font-mono text-[9px] uppercase tracking-widest text-emerald-300">Farm ready</p><h3 className="mt-1 font-display font-bold">Works offline</h3><p className="mt-1 text-xs text-slate-400">Count without internet.</p></div></div>
          <div className="glass-card flex items-center gap-4 rounded-2xl p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-400/10 text-violet-200"><Zap size={22} /></span><div><p className="font-mono text-[9px] uppercase tracking-widest text-violet-300">Quick results</p><h3 className="mt-1 font-display font-bold">Under 30 seconds</h3><p className="mt-1 text-xs text-slate-400">Fast image processing.</p></div></div>
          <div className="glass-card flex items-center gap-4 rounded-2xl p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-400/10 text-blue-200"><Scan size={22} /></span><div><p className="font-mono text-[9px] uppercase tracking-widest text-blue-300">Choose a mode</p><h3 className="mt-1 font-display font-bold">Small + large seed</h3><p className="mt-1 text-xs text-slate-400">Two seed-size workflows.</p></div></div>
          <div id="updates" className="glass-card flex items-center gap-4 rounded-2xl p-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-400/10 text-amber-300"><RefreshCw size={22} /></span><div><p className="font-mono text-[9px] uppercase tracking-widest text-amber-300">Always improving</p><h3 className="mt-1 font-display font-bold">App + AI updates</h3><p className="mt-1 text-xs text-slate-400">Connect to check for updates.</p></div></div>
        </section>
        <section id="features" className="section-pad mx-auto w-[min(1160px,calc(100%-36px))]">
          <div className="reveal mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div><SectionLabel>Built around real farm work</SectionLabel><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-.06em] sm:text-5xl">From capture to count.<br /><span className="gradient-text">Every step covered.</span></h2></div>
            <p className="max-w-[410px] text-sm leading-7 text-slate-400">Not just a number. ShrimpCounter helps you capture a sample, review the detections, save records, and follow batch growth over time.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[{icon: Scan, title: 'Count with visual proof', desc: 'See detection circles drawn over the image so you can inspect what the model counted.'}, {icon: Images, title: 'Auto-burst + best image', desc: 'Capture several photos in a burst and choose the clearest result for counting.'}, {icon: Layers, title: 'Small and large seed', desc: 'Switch between the two seed-size modes to match the sample you are working with.'}, {icon: WifiOff, title: 'Fully offline counting', desc: 'Run the counting workflow on your device without relying on a live internet connection.'}, {icon: ClipboardList, title: 'Recents and saved records', desc: 'Return to previous counts and keep your sample history organized.'}, {icon: TrendingUp, title: 'Batch growth tracking', desc: 'Track daily growth using saved counts and weight data to follow shrimp per kilogram over time.'}].map(({icon: Icon, title, desc}) => <article key={title} className="feature-card reveal rounded-2xl border border-white/[.09] bg-gradient-to-br from-[#14162e] to-[#0c0e1d] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30"><span className="grid h-11 w-11 place-items-center rounded-[14px] border border-violet-300/10 bg-violet-400/10 text-violet-200"><Icon size={21} /></span><h3 className="mt-5 font-display text-base font-bold">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-400">{desc}</p></article>)}
          </div>
        </section>
        <section id="demo" className="mission-band overflow-hidden border-y border-white/[.07]">
          <div className="mx-auto w-[min(1160px,calc(100%-36px))] py-16 md:py-20">
            <div className="reveal mb-10 max-w-2xl"><SectionLabel>See the counting workflow</SectionLabel><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-.06em] sm:text-5xl">A count you can <span className="gradient-text">actually inspect.</span></h2><p className="mt-4 text-sm leading-7 text-slate-400">From a tray photo to marked detections and a saved result—without sending your farm images to the cloud.</p></div>
            <div className="grid items-center gap-8 lg:grid-cols-[1.08fr_.92fr]">
              <div className={`rounded-[28px] border p-3 shadow-2xl shadow-black/10 sm:p-4 ${light ? 'border-violet-200 bg-white' : 'border-violet-200/15 bg-[#101225]'}`}>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1"><div className={`flex items-center gap-2 text-xs font-bold ${light ? 'text-[#191a31]' : 'text-white'}`}><span className={`grid h-8 w-8 place-items-center rounded-xl ${light ? 'bg-violet-100 text-violet-700' : 'bg-violet-400/15 text-violet-200'}`}><Scan size={16} /></span> Real app result</div><span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold ${light ? 'border-emerald-600/20 bg-emerald-50 text-emerald-700' : 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'}`}><Check size={12}/> Detection overlay</span></div>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-[20px] ${light ? 'bg-[#e9e6d7] ring-1 ring-inset ring-violet-200 shadow-[0_8px_24px_rgba(74,55,130,.10)]' : 'bg-[#e9e6d7] ring-1 ring-inset ring-white/10'}`}>
                  <img src="/assets/shrimp-tray-labeled-preview.jpg" alt="Actual ShrimpCounter result showing shrimp seed marked with detection circles" className="h-full w-full object-contain object-center" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-2 text-[10px] font-extrabold text-white shadow-lg"><Check size={13} /> {labelCount === null ? "Labels unavailable" : `${labelCount.toLocaleString()} labelled shrimp`}</span>
                  <span className="absolute right-3 top-3 rounded-full bg-[#111329]/90 px-3 py-2 text-[10px] font-bold text-white">Label-based preview</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className={`rounded-2xl p-3 ${light ? 'bg-[#f3f0fc]' : 'bg-white/[.06]'}`}><span className={`block text-[10px] ${light ? 'text-slate-600' : 'text-slate-400'}`}>Detected count</span><b className={`mt-1 block text-xl ${light ? 'text-emerald-700' : 'text-emerald-400'}`}>{labelCount === null ? "—" : labelCount.toLocaleString()}</b></div>
                  <div className={`rounded-2xl p-3 ${light ? 'bg-[#f3f0fc]' : 'bg-white/[.06]'}`}><span className={`block text-[10px] ${light ? 'text-slate-600' : 'text-slate-400'}`}>Sample weight</span><b className={`mt-1 block text-xl ${light ? 'text-[#191a31]' : 'text-white'}`}>25 g</b></div>
                  <div className={`rounded-2xl p-3 ${light ? 'bg-[#f3f0fc]' : 'bg-white/[.06]'}`}><span className={`block text-[10px] ${light ? 'text-slate-600' : 'text-slate-400'}`}>Processing</span><b className={`mt-1 block text-xl ${light ? 'text-violet-700' : 'text-violet-200'}`}>&lt;30s</b></div>
                </div>
                <p className={`mt-3 px-1 text-[10px] leading-5 ${light ? 'text-slate-600' : 'text-slate-500'}`}>Preview count is calculated from the non-empty rows in the supplied YOLO label file. The markers visualize ground-truth labels; they are not a new model inference.</p>
              </div>
              <div className="reveal space-y-4">
                {[{n:'01',title:'Capture a short burst',desc:'Take multiple photos to give the app options for a clear sample.'},{n:'02',title:'Pick the best image',desc:'Review the burst and use the image best suited for counting.'},{n:'03',title:'Inspect every marker',desc:'See detections over the photo and review the total before saving.'},{n:'04',title:'Save and track growth',desc:'Organize individual records or batches and compare count-to-weight trends over days.'}].map(item=><div key={item.n} className={`flex gap-4 rounded-2xl border p-4 sm:p-5 ${light ? 'border-violet-200/80 bg-white/85 shadow-[0_8px_24px_rgba(72,52,125,.06)]' : 'border-white/[.07] bg-white/[.025]'}`}><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${light ? 'bg-violet-100 text-violet-700' : 'bg-violet-400/10 text-violet-200'}`}>{item.n}</span><div><h3 className={`font-display font-bold ${light ? 'text-[#191a31]' : 'text-white'}`}>{item.title}</h3><p className={`mt-1 text-xs leading-6 ${light ? 'text-slate-600' : 'text-slate-400'}`}>{item.desc}</p></div></div>)}
                <div className={`flex items-start gap-3 rounded-2xl border p-4 ${light ? 'border-emerald-200 bg-emerald-50' : 'border-emerald-400/15 bg-emerald-400/[.06]'}`}><WifiOff size={18} className={`mt-0.5 shrink-0 ${light ? 'text-emerald-700' : 'text-emerald-300'}`}/><p className={`text-xs leading-6 ${light ? 'text-slate-700' : 'text-slate-300'}`}><b className="text-emerald-500">Offline by design.</b> Counting runs on the device. Connect only when you want to check for app or model updates.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section id="download" className="relative isolate overflow-hidden py-16 sm:py-20">
          <div className="absolute right-[-100px] top-[-120px] h-[360px] w-[360px] rounded-full bg-violet-500/[.08] blur-3xl" />
          <div className="relative mx-auto flex w-[min(1160px,calc(100%-36px))] flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="reveal"><SectionLabel>Ready for your next count?</SectionLabel><h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">Count with <span className="gradient-text">confidence.</span></h2><p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-400">Download ShrimpCounter for Android. Count offline, inspect detections, and keep your farm records together.</p></div>
            <DownloadLink className="!px-7 !py-4 shrink-0 self-start md:self-center mt-1 relative z-10" />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[.08] bg-[#070914] py-7">
        <div className="mx-auto flex w-[min(1160px,calc(100%-36px))] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><Brand compact /><p className="mt-3 max-w-[280px] text-xs leading-5 text-slate-500">Offline shrimp seed counting, visual results, and batch growth tracking for farm work.</p></div>
          <div className="text-xs leading-6 text-slate-400"><p>Built by <span className="font-semibold text-white">Varun Padavala</span></p><a className="transition hover:text-violet-200" href="mailto:padavalavarun@gmail.com">padavalavarun@gmail.com</a></div>
          <div className="flex gap-4 text-xs text-slate-500"><a className="hover:text-white" href="#features">Features</a><a className="hover:text-white" href="#seed-modes">Seed modes</a><a className="hover:text-white" href="#download">Download</a></div>
        </div>
        <div className="mx-auto mt-6 w-[min(1160px,calc(100%-36px))] border-t border-white/[.06] pt-4 text-[10px] text-slate-600">© {new Date().getFullYear()} ShrimpCounter · Created by Varun Padavala</div>
      </footer>
    </div>
  )
}

export default App
