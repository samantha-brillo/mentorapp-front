import {Switch, Route} from 'react-router-dom'
import Home from '/home'
import Auth from '/auth'
import Dashboard from '/dashboard'


const Routes = () => (
    <Switch>
        {/* EEl lado off */}
        <Route exact path="/" component={Home} />,
        <Route exact path="/login" component={Auth} />,
        <Route exact path="/signup" component={Auth} />,
        <Route  path="/main" component={Dashboard} />
        {/* registro ssubir proyecto */}
        {/* Admin crear mentor */}
    </Switch>
);

export default Routes
