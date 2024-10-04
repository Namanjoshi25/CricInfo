"use client"

import{ LiveScoresComponent} from "@/components/app-components-live-scores"
import {NewsFeedComponent }from "@/components/app-components-news-feed"

export function Page() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-neutral-900 text-neutral-50 rounded-lg dark:bg-neutral-50 dark:text-neutral-900">
        <h1 className="text-4xl font-bold mb-4">Welcome to SportScore</h1>
        <p className="text-xl">Your one-stop destination for live sports scores and breaking news</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LiveScoresComponent />
        <NewsFeedComponent />
      </div>
    </div>
  )
}