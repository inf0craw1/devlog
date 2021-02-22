import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from "./pages/Home";
import "./styles/app.scss";

function App() {
    return (
        <div className="App">
            <div id="pageWrapper">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>

                </Router>
            </div>
        </div>
    );
}

export default App;
