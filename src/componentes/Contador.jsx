import React from "react";

export function Contador({ numClicks }) {
    return (
        <div className="contador">
            {numClicks}
        </div>
    );
}