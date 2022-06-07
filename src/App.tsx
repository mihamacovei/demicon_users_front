import React, { useMemo, createContext } from "react";
import './App.css';
//import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersView from "./views/UsersView";

export const AppContext = createContext<any>([]);

function App() {
  const value = useMemo(() => [],[]);

  return (
    <Provider store={store}>
        <AppContext.Provider value={value}>
          <Router>
            <Routes>
              <Route path='/' element={<UsersView />} />
            </Routes>
          </Router>
        </AppContext.Provider>
    </Provider>
  );
}

export default App;
