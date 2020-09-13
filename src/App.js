import React from "react"
import logo from "./logo.svg"
import "./App.css"
import QuestionsCarousel from "./components/organisms/questionsCarousel"

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <QuestionsCarousel />
      </main>
    </React.Fragment>
  )
}

export default App
