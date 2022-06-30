import React from "react";
import PicsGroup2 from "./picsGroup2";
import PicsGroup3 from "./picsGroup3";
import PicsGroup1 from "./picsGroup1";


function PicsGroup() {
    return (
        <>
            <div>
                <PicsGroup1 />
            </div>
            <div className="hidden">
                <PicsGroup2 />
            </div>
            <div className="hidden">
                <PicsGroup3 />
            </div>
        </>



    )
}

export default PicsGroup