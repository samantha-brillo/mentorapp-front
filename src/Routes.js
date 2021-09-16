import {Switch, Route} from 'react-router-dom'
//wiews
import Auth from './app/views/auth/Auth'
import Home from './app/views/home/Home'
import Profile from './app/views/profile/Profile'


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />,
        <Route exact path="/login" component={Auth} />,
        <Route exact path="/signup" component={Auth} />,
        <Route exact path="/profile" component={Profile} />
    </Switch>
);

export default Routes
