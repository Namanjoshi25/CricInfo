

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import axios from "axios"
import { fetchLiveMatches } from "@/lib/actions/cricData.actions"
import LiveCard from "./app-components-live-card"

type Score = {
  id: number
  homeTeam: string
  awayTeam: string
  homeScore: number
  awayScore: number
  status: string
  league: string
}
export type MatchType = "International" | "Domestic" | "Women";


export function LiveScoresComponent() {
  const [liveMatches, setLiveMatches] = useState([]);
  const[matchType ,setMatchType] = useState<MatchType>("International")
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchRecentMatches = async () => {
      const liveData = await fetchLiveMatches();
      if (liveData) {
        // First, filter the data for the required matchType
        const filterMatchData = liveData.filter((match) => match.matchType === matchType);
        
        // Now, we extract the seriesMatches array from the filtered data and filter it further
        const seriesMatches = filterMatchData.flatMap(item => item.seriesMatches);
    
        // Filter out anything that does not have the seriesAdWrapper
        const filteredSeriesMatches = seriesMatches.filter(item => 'seriesAdWrapper' in item);
        
        // Set the state with the filtered data
        setLiveMatches(filteredSeriesMatches);
      }
    };
  
    fetchRecentMatches();
  }, [matchType]); 

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Scores</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
         {liveMatches.map((score,id) => (
          <LiveCard key={id} matchDetails={score} />
        
          ))} 
        </ul>
      </CardContent>
    </Card>
  )
}