import React from "react";

export default function Greet({ name }) {
  return <h1>Hello, {name || "Guest"}!</h1>;
}
