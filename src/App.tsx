import Charts from "./components/Charts";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex h-screen flex-1 flex-col">
        <Header />
        <Charts />
      </div>
      <Summary />
    </div>
  );
}

export default App;
