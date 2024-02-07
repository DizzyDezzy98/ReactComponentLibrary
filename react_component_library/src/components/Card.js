import React from "react";
 export default function Card({ cardTitle, cardContent }) {
    return (
      <div>
        <h1>{cardTitle}</h1>
        <h2>{CardContent}</h2>
        <hr />
      </div>
    );
  }