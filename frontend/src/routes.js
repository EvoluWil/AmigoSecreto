import { BrowserRouter, Switch, Route } from "react-router-dom";

import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Group from "./pages/Group";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/groups" exact component={Create}/>
                <Route path="/group" exact component={Group}/>
            </Switch>
        </BrowserRouter>
    );
}
