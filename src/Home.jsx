import { BrowserRouter as Router , Link } from "react-router-dom"
const Home = ({data})=>{
    let allData = {
        country : data.location.country,
        name : data.location.name,
        region: data.location.region,
        text: data.current.condition.text,
        temp_C : data.current.temp_c,
        temp_F : data.current.temp_f,
        tz_id:data.location.tz_id,
        wind_mph : data.current.wind_mph,
        wind_kph : data.current.wind_kph,
        humidity : data.current.humidity,
        feelslike_c : data.current.feelslike_c,
        feelslike_f : data.current.feelslike_f
    }
    return (
        <div className="input_hanlder_display">
              <h2>country :{allData.country}</h2>
              <h2>name : {allData.name }</h2>
              <h2>region : {allData.region}</h2>
              <h2>idk : {allData.text}</h2>
              <h2>tem in C : {allData.temp_C}</h2>
              <h2>temp in F : {allData.temp_F}</h2>
              <h2>tz_id : {allData.tz_id}</h2>
              <h2>wind in kph : {allData.wind_kph}</h2>
              <h2>wind in mph : {allData.wind_mph}</h2>
              <h2>humidity : {allData.humidity}</h2>
              <h2>feels like in C : {allData.feelslike_c}</h2>
              <h2>feels like in F : {allData.feelslike_f}</h2>
              <h2>
                  <Link to="/" >
                      go back 
                  </Link>
              </h2>
        </div>
    )
}
export default Home