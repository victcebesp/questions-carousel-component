import React from "react"
import logo from "./logo.svg"
import "./App.css"
import QuestionsCarousel from "./components/organisms/questionsCarousel"
import questionsConfigurations from "./data/questionsConfigurations"
import userData from "./data/userData"

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <QuestionsCarousel
          questionsConfigurations={questionsConfigurations}
          userData={userData}
        />
      </main>
    </React.Fragment>
  )
}

export default App
