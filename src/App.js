import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Header } from "./containers/Header";
import "./styles/app.scss";

function App() {
    return (
        <div className="App">
            
            <Router>
                
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth" component={Auth} />
                </Switch>

            </Router>
        </div>
    );
}

export default App;
