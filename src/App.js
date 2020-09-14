import React from "react"
import "./App.css"
import "./style/styles.css"
import QuestionsCarousel from "./components/organisms/questionsCarousel"
import questionsConfigurations from "./data/questionsConfigurations"
import userData from "./data/userData"

function App() {
  return (
    <main className="container">
      <div id="header">
        <img src={require("./images/logo.png")} alt="Multiply logo" />
        <h1>coding test</h1>
      </div>
      <QuestionsCarousel
        questionsConfigurations={questionsConfigurations}
        userData={userData}
      />
    </main>
  )
}

export default App
