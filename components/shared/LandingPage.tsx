import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Users, Sparkles, ArrowRight, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-dark-3 text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}

      <header className="relative z-10 mx-auto max-w-7xl px-6 py-6 flex items-center justify-between border-b border-white/[0.06] backdrop-blur-sm">
        {/* <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent tracking-tight">
            nThreads
          </span>
        </Link> */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={28} height={28} />
          <p className="text-heading3-bold text-white max-xs:hidden">nThreads</p>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-neutral-400 hover:text-white transition"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/5 px-3 py-1 text-xs text-purple-300 backdrop-blur-md mb-8 animate-pulse">
          <Sparkles className="h-3.5 w-3.5 text-purple-400" />
          <span>Discover the next generation of social networking</span>
        </div> */}

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
          Where Conversations{" "}
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Unfold Naturally
          </span>
        </h1>

        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          nThreads is a modern community-driven space to share threads, engage in nested, deep conversations, follow interests, and build communities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/sign-up"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-500 px-8 py-4 font-bold text-white shadow-lg shadow-purple-500/25 transition duration-300"
          >
            Join the Conversation <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/sign-in"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm px-8 py-4 font-bold text-neutral-300 hover:text-white hover:bg-neutral-800 transition duration-300"
          >
            Explore App Feed
          </Link>
        </div>

        {/* Mockup Preview */}
        <div className="relative mx-auto max-w-4xl border border-white/[0.08] bg-neutral-900/40 rounded-2xl p-2 shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none rounded-2xl" />
          <div className="border border-white/[0.05] bg-black/80 rounded-xl p-4 sm:p-6 text-left">
            {/* Mock Thread Header */}
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-sm text-white">
                  JD
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Jane Doe</h3>
                  <p className="text-xs text-neutral-500">@janedoe · 2h ago</p>
                </div>
              </div>
              <span className="text-xs text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                🚀 Tech Community
              </span>
            </div>

            {/* Mock Thread Content */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">
              Just tested the new nThreads nested commenting structure! It feels incredibly fast and responsive. Building deep Reddit-style conversations on Next.js 15 Server Actions is clean. What is your favorite Next.js feature? Let me know below! 👇
            </p>

            {/* Mock Thread Actions */}
            <div className="flex items-center gap-6 text-neutral-500 text-xs">
              <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition">
                <MessageSquare className="h-4 w-4" /> 14 Replies
              </span>
              <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition">
                <Users className="h-4 w-4" /> 84 Likes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 border-t border-white/[0.05] bg-neutral-950/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Expect, Crafted Better</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Discover the key components that power nThreads' fast and secure messaging experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/[0.05] bg-neutral-900/30 rounded-2xl p-6 hover:border-purple-500/30 transition duration-300">
              <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Nested Conversations</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Dive deep into threads with cleanly structured, threaded nested comment flows. Keep discussion threads intuitive and focused.
              </p>
            </div>

            <div className="border border-white/[0.05] bg-neutral-900/30 rounded-2xl p-6 hover:border-purple-500/30 transition duration-300">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Communities & Spaces</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Create or join targeted spaces based on your interests. Appoint moderators, control visibility, and invite like-minded peers.
              </p>
            </div>

            <div className="border border-white/[0.05] bg-neutral-900/30 rounded-2xl p-6 hover:border-purple-500/30 transition duration-300">
              <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Media Uploads</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Express yourself fully using images and media. Powered by UploadThing for high-fidelity uploads and optimized user media cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Reliability Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto border border-white/[0.05] bg-neutral-900/20 backdrop-blur-md rounded-3xl p-8 sm:p-12">
          <div className="inline-flex h-12 w-12 bg-neutral-800 rounded-2xl items-center justify-center text-white border border-neutral-700 mb-6">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Secure Authentication by Clerk</h3>
          <p className="text-sm sm:text-base text-neutral-400 mb-8 leading-relaxed">
            Your account security is our top priority. By leveraging Clerk's modern authentication framework, we support secure passwordless emails, multi-factor security checks, and seamless social sign-on.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-neutral-500 uppercase tracking-widest">
            <span>🛡️ MFA Enabled</span>
            <span className="hidden sm:inline text-neutral-800">•</span>
            <span>🔑 Passwordless Login</span>
            <span className="hidden sm:inline text-neutral-800">•</span>
            <span>🔒 TLS Encrypted</span>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] py-12 bg-black">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} nThreads Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <Link href="/sign-in" className="hover:text-white transition">Sign In</Link>
            <Link href="/sign-up" className="hover:text-white transition">Sign Up</Link>
            <Link href="/" className="hover:text-white transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
