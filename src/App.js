import './App.css';
import ErrorBoundary from './components/hoc/error/error'
import Layout from './components/layout/layout'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
