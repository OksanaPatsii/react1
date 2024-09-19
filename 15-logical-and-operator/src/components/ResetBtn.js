import React from "react";

function ResetBtn({resetCount}) {
    

  return (
    <div>
      <button
        style={{ backgroundColor: "lightgreen" }}
        onClick={resetCount}
      >
        Reset
      </button>
    </div>
  );
}

export default ResetBtn;
