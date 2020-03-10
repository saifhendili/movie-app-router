import React from "react";

function trailer({linktrailer}) {
  return (
    <div className="trailer" >
        
      <iframe width='500px' height='400px' src={linktrailer}></iframe>
 
    </div>
  );
}

export default trailer;