import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const leaderboardData = [
  {
    Name: "John Doe",
    LiveStatus: "Yes",
    CodingRanking: "1",
    TotalCodingScore: "100",
    MCQsRanking: "1",
    TotalMCQsScore: "100",
  },
  {
    Name: "John",
    LiveStatus: "No",
    CodingRanking: "2",
    TotalCodingScore: "100",
    MCQsRanking: "2",
    TotalMCQsScore: "100",
  },
  {
    Name: "John Doe",
    LiveStatus: "Yes",
    CodingRanking: "3",
    TotalCodingScore: "100",
    MCQsRanking: "3",
    TotalMCQsScore: "100",
  },
  {
    Name: "John",
    LiveStatus: "Yes",
    CodingRanking: "4",
    TotalCodingScore: "100",
    MCQsRanking: "4",
    TotalMCQsScore: "100",
  },
  {
    Name: "Matthew",
    LiveStatus: "Yes",
    CodingRanking: "5",
    TotalCodingScore: "100",
    MCQsRanking: "5",
    TotalMCQsScore: "100",
  },
];

const AvatarImg = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

function Leaderboard() {
  return (
    <>
      <div className="flex h-10 items-center justify-center sm:text-2xl text-xl sm:pb-2">
        {" "}
        Leaderboard
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead>Avatar</TableHead> */}
            <TableHead>Name</TableHead>
            {/* <TableHead>Live Status</TableHead> */}
            <TableHead>Coding Ranking</TableHead>
            <TableHead>Total Coding Score</TableHead>
            <TableHead>MCQs Ranking</TableHead>
            <TableHead className="text-right">Total MCQs Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((invoice) => (
            <TableRow key={invoice.Name + invoice.CodingRanking}>
              {/* <TableCell>
                
              </TableCell> */}
              <TableCell className="flex gap-3 items-center text-base">
                <AvatarImg />
                {invoice.Name}
              </TableCell>
              {/* <TableCell className="font-medium">
                {invoice.LiveStatus}
              </TableCell> */}
              <TableCell>{invoice.CodingRanking}</TableCell>
              <TableCell>{invoice.TotalCodingScore}</TableCell>
              <TableCell>{invoice.MCQsRanking}</TableCell>
              <TableCell className="text-right">
                {invoice.TotalMCQsScore}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>Your Leaderboard</TableCaption>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
    </>
  );
}

export default Leaderboard;
