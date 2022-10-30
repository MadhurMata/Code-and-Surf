import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from 'routes/AppRoutes';
// import NotFound from 'pages/notFound/NotFound';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
