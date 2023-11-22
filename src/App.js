/** @format */
import "./App.css";
import React from "react";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/state/Toggle";
import Button from "./components/button/Button";
import Card from "./components/card/Card";

export default function App() {
  const name = "Variable: HauTC Test props child";
  return (
    <div className="App">
      <YoutubeList>
        {/* child props: html, variable, component */}
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {name}
        {/* hook state */}
        <Toggle />
        {/* Using Sass */}
        <Button>Primary</Button>
        {/* Css module */}
        <Button secondary>Secondary</Button>
        {/* Using TailWindCSS */}
        <Card></Card>
        <Card primary></Card>
      </YoutubeList>
    </div>
  );
}
