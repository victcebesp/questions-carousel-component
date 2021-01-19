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
        <h1>Configurable form</h1>
      </div>
      <p>
        This form has been generated automatically based on a configuration
        file.
      </p>
      <p>
        It allows to automatically create questions and validations for those
        questions based on a configuration file.
      </p>
      <QuestionsCarousel
        questionsConfigurations={questionsConfigurations}
        userData={userData}
      />
    </main>
  )
}

export default App
