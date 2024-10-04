

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fetchNews } from "@/lib/actions/cricData.actions"

type NewsItem = {
  id: number
  title: string
  summary: string
  date: string
  category: string
}

export function NewsFeedComponent() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    // In a real application, you would fetch news from an API here
    const fetchRecentNews = async () => {
      const liveData = await fetchNews();
      
    if (liveData) {
    
        
        
        // Now, we extract the seriesNews array from the filtered data and filter it further
      
    
        // Filter out anything that does not have the seriesAdWrapper
        const filteredSeriesNews = liveData.filter(item => 'story' in item); 
        
        // Set the state with the filtered data
        setNews(filteredSeriesNews);
      } 
    };
  
    fetchRecentNews();
  }, [])


  return (
    <Card>
      <CardHeader>
        <CardTitle>Latest Cricket Headlines</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 h-full overflow-y-auto">
          {news?.map(item => (
            <li key={item.id} className="border-b pb-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{item.story.hline}</h3>
                <Badge>{item.story.context}</Badge>
              </div>
              <p className="text-sm text-neutral-500 mb-1 dark:text-neutral-400">{item.story.intro}</p>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.story.pubtime}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}