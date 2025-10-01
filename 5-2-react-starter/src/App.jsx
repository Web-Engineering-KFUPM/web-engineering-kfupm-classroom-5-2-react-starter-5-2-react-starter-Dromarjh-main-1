import './App.css'
import StudentCard from "C:\\Users\\s202245200\\Downloads\\react-starter\\src\\components/StudentCard.jsx"
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {
            <StudentCard name="Hasan Almualim" sid="202245200" dep="ICS"></StudentCard>
          /* TODO: Import and render StudentCard components here */}
        </div>
      </main>
    </div>
  )
}

export default App
