import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { BasicForm } from './pages/BasicForm';
import { JobForm } from './pages/JobForm';
import { AdvancedForm } from './pages/AdvancedForm';
import { Result } from './pages/Result';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BasicForm />} />
        <Route path="/basic_form" element={<BasicForm />} />
        <Route path="/job_form" element={<JobForm />} />
        <Route path="/advanced_form" element={<AdvancedForm />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
