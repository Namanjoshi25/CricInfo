"use client"

import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { fetchMatchCommentry, fetchMatchDetails } from "@/lib/actions/cricData.actions"
import MatchScorecard from "@/components/app-scorecard-id-page"



export default function Page({ params }: { params: { id: string } }) {
  const [matchScorecard, setMatchScorecard] = useState([]);
  const [matchDetails     , setMatchDetails     ] = useState({});
  const [commentary,setCommentary]=useState([])
   // State to track which innings is currently shown
   const [expandedInningsIndex, setExpandedInningsIndex] = useState(
    matchScorecard.length - 1 // Default to the last innings
  );

  // Function to handle showing a selected innings
  const showInnings = (index : number) => {
    setExpandedInningsIndex(index);
  };
  useEffect(()=>{
    async function getMatchDetails(){
         const res = await fetchMatchDetails(params.id)
         const commRes = await fetchMatchCommentry(params.id)
         setCommentary(commRes.commentaryList)
        setMatchScorecard(res.scoreCard)
        setMatchDetails(res.matchHeader)
        setExpandedInningsIndex(matchScorecard.length -1 )
    }
    getMatchDetails()

  },[])

console.log(expandedInningsIndex);

  return (
    <div className="space-y-8">
     <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {matchDetails?.team1?.name} vs {matchDetails?.team2?.name}
          </CardTitle>
          <div className="flex justify-between items-center mt-2">
            <span className="text-neutral-500 dark:text-neutral-400">{matchDetails?.seriesName}</span>
            <Badge variant={matchDetails?.state === "In Progress" ? "destructive" : "secondary"}>{matchDetails?.state}</Badge>
          </div>
          <p>{matchDetails?.status}</p>
        </CardHeader>
        <CardContent>
       
        </CardContent>
      </Card> 
      <Tabs defaultValue="scorecard">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="commentary">Commentary</TabsTrigger>
        </TabsList>
        <TabsContent value="scorecard">
          <Card>
            <CardHeader>
              <CardTitle>Scorecard</CardTitle>
            </CardHeader>
            <CardContent>
            <ul>
            {matchScorecard.map((event, index) => (
        <li key={index} className="mb-4">
          <div className="flex justify-between gap-2 items-center p-1 bg-slate-200 border-2">
            <h3>Innings {event.inningsId}</h3>
            {/* Show the expand button for all innings */}
            <button
              onClick={() => showInnings(index)}
              className={`    py-1 rounded ${
                expandedInningsIndex === index ? "hidden" : ""
              }`}
            >
              Expand
            </button>
          </div>

          {/* Only display details if the current innings matches the state */}
          {expandedInningsIndex === index && (
            <table border="1" style={{ width: "100%", textAlign: "left" }}>
              <thead>
                <tr>
                  <th>Batsman Name</th>
                  <th>Runs</th>
                  <th>Dots</th>
                  <th>Sixes</th>
                  <th>Fours</th>
                  <th>Out Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(event.batTeamDetails.batsmenData).map(
                  (batsman) => (
                    <tr key={batsman.batId}>
                      <td>{batsman.batName}</td>
                      <td>{batsman.runs}</td>
                      <td>{batsman.dots}</td>
                      <td>{batsman.sixers}</td>
                      <td>{batsman.fours}</td>
                      <td>{batsman.outDesc}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </li>
      ))}
    </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="commentary">
          <Card>
            <CardHeader>
              <CardTitle>Commentary</CardTitle>
            </CardHeader>
            <CardContent>
            <ul className="space-y-2">
  {commentary.map((comment, index) => (
    <li key={index} className="border-b pb-2">
        {comment?.overSeparator && (
        <div className="over-separator flex items-center p-4 bg-gray-100 border rounded my-4">
          {/* Over Number */}
          <div className="over-number text-xl font-bold pr-4 border-r border-gray-300">
            {comment.overSeparator.overNum}
          </div>

          {/* Runs Scored and Over Summary */}
          <div className="over-summary flex-grow px-4 border-r border-gray-300">
            <p className="text-sm">
              <strong>Runs Scored: </strong>
              <span className="font-bold">{comment.overSeparator.runs}</span>
            </p>
            <p className="text-sm">{comment.overSeparator.o_summary}</p>
          </div>

          {/* Team Score */}
          <div className="team-score flex-grow px-4 border-r border-gray-300">
            <p className="text-sm">
              <strong>Score after {comment.overSeparator.overNum} overs: </strong>
              <span className="font-bold">{comment.overSeparator.batTeamName} {comment.overSeparator.score}-{comment.overSeparator.wickets}</span>
            </p>
          </div>

          {/* Batsman Information */}
          <div className="batsman-info flex-grow px-4 border-r border-gray-300">
            <p className="text-sm">
              {comment.overSeparator.batStrikerNames[0]} - {comment.overSeparator.batStrikerRuns} ({comment.overSeparator.batStrikerBalls})
            </p>
            <p className="text-sm">
              {comment.overSeparator.batNonStrikerNames[0]} - {comment.overSeparator.batNonStrikerRuns} ({comment.overSeparator.batNonStrikerBalls})
            </p>
          </div>

          {/* Bowler Information */}
          <div className="bowler-info flex-grow px-4">
            <p className="text-sm">
              {comment.overSeparator.bowlNames[0]} - {comment.overSeparator.bowlWickets} wickets, {comment.overSeparator.bowlRuns} runs ({comment.overSeparator.bowlOvers} overs, {comment.overSeparator.bowlMaidens} maidens)
            </p>
          </div>
        </div>
      )}
      
      <span className="font-semibold">
        {comment?.overNumber}
      </span>
   {/* Commentary Text */}
   <span>{ comment.commText === "B0$" ? <span className=" font-semibold">Over Complete</span> :comment.commText}</span>
      {/* Over Separator: Display if exists */}
    

   
    </li>
  ))}
</ul>

            </CardContent>
          </Card>
        </TabsContent>
      </Tabs> 

    </div>
  )
}