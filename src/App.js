import './style/style.css'
import useData from './useData';
import {BrowserRouter as  Router , Routes , Route , Link} from 'react-router-dom';
import Home from './Home';
import { useState , useEffect } from 'react';
function App() {
  const [countryNameInput , setCoutnryName ] = useState("canada")
  const [name , setName ] = useState("")
  const [allData , setAllData] = useState({})
  const [data , setData ] = useState(null)
    const [loading , setLoading ] = useState(true)
    const [err , setErr ] = useState(true)
    useEffect(()=>{
        fetch(`http://api.weatherapi.com/v1/current.json?key=5fc5ed996f78462aa3173550212710&q=${countryNameInput}&aqi=no`)
        .then((res)=>{
            if(!res.ok){
                throw Error("fuck")
            }else{
                return res.json();
            }
        })
        .then((data)=>{
            setLoading(false)
            setData(data)
            setErr(false)
            console.log(data);
            
        })
        .catch((err)=>{
            setLoading(false)
            setErr(true)
        })
    },[countryNameInput])
  function countryFuntion(e){
    setName(e.target.value)
  }
  return (
  <div className="main_country_handler">
    <Router>
        {loading && <h1>loading...</h1>}
        {err && <div>{err }</div>}
        {data && <div className="App">
          <Routes>
            {data && <Route exact path="/" element={(
              <div className="input_hanlder">
                <input onChange={(e)=>countryFuntion(e)} type="text" placeholder="enter ur country default is canada :"/>
                  <Link to="/home" ><button className="btn" onClick={()=>setCoutnryName(name)}>submit</button></Link>
              </div>
            )}></Route>}
            {data && <Route exact path="/home" element={<Home data={data} />}></Route>}
          </Routes>
        </div>}
    </Router>
  </div>
  );
}

export default App;
