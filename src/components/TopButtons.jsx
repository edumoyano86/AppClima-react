import React from 'react'

const TopButtons = ({setQuery}) => {

  const cities = [
    {
      id: 1,
      name: 'Mendoza'
    },
    {
      id: 2,
      name: 'Buenos Aires',
    },
    {
      id: 3,
      name: 'Santiago de Chile',
    },
    {
      id: 4,
      name: 'Montevideo',
    },
    {
      id: 5,
      name: 'Asuncion',
    }
  ]
  
  return (
    <div id='ciudades' className='flex items-center justify-between my-6'> {cities.map((city) => (
        <button 
          key={city.id} 
          className='text-lg font-medium hover:bg-gray-700/20 py-3 px-2 rounded-md transition ease-in'
          onClick={() => setQuery({ q: city.name})}
        >
          {city.name}
        </button>
      ))}
    </div>
  )
}

export default TopButtons
