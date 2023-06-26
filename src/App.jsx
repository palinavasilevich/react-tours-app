import { useEffect, useState } from "react";
import { Loading, Tours } from "./components";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsError(true);
        return;
      }

      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h3>Error</h3>;
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchData()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>
  );
};
export default App;
