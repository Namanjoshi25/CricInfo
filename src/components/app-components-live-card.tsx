"use client"
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";

function LiveCard({ matchDetails }) {


  return (
    <div key={matchDetails.seriesAdWrapper.seriesId} className="border-b pb-2">

      <Link href={`/match/${matchDetails.seriesAdWrapper.matches[0].matchInfo.matchId}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">
          {matchDetails.seriesAdWrapper.seriesName}
        </span>
             <Badge variant={matchDetails.seriesAdWrapper.matches[0].matchInfo.state === "In Progress" ? "destructive" : "secondary"}>{matchDetails.seriesAdWrapper.matches[0].matchInfo.state}</Badge>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p className="font-medium">
            {matchDetails.seriesAdWrapper.matches[0].matchInfo.matchType}
          </p>
          <p className="font-medium">
            {matchDetails.seriesAdWrapper.matches[0].matchInfo.status}
          </p>
          <div className=" justify-between  flex gap-3">
            <p className="font-medium">
              {matchDetails.seriesAdWrapper.matches[0].matchInfo.team1.teamName}
            </p>
            <div className=" flex gap-2">
              <p className=" font-bold dark:text-neutral-400">
                {
                  matchDetails.seriesAdWrapper.matches[0].matchScore?.team1Score
                    ?.inngs1?.runs ?     matchDetails.seriesAdWrapper.matches[0].matchScore?.team1Score
                    ?.inngs1?.runs : 0
                }
                /
                {
                  matchDetails.seriesAdWrapper.matches[0].matchScore?.team1Score
                    ?.inngs1?.wickets ?  matchDetails.seriesAdWrapper.matches[0].matchScore?.team1Score
                    ?.inngs1?.wickets : 0
                }
              </p>
              {matchDetails.seriesAdWrapper.matches[0].matchScore?.team1Score
                ?.inngs2?.runs && (
                <p className=" font-bold dark:text-neutral-400">
                  {" "}
                  &{" "}
                  {
                    matchDetails.seriesAdWrapper.matches[0].matchScore
                      ?.team1Score?.inngs2?.runs ?     matchDetails.seriesAdWrapper.matches[0].matchScore
                      ?.team1Score?.inngs2?.runs : 0
                  }
                  /
                  {
                  matchDetails.seriesAdWrapper.matches[0].matchScore?.team1Score
                    ?.inngs2?.wickets ?  matchDetails.seriesAdWrapper.matches[0].matchScore?.team1Score
                    ?.inngs2?.wickets : 0
                }
                </p>
              )}{" "}
            </div>
          </div>
          <div className="  justify-between  flex gap-3">
            <p className="font-medium">
              {matchDetails.seriesAdWrapper.matches[0].matchInfo.team2.teamName}
            </p>
            <div className=" flex gap-2">
              <p className=" font-bold dark:text-neutral-400">
                {
                  matchDetails.seriesAdWrapper.matches[0].matchScore?.team2Score
                    ?.inngs1?.runs ? matchDetails.seriesAdWrapper.matches[0].matchScore?.team2Score
                    ?.inngs1?.runs : 0
                }
                /
                {
                  matchDetails.seriesAdWrapper.matches[0].matchScore?.team2Score
                    ?.inngs1?.wickets ?  matchDetails.seriesAdWrapper.matches[0].matchScore?.team2Score
                    ?.inngs1?.wickets : 0
                }
              </p>
              {matchDetails.seriesAdWrapper.matches[0].matchScore?.team2Score
                ?.inngs2?.runs && (
                <p className=" font-bold dark:text-neutral-400">
                  &{" "}
                  {
                    matchDetails.seriesAdWrapper.matches[0].matchScore
                      ?.team2Score?.inngs2?.runs ?  matchDetails.seriesAdWrapper.matches[0].matchScore
                      ?.team2Score?.inngs2?.runs :0
                  }
                  /
                  {
                  matchDetails.seriesAdWrapper.matches[0].matchScore?.team2Score
                    ?.inngs2?.wickets ?  matchDetails.seriesAdWrapper.matches[0].matchScore?.team2Score
                    ?.inngs2?.wickets : 0
                }
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold"></div>
      </div>
      </Link>
    </div>
  );
}

export default LiveCard;
