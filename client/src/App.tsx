import { Link } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

const App=()=> {
  return (
    <div>
      <div className="bg-red-600 text-white text-4xl font-bold p-4">
  Tailwind color test
</div>

      <nav style={{marginBottom: "20px"}}>
        <Link to="/books" style={{marginRight: "10px"}}>Books</Link>
        <Link to="/issues" style={{marginRight: "10px"}}>Issues</Link>
        <Link to="/users">Users</Link>
      </nav>
      <AppRoutes/>
    </div>
  )
}

export default App
