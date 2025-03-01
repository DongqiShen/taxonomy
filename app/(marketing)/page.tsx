import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/shadcn/taxonomy",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Xpop for Mac
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Xpop is an open-source and free tool that instantly provides useful actions when you select text in any app.
          </p>
          <div className="space-x-4">
            <Link href="https://github.com/DongqiShen/Xpop/releases/download/v0.0.1-beta/Xpop.dmg" className={cn(buttonVariants({ size: "lg" }))}>
              Download
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Built in Swift, Xpop is a free, open-source MacOS app designed for simplicity and extensibility, featuring plugins, and AI functionality.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                  <path d="M18.88 1.099Q17.78-.001 16.233 0H3.746Q2.198 0 1.099 1.099Q-.001 2.199 0 3.746v12.487q0 1.548 1.099 2.647q1.1 1.1 2.647 1.099H6.66q.285 0 .429-.02a.5.5 0 0 0 .286-.169q.143-.15.143-.435l-.007-.885q-.006-.846-.006-1.34l-.3.052q-.285.052-.721.046a5.6 5.6 0 0 1-.904-.091a2 2 0 0 1-.872-.39a1.65 1.65 0 0 1-.572-.8l-.13-.3a3.3 3.3 0 0 0-.41-.663q-.28-.364-.566-.494l-.09-.065a1 1 0 0 1-.17-.156a.7.7 0 0 1-.117-.182q-.039-.092.065-.15q.104-.06.378-.059l.26.04q.26.051.643.311a2.1 2.1 0 0 1 .631.677q.3.532.722.813q.423.28.852.28t.742-.065a2.6 2.6 0 0 0 .585-.196q.117-.871.637-1.34a9 9 0 0 1-1.333-.234a5.3 5.3 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872q-.416-.52-.683-1.365q-.266-.846-.266-1.952q0-1.573 1.027-2.68q-.48-1.183.091-2.652q.378-.118 1.119.175t1.086.5q.345.21.553.352a9.2 9.2 0 0 1 2.497-.338q1.288 0 2.498.338l.494-.312a7 7 0 0 1 1.197-.572q.689-.26 1.054-.143q.585 1.47.103 2.653q1.028 1.105 1.028 2.68q0 1.106-.267 1.957q-.266.852-.689 1.366a3.7 3.7 0 0 1-1.053.865q-.63.351-1.223.507a9 9 0 0 1-1.333.235q.675.585.676 1.846v3.11q0 .22.065.357a.36.36 0 0 0 .208.189q.143.052.254.064q.111.014.318.013h2.914q1.548 0 2.647-1.099t1.099-2.647V3.746q0-1.548-1.1-2.647z"/>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Open-Source</h3>
                <p className="text-sm text-muted-foreground">
                  Free, Open-source, Collaborative, Customizable.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M11 1a3 3 0 0 0-3 3H2v6a3 3 0 1 1 0 6v6h6a3 3 0 1 1 6 0h6v-6a3 3 0 1 0 0-6V4h-6a3 3 0 0 0-3-3"/>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Extensibility</h3>
                <p className="text-sm text-muted-foreground">
                  Extension system, partially compatible with PopClip extensions.<sup><a href="#footnote-1" id="ref-1">1</a></sup>
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
               <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"/>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">AI Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Built-In AI: Translating, Writing, Grammar, Beyond.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="mx-auto max-w-4xl text-center">
          <p id="footnote-1" className="text-sm text-gray-600">
            <sup className="text-xs text-gray-500">1</sup> 
            PopClip is an exceptional product with powerful and well-developed plugin functionality. 
            I will strive to ensure compatibility with more of its plugins in the future. Stay tuned! 
            <a href="#ref-1" className="text-blue-500 hover:text-blue-700"></a>
          </p>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Xpop is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
          {stars && (
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex"
            >
              <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-foreground"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent"></div>
                <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                  {stars} stars on GitHub
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
