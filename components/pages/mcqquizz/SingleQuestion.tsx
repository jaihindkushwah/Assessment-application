// "use client";
// import { useSearchParams } from "next/navigation";
// const params = useSearchParams();
//   const questionNo = params.get("question");
//   const [questionData, setQuestionData] = React.useState<any>(null);
//   useEffect(() => {
//     if (questionNo) {
//       setQuestionData(questionNo);
//     }
//   }, [questionNo]);

import React from "react";

function SingleQuestion() {
  return (
    <div className="flex items-center mt-5 h-full flex-col">
      <h1 className="text-3xl font-bold">{/* {questionData}  */}</h1>
    </div>
  );
}

export default SingleQuestion;
