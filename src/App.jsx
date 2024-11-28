
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {  Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BookForm from './Pages/BookForm';


function App() {

  return (
    <>
   
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<BookForm />} />
        <Route path="/edit/:id" element={({ match }) => <BookForm bookId={match.params.id} />} />
      </Routes>
      <Footer />
     
     

    </>
  )
}

export default App
