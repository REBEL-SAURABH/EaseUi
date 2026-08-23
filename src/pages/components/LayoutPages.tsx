import React, { useState } from 'react'



const LayoutPages = () => {

  const [showCode, setShowCode] = useState(false);

  const [copied, setCopied] = useState(false);

  const code = `import Layout from "@/components/Layout/Layout";

<Layout
  sidebar={<Sidebar />}
  header={<Header />}
  centered
>
  <h1>Dashboard</h1>
</Layout>`;

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
   <div className="min-h-screen bg-white text-slate-900">

     

      <div className="flex">

   

        <main className="w-full max-w-6xl px-6 py-12 md:px-12">

          <h1 className="text-4xl font-bold">
            Layout
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            A flexible page structure for building consistent
            application layouts.
          </p>


          {/* Usage */}

          <section className="mt-12">

            <h2 className="text-2xl font-bold">
              Usage
            </h2>

            <div className="mt-6 overflow-hidden rounded-xl border">

              <div className="flex items-center justify-between border-b px-5 py-3">

                <span className="font-semibold">
                  Preview
                </span>

                <button
                  onClick={() => setShowCode(!showCode)}
                  className="rounded-lg bg-gray-100 px-3 py-2 text-sm"
                >
                  {showCode ? "Hide Code" : "View Code"}
                </button>

              </div>


              {/* Preview */}

              <div className="bg-slate-100 p-8">

                <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

                  {/* Fake Header */}

                  <div className="flex h-14 items-center justify-between border-b px-5">

                    <span className="font-bold">
                      Dashboard
                    </span>

                    <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
                      Profile
                    </button>

                  </div>


                  <div className="flex min-h-[350px]">

                    {/* Fake Sidebar */}

                    <div className="hidden w-48 border-r bg-gray-50 p-4 sm:block">

                      <div className="space-y-2">

                        <div className="rounded-lg bg-indigo-100 px-3 py-2 text-sm text-indigo-600">
                          Dashboard
                        </div>

                        <div className="rounded-lg px-3 py-2 text-sm text-gray-500">
                          Analytics
                        </div>

                        <div className="rounded-lg px-3 py-2 text-sm text-gray-500">
                          Settings
                        </div>

                      </div>

                    </div>


                    {/* Content */}

                    <div className="flex flex-1 items-center justify-center p-8">

                      <div className="text-center">

                        <h3 className="text-2xl font-bold">
                          Main Content
                        </h3>

                        <p className="mt-2 text-gray-500">
                          Your page content goes here.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Code */}

              {showCode && (

                <div className="border-t">

                  <div className="flex items-center justify-between bg-slate-900 px-5 py-3 text-sm text-white">

                    <span>TSX</span>

                    <button
                      onClick={copyCode}
                      className="rounded-md bg-slate-800 px-3 py-1.5 hover:bg-slate-700"
                    >
                      {copied ? "✓ Copied" : "Copy"}
                    </button>

                  </div>

                  <pre className="overflow-x-auto bg-slate-950 p-6 text-sm text-slate-200">
                    <code>{code}</code>
                  </pre>

                </div>

              )}

            </div>

          </section>


          {/* Features */}

          <section className="mt-16">

            <h2 className="text-2xl font-bold">
              Features
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                ["Responsive", "Works across desktop, tablet and mobile."],
                ["Sidebar", "Optional sidebar navigation."],
                ["Header", "Optional application header."],
                ["Centered", "Supports centered content containers."],
                ["Flexible", "Use any React content inside."],
                ["Reusable", "Designed for application-wide layouts."],
              ].map(([title, description]) => (

                <div
                  key={title}
                  className="rounded-xl border p-5 transition hover:-translate-y-1 hover:shadow-md"
                >

                  <h3 className="font-semibold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {description}
                  </p>

                </div>

              ))}

            </div>

          </section>


          {/* API */}

          <section className="mt-16">

            <h2 className="text-2xl font-bold">
              API Reference
            </h2>

            <div className="mt-6 overflow-x-auto rounded-xl border">

              <table className="w-full min-w-[700px] text-left">

                <thead className="bg-gray-50">

                  <tr>
                    <th className="px-5 py-4">Prop</th>
                    <th className="px-5 py-4">Type</th>
                    <th className="px-5 py-4">Default</th>
                    <th className="px-5 py-4">Description</th>
                  </tr>

                </thead>

                <tbody>

                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      sidebar
                    </td>

                    <td className="px-5 py-4 font-mono">
                      ReactNode
                    </td>

                    <td className="px-5 py-4">
                      -
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Optional sidebar content.
                    </td>
                  </tr>


                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      header
                    </td>

                    <td className="px-5 py-4 font-mono">
                      ReactNode
                    </td>

                    <td className="px-5 py-4">
                      -
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Optional header content.
                    </td>
                  </tr>


                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      sidebarWidth
                    </td>

                    <td className="px-5 py-4 font-mono">
                      sm | md | lg
                    </td>

                    <td className="px-5 py-4">
                      md
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Controls sidebar width.
                    </td>
                  </tr>


                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      centered
                    </td>

                    <td className="px-5 py-4 font-mono">
                      boolean
                    </td>

                    <td className="px-5 py-4">
                      false
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Centers the main content.
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </section>

        </main>

      </div>

    </div>
  )
}


export default LayoutPages