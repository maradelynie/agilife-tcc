import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Setup1 from './pages/setup1';
import Setup2 from './pages/setup2';
import Setup3 from './pages/setup3';
import Home from './pages/home';
import HomeAdm from './pages/homeAdm';
import ContentAdm from './pages/contentAdm';
import Tasks from './pages/tasks';
import EditTasks from './pages/editTaks';
import Content from './pages/content';
import User from './pages/user';

export default function Routes(){
    
    return (
        
            <Switch>
                <Route path={`/`} exact component={Login} />
                <Route path={`/register`} exact component={Register} />
                <Route path={`/setup/1`} exact component={Setup1} />
                <Route path={`/setup/2`} exact component={Setup2} />
                <Route path={`/setup/3`} exact component={Setup3} />
                <Route path={`/home`} exact component={Home} />
                <Route path={`/homeAdm`} exact component={HomeAdm} />
                <Route path={`/contentAdm`} exact component={ContentAdm} />
                <Route path={`/tasks`} exact component={Tasks} />
                <Route path={`/editTasks`} exact component={EditTasks} />
                <Route path={`/content`} exact component={Content} />
                <Route path={`/user`} exact component={User} />
            </Switch>
        
    )
}