import { Inter } from "next/font/google";
import Test from "./test";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <Test />
      <Button variant="contained">Hello world</Button>
    </div>
  );
}
