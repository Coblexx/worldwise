import { createContext, useContext, useEffect, useState } from "react";

const CitiestContext = createContext();
const API_URL = "http://localhost:8000";

function CititesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${API_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch (err) {
        alert("Error fetching data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch (err) {
      alert("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiestContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiestContext.Provider>
  );
}

function useCities() {
  const value = useContext(CitiestContext);
  if (value === undefined)
    throw new Error("Cities context was used outside CitiesProvider");
  return value;
}

export { CititesProvider, useCities };
