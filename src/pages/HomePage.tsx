import React from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  Layers3,
  Sparkles,
  Zap,
  MessageCircleQuestion,
   PanelsTopLeft,
} from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {

  const navigate = useNavigate() ;
  const components = [
    {
      name: "button",
      description: "Beautiful buttons with multiple variants and animations.",
      icon: "●",
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "card",
      description: "Flexible cards for modern dashboards and applications.",
      icon: "▣",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "modal",
      description: "Clean and responsive dialogs for your applications.",
      icon: "□",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "input",
      description: "Simple and elegant form inputs with useful states.",
      icon: "⌨",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "navbar",
      description: "Responsive navigation bars for modern websites.",
      icon: "☰",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "carousel",
      description: "Smooth and responsive slideshows with navigation.",
      icon: "◀",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "tooltip",
      description: "Smooth and responsive slideshows with navigation.",
      icon: "▣",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "layout",
      description: "Smooth and responsive slideshows with navigation.",
      icon:  "□",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#08090d] text-white">

   

      <main>

        <section className="relative px-5 pb-24 pt-36">

          {/* Background Glow */}

          <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[130px]" />

          <div className="pointer-events-none absolute right-0 top-80 -z-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />


          <div className="relative mx-auto max-w-5xl text-center">

            {/* Badge */}

            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">

              <Sparkles size={15} />

              <span>
                Modern React Component Library
              </span>

              <ArrowRight size={14} />

            </div>


            {/* Heading */}

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">

              Build beautiful

              <br />

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                interfaces faster.
              </span>

            </h1>


            {/* Description */}

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">

              A collection of beautiful, reusable and customizable
              React components built with TypeScript and Tailwind CSS.

            </p>


            {/* CTA */}

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <button
              onClick={() => {navigate("/components")}}
              className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-100">

                Explore Components

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </button>


              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10">

                <Code2 size={18} />

                View Documentation

              </button>

            </div>


            {/* Code Preview */}

            <div className="mx-auto mt-16 max-w-4xl text-left">

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e1017] shadow-2xl shadow-indigo-950/40">

                {/* Window Header */}

                <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">

                  <div className="flex gap-2">

                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">

                    <Code2 size={14} />

                    Button.tsx

                  </div>

                  <Copy
                    size={16}
                    className="text-gray-500"
                  />

                </div>


                {/* Code */}

                <div className="overflow-x-auto p-6 sm:p-8">

                  <pre className="text-sm leading-7 text-gray-300">

                    <code>

{`import { Button } from "@/components";

export default function App() {
  return (
    <Button
      variant="primary"
      size="lg"
    >
      Get Started
    </Button>
  );
}`}

                    </code>

                  </pre>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}

        <section className="border-y border-white/10 bg-white/[0.02]">

          <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">

            {[
              ["8+", "Components"],
              ["100%", "TypeScript"],
              ["Tailwind", "Powered"],
              ["MIT", "License"],
            ].map(([number, label]) => (

              <div
                key={label}
                className="px-4 py-8 text-center"
              >

                <div className="text-xl font-bold">
                  {number}
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  {label}
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= COMPONENTS ================= */}

        <section
          id="components"
          className="px-5 py-24"
        >

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

              <div>

                <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                  Components
                </div>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Everything you need
                </h2>

                <p className="mt-3 max-w-xl text-gray-400">
                  Ready-to-use components designed to help you
                  build modern interfaces without starting from scratch.
                </p>

              </div>


              <button
              onClick={() => {navigate('/components')}}
              className="flex w-fit items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300">

                View all components

                <ArrowRight size={16} />

              </button>

            </div>


            {/* Component Grid */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {components.map((component) => (

                <div
                onClick={() => {navigate(`/components/${component.name}`)}}
                  key={component.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                >

                  {/* Gradient */}

                  <div
                    className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${component.color} opacity-10 blur-2xl transition group-hover:opacity-20`}
                  />


                  {/* Icon */}

                  <div
                    className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${component.color} text-lg font-bold`}
                  >
                    {component.icon}
                  </div>


                  <h3 className="text-lg font-bold">
                    {component.name}
                  </h3>


                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {component.description}
                  </p>


                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-400 transition group-hover:text-white">

                    Explore

                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section
          id="features"
          className="border-y border-white/10 bg-white/[0.02] px-5 py-24"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">

              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                Why Ease UI
              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">
                Designed for developers
              </h2>

              <p className="mt-4 text-gray-400">
                Everything is built with simplicity, flexibility
                and developer experience in mind.
              </p>

            </div>


            <div className="mt-14 grid gap-5 md:grid-cols-3">

              {/* Feature 1 */}

              <div className="rounded-2xl border border-white/10 bg-[#0d0f15] p-7">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">

                  <Zap size={23} />

                </div>

                <h3 className="text-lg font-bold">
                  Fast to build
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Copy, customize and ship beautiful UI without
                  wasting time building everything from scratch.
                </p>

              </div>


              {/* Feature 2 */}

              <div className="rounded-2xl border border-white/10 bg-[#0d0f15] p-7">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">

                  <Layers3 size={23} />

                </div>

                <h3 className="text-lg font-bold">
                  Fully customizable
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Every component is designed to be easily
                  customized according to your project.
                </p>

              </div>


              {/* Feature 3 */}

              <div className="rounded-2xl border border-white/10 bg-[#0d0f15] p-7">

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">

                  <Code2 size={23} />

                </div>

                <h3 className="text-lg font-bold">
                  Developer friendly
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Written in TypeScript with clean APIs and
                  documentation that is easy to understand.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section
          id="docs"
          className="px-5 py-24"
        >

          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent p-10 text-center sm:p-16">

            {/* Glow */}

            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[80px]" />


            <div className="relative">

              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">

                <Sparkles size={26} />

              </div>


              <h2 className="text-3xl font-bold sm:text-4xl">
                Start building with Ease UI
              </h2>


              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Explore the components, copy the code and start
                creating beautiful interfaces today.
              </p>


              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-100">

                Explore Documentation

                <ArrowRight size={17} />

              </button>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 px-5 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">

              <Sparkles size={15} />

            </div>

            <span className="font-semibold">
              EaseUI
            </span>

          </div>


          <p className="text-sm text-gray-500">
           @SAURABH KUMAR 
          </p>


          <div className="flex items-center gap-2 text-sm text-gray-500">

            <Check size={15} />

            Open source

          </div>

        </div>

      </footer>

    </div>
  );
};

export default HomePage;