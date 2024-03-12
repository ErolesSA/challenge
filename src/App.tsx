import { useState, ChangeEvent } from 'react';
import './App.css';

function App() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [countryChecked, setCountryChecked] = useState({
    India: false,
    USA: false,
    France: false
  });

  const handleSelectAllChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setSelectAllChecked(isChecked);
    setCountryChecked({
      India: isChecked,
      USA: isChecked,
      France: isChecked
    });
  };

  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setCountryChecked({
      ...countryChecked,
      [id]: checked
    });

    // Verificar si todos los países están marcados
    const allCountriesChecked = Object.values({
      ...countryChecked,
      [id]: checked
    }).every(value => value);

    // Actualizar el estado de "Select All" si todos los países están marcados
    if (allCountriesChecked) {
      setSelectAllChecked(true);
    } else {
      setSelectAllChecked(false);
    }
  };

  return (
    <>
      <h1>Challenge</h1>
        <div className="card">
          <div className="form-check" style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="selectAll"
              checked={selectAllChecked}
              onChange={handleSelectAllChange}
            />
            <label className="form-check-label" htmlFor="selectAll">
              Select All
            </label>
          </div>
          <div className="form-check" style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="India"
              checked={countryChecked.India}
              onChange={handleCountryChange}
            />
            <label className="form-check-label" htmlFor="India">
              India
            </label>
          </div>

          <div className="form-check" style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="USA"
              checked={countryChecked.USA}
              onChange={handleCountryChange}
            />
            <label className="form-check-label" htmlFor="USA">
              USA
            </label>
          </div>

          <div className="form-check" style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="France"
              checked={countryChecked.France}
              onChange={handleCountryChange}
            />
            <label className="form-check-label" htmlFor="France">
              France
            </label>
          </div>
        </div>



    </>
  );
}

export default App;
