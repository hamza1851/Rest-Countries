import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MainLayout from "./Layout/MainLayout"
import CountryDetails from "./components/CountryDetails"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/country/:id" element={<CountryDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
