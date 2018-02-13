import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "4cdbc063596c890b8be4873d2d920a4c"

class App extends React.Component {
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);    
    }
    render() {
        return (
            <div>
                <Titles />
                <Form />
                <Weather />
            </div>
        );
    }
};

export default App;