import Tooltips from "@/components/Tooltip/Tooltips";
import React, { useState } from "react";


const TooltipPage = () => {

  const [copied, setcopied] = useState(false)

  const [showCode, setShowCode] = useState(false);

  const code = `import Tooltip from "@/components/Tooltip/Tooltips";

<Tooltip
  content="This is a tooltip"
  position="top"
>
  <button>
    Hover Me
  </button>
</Tooltip>`;

  const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(code);

    setcopied(true);

    setTimeout(() => {
      setcopied(false);
    }, 5000);

  } catch (error) {
    console.error("Failed to copy:", error);
  }
};

  return (
    <div className="min-h-screen bg-white text-slate-900">

  


      <div className="flex">



        <main className="w-full max-w-6xl px-6 py-12 md:px-10">

      

          <div className="max-w-3xl">

         

            <h1 className="text-4xl font-bold tracking-tight">
              Tooltip
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Displays a small piece of information when the user
              hovers over an element.
            </p>

          </div>


          {/* Usage */}

          <section className="mt-12">

            <h2 className="text-2xl font-bold">
              Usage
            </h2>

            <p className="mt-2 text-gray-600">
              Hover over the buttons to see the tooltip.
            </p>


            {/* Preview Card */}

            <div className="mt-6 overflow-hidden rounded-xl border shadow-sm">

              {/* Header */}

              <div className="flex items-center justify-between border-b bg-white px-5 py-3">

                <span className="font-semibold">
                  Preview
                </span>

                <button
                  onClick={() => setShowCode(!showCode)}
                  className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                >
                  {showCode ? "Hide Code" : "View Code"}
                </button>

              </div>


              {/* Preview */}

              <div className="flex min-h-[320px] flex-wrap items-center justify-center gap-16 bg-slate-100 p-10">

                <Tooltips
                  content="Tooltip on top"
                  position="top"
                >
                  <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:bg-indigo-700">
                    Top
                  </button>
                </Tooltips>


                <Tooltips
                  content="Tooltip on bottom"
                  position="bottom"
                >
                  <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:bg-indigo-700">
                    Bottom
                  </button>
                </Tooltips>


                <Tooltips
                  content="Tooltip on left"
                  position="left"
                >
                  <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:bg-indigo-700">
                    Left
                  </button>
                </Tooltips>


                <Tooltips
                  content="Tooltip on right"
                  position="right"
                >
    <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-1 hover:bg-indigo-700">
                    Right
                  </button>
    </Tooltips>

              </div>


              {/* Code */}

              {showCode && (

                <div className="border-t">

    <div className="flex items-center justify-between bg-slate-900 px-5 py-3 text-sm text-white">

    <span>
       TSX
       </span>

              <button
       onClick={copyCode}
    className="rounded-md bg-slate-800 px-3 py-1.5 hover:bg-slate-700"
        >
       {copied ? "✓ Copied" : "Copy"}
   </button>

                  </div>

                  <pre className="overflow-x-auto bg-slate-950 p-6 text-sm leading-7 text-slate-200">
                    <code>{code}</code>
                  </pre>

                </div>

              )}

            </div>

          </section>


          <section className="mt-16">

            <h2 className="text-2xl font-bold">
              Variants
            </h2>

            <p className="mt-2 text-gray-600">
              Choose between different visual styles.
            </p>


            <div className="mt-6 flex flex-wrap items-center gap-10 rounded-xl border bg-slate-100 p-12">

              <Tooltips
                content="Dark tooltip"
                variant="dark"
              >
                <button className="rounded-lg bg-slate-900 px-5 py-3 text-white">
                  Dark
                </button>
              </Tooltips>


              <Tooltips
                content="Light tooltip"
                variant="light"
              >
                <button className="rounded-lg border bg-white px-5 py-3">
                  Light
                </button>
              </Tooltips>


              <Tooltips
                content="Primary tooltip"
                variant="primary"
              >
                <button className="rounded-lg bg-indigo-600 px-5 py-3 text-white">
                  Primary
                </button>
              </Tooltips>

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

                    <th className="px-5 py-4">
                      Prop
                    </th>

                    <th className="px-5 py-4">
                      Type
                    </th>

                    <th className="px-5 py-4">
                      Default
                    </th>

                    <th className="px-5 py-4">
                      Description
                    </th>

                  </tr>

                </thead>


                <tbody>

                  <tr className="border-t">

                    <td className="px-5 py-4 font-mono text-indigo-600">
                      content
                    </td>

                    <td className="px-5 py-4 font-mono">
                      ReactNode
                    </td>

                    <td className="px-5 py-4">
                      -
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Content displayed inside the tooltip.
                    </td>

                  </tr>


                  <tr className="border-t">

                    <td className="px-5 py-4 font-mono text-indigo-600">
                      position
                    </td>

                    <td className="px-5 py-4 font-mono">
                      top | bottom | left | right
                    </td>

                    <td className="px-5 py-4 font-mono">
                      top
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Controls tooltip placement.
                    </td>

                  </tr>


                  <tr className="border-t">

                    <td className="px-5 py-4 font-mono text-indigo-600">
                      variant
                    </td>

                    <td className="px-5 py-4 font-mono">
                      dark | light | primary
                    </td>

                    <td className="px-5 py-4 font-mono">
                      dark
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Changes the visual style.
                    </td>

                  </tr>


                  <tr className="border-t">

                    <td className="px-5 py-4 font-mono text-indigo-600">
                      delay
                    </td>

                    <td className="px-5 py-4 font-mono">
                      number
                    </td>

                    <td className="px-5 py-4 font-mono">
                      150
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Controls hover delay in milliseconds.
                    </td>

                  </tr>


                  <tr className="border-t">

                    <td className="px-5 py-4 font-mono text-indigo-600">
                      disabled
                    </td>

                    <td className="px-5 py-4 font-mono">
                      boolean
                    </td>

                    <td className="px-5 py-4 font-mono">
                      false
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Disables the tooltip.
                    </td>

                  </tr>


                  <tr className="border-t">

                    <td className="px-5 py-4 font-mono text-indigo-600">
                      showArrow
                    </td>

                    <td className="px-5 py-4 font-mono">
                      boolean
                    </td>

                    <td className="px-5 py-4 font-mono">
                      true
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Shows or hides the tooltip arrow.
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </section>


          {/* Examples */}

          <section className="mt-16">

            <h2 className="text-2xl font-bold">
              Real World Example
            </h2>

            <div className="mt-6 flex flex-wrap justify-center gap-8 rounded-xl bg-slate-100 p-12">

              <Tooltips content="Home">

                <button className="rounded-xl bg-white p-4 text-2xl shadow-sm hover:shadow-md">
                  🏠
                </button>

              </Tooltips>


              <Tooltips content="Profile">

                <button className="rounded-xl bg-white p-4 text-2xl shadow-sm hover:shadow-md">
                  👤
                </button>

              </Tooltips>


              <Tooltips content="Messages">

                <button className="rounded-xl bg-white p-4 text-2xl shadow-sm hover:shadow-md">
                  💬
                </button>

              </Tooltips>


              <Tooltips content="Settings">

                <button className="rounded-xl bg-white p-4 text-2xl shadow-sm hover:shadow-md">
                  ⚙️
                </button>

              </Tooltips>


              <Tooltips content="Help">

                <button className="rounded-xl bg-white p-4 text-2xl shadow-sm hover:shadow-md">
                  ❓
                </button>

              </Tooltips>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
};

export default TooltipPage;