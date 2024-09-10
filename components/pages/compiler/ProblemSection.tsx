import React from "react";
import "./css/styles.css";
function ProblemSection() {
  return (
    <section
      id="ProblemSection"
      className="max-h-[98vh] overflow-scroll overflow-x-hidden p-10 font-sans dark:text-slate-300/90"
    >
      <h3>First Missing Positive:</h3>
      <p>
        Given an unsorted integer array <code>nums</code>. Return the{" "}
        <em>smallest positive integer</em> that is <em>not present</em> in{" "}
        <code>nums</code>.
      </p>
      <p>
        <br />
      </p>
      <p>
        You must implement an algorithm that runs in <code>O(n)</code> time and
        uses <code>O(1)</code> auxiliary space.
      </p>

      <p>
        <br />
      </p>
      <p>
        <strong>Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1,2,0]
        <br />
        <strong>Output:</strong> 3<br />
        <span className="text-wrap">
          <strong>Explanation:</strong> The numbers in the range [1,2] are all
          in the array.
        </span>
      </pre>
      <p></p>
      <p>
        <strong>Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [3,4,-1,1]
        <br />
        <strong>Output:</strong> 2<br />
        <span className="text-wrap">
          <strong>Explanation:</strong>{" "}
          <p>1 is in the array but 2 is missing.</p>
        </span>
      </pre>
      <p></p>
      <p>
        <strong>Example 3:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [7,8,9,11,12]
        <br />
        <strong>Output:</strong> 1<br />
        <span className="text-wrap">
          <strong>Explanation:</strong>{" "}
          <p>The smallest positive integer 1 is missing.</p>
        </span>
      </pre>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>{"1 <= nums.length <= 105"}</code>
        </li>
        <li>
          <code>-231 &lt;= nums[i] &lt;= 231 - 1</code>
        </li>
      </ul>
    </section>
  );
}

export default ProblemSection;
