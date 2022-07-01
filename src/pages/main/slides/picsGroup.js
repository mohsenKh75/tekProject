import React from "react";
import PicsGroup2 from "./picsGroup2";
import PicsGroup3 from "./picsGroup3";
import PicsGroup1 from "./picsGroup1";

function PicsGroup() {
  return (
    <div className="d-flex w-100 overflow-auto">
      <PicsGroup1 className="flex-grow-1 flex-shrink-0" />

      <PicsGroup2 className="flex-grow-1 flex-shrink-0" />

      <PicsGroup3 className="flex-grow-1 flex-shrink-0" />
    </div>
  );
}

export default PicsGroup;
