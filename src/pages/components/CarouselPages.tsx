import Carousel from '@/components/carosel/Carousel';
import React, { useState } from 'react'

type Props = {}

const CarouselPages = (props: Props) => {

  const [showCode, setShowCode] = useState(false);

  const [copied, setCopied] = useState(false);

  const code = `import Carousel from "@/components/carousel/Carousel";

<Carousel
  autoPlay
  interval={3000}
  showArrows
  showDots
>
  <div className="h-80 bg-indigo-600">
    Slide 1
  </div>

  <div className="h-80 bg-purple-600">
    Slide 2
  </div>

  <div className="h-80 bg-pink-600">
    Slide 3
  </div>
</Carousel>`;

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
     <div className="min-h-screen bg-white text-slate-900">

   


      <div className="flex">



        <main className="w-full max-w-6xl px-6 py-12 md:px-12">

          <h1 className="text-4xl font-bold">
            Carousel
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            A responsive slideshow component for displaying
            multiple pieces of content.
          </p>


          {/* Usage */}

          <section className="mt-12">

            <h2 className="text-2xl font-bold">
              Usage
            </h2>

            <p className="mt-2 text-gray-600">
              Navigate between slides using arrows or dots.
            </p>


            <div className="mt-6 overflow-hidden rounded-xl border">

              {/* Preview Header */}

              <div className="flex items-center justify-between border-b px-5 py-3">

                <span className="font-semibold">
                  Preview
                </span>

                <button
                  onClick={() => setShowCode(!showCode)}
                  className="rounded-lg bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
                >
                  {showCode ? "Hide Code" : "View Code"}
                </button>

              </div>


              {/* Carousel */}

              <div className="bg-slate-100 p-8">

                <Carousel
                  autoPlay
                  interval={4000}
                >

                  <div className="flex h-80 items-center justify-center bg-indigo-600 text-4xl font-bold text-white">
                    Slide 1
                  </div>

                  <div className="flex h-80 items-center justify-center bg-purple-600 text-4xl font-bold text-white">
                    Slide 2
                  </div>

                  <div className="flex h-80 items-center justify-center bg-pink-600 text-4xl font-bold text-white">
                    Slide 3
                  </div>

                </Carousel>

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

                  <pre className="overflow-x-auto bg-slate-950 p-6 text-sm leading-7 text-slate-200">
                    <code>{code}</code>
                  </pre>

                </div>

              )}

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
                      autoPlay
                    </td>

                    <td className="px-5 py-4 font-mono">
                      boolean
                    </td>

                    <td className="px-5 py-4">
                      false
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Automatically changes slides.
                    </td>
                  </tr>


                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      interval
                    </td>

                    <td className="px-5 py-4 font-mono">
                      number
                    </td>

                    <td className="px-5 py-4">
                      3000
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Time between slides in milliseconds.
                    </td>
                  </tr>


                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      showArrows
                    </td>

                    <td className="px-5 py-4 font-mono">
                      boolean
                    </td>

                    <td className="px-5 py-4">
                      true
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Shows previous and next buttons.
                    </td>
                  </tr>


                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      showDots
                    </td>

                    <td className="px-5 py-4 font-mono">
                      boolean
                    </td>

                    <td className="px-5 py-4">
                      true
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Shows slide indicators.
                    </td>
                  </tr>


                  <tr className="border-t">
                    <td className="px-5 py-4 font-mono text-indigo-600">
                      loop
                    </td>

                    <td className="px-5 py-4 font-mono">
                      boolean
                    </td>

                    <td className="px-5 py-4">
                      true
                    </td>

                    <td className="px-5 py-4 text-gray-600">
                      Enables infinite looping.
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

export default CarouselPages;