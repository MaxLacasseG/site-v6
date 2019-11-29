import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "styled-components";
//Routes
import Home from "./components/splashScreen/Home";
import Features from "./components/splashScreen/Features";
import Wip from "./components/splashScreen/WIP";
import theme from "./components/styledComponents/theme";
function App() {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <div className="App">
                        <Switch>
                            <Route path="/">
                                <Home />
                                <Features />
                                <Wip />
                            </Route>
                        </Switch>
                    </div>
                </ThemeProvider>
            </Router>
        </Provider>
    );
}

export default App;
