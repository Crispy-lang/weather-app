import React, {useEffect, useState} from 'react';
import {convertTemperature} from '../../helpers/filterWeather';
import './Load5Days.css';

const Load5Days = ({ weatherData }) => {

    const [selected, setSelected] = useState({});

    const data = weatherData.map((day, index) => (
        <tr className="day" key={index} onClick={() => setSelected(day)}>
          <td>{day.dt.day}</td>
          <td><img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} /></td>
          <td>
            {convertTemperature(day.main.temp)}
            {' '}
            <sup className="temperatureSymbol">o</sup>
            C
          </td>
          <td>{day.weather[0].description}</td>
          <td>
            {day.clouds.all}
            %
          </td>
          <td>{day.wind.speed}</td>
          <td>
            {day.main.humidity}
            %
          </td>
        </tr>
      ));

    // useEffect(() => {
    //     console.log('THESE ARE MY DATA: ', data)
    // }, [selected]);

return (  <div>
    <table className="showDays">
      <thead>
        <tr>
          <th>Day</th>
          <th> </th>
          <th>Temp</th>
          <th>Condition</th>
          <th>Cloudiness</th>
          <th>Wind speed (m/s)</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  </div>
);
}
export default Load5Days;