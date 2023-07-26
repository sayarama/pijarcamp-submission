import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Pijar from './usePijarDB'
import CreateData from './useCreateData'
import UpdateProduk from './useUpdateProduk'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pijar/>}></Route>
          <Route path="/create" element={<CreateData/>}></Route> 
          <Route path="/update/:id" element={<UpdateProduk/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
