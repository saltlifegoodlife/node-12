import React from "react";
// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
function HelloDiv() {
  return (
    <div>
      <h1>Hello! My Name is Ross Beckham.</h1>
      <ul>
        <li>Kayak Fishing</li>
        <li>Coding</li>
        <li>Golf</li>
      </ul>
    </div>
  );
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
export default HelloDiv;
