import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

function MatchScorecard() {
  return (
    <div>
      

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
              <ul className="space-y-2">
                {match.scorecard.map((event, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{event.player} ({event.team})</span>
                    <span>{event.time} - {event.type}</span>
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
                {match.commentary.map((comment, index) => (
                  <li key={index} className="border-b pb-2">
                    <span className="font-semibold">{comment.time}</span> {comment.text}
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

export default MatchScorecard