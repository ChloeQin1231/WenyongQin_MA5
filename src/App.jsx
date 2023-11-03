//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Grid from "./components/Grid/";
import { GridProvider } from "./context/GridContext";

function App() {
  return (
    <GridProvider>
      <Grid />
    </GridProvider>
  );
}

export default App;








