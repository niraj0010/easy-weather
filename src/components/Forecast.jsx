import React from 'react'

const Forecast = () => {
  // Sample data array for demonstration purposes
  const data = [
    { day: 'Wed', 
        temp: '12°', 
        icon: 'http://openweathermap.org/img/wn/01d@2x.png' 
    },
    { 
        day: 'Thu'
        , temp: '15°',
         icon: 'http://openweathermap.org/img/wn/01d@2x.png' }
         ,
    { 
        day: 'Fri',
         temp: '18°',
         
        icon: 'http://openweathermap.org/img/wn/01d@2x.png' 
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="font-medium uppercase">
          3 hour step forecast
        </p>
      </div>
      <hr className="my-1" />
      <div className="flex items-center justify-between">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">
              {item.day}
            </p>
            <img 
              src={item.icon} 
              alt="weather icon" 
              className="w-12 my-1" 
            />
            <p className="font-medium">
              {item.temp}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
