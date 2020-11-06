import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/login';
import Register from './pages/register';
import Setup1 from './pages/setup1';
import Setup2 from './pages/setup2';
import Setup3 from './pages/setup3';
import Home from './pages/home';
import Notificacoes from './pages/notificacoes';
import Casa from './pages/casa';
import Empresa from './pages/empresa';
import EmpresaForum from './pages/empresa-forum';
import EmpresaForum1 from './pages/empresa-forum-1';
import CasaTrocaPonto from './pages/casa-trocarPontos';
import EmpresaTrocaPonto from './pages/empresa-trocarPontos';

export default function Routes(){
    
    return (
        <BrowserRouter >
            <Switch>
                <Route path={`/`} exact component={Login} />
                <Route path={`/register`} exact component={Register} />
                <Route path={`/setup/1`} exact component={Setup1} />
                <Route path={`/setup/2`} exact component={Setup2} />
                <Route path={`/setup/3`} exact component={Setup3} />
                <Route path={`/home`} exact component={Home} />
                <Route path={`/notificacoes`} exact component={Notificacoes} />
                <Route path={`/casa`} exact component={Casa} />
                <Route path={`/empresa`} exact component={Empresa} />
                <Route path={`/empresa/conteudo`} exact component={Empresa} />
                <Route path={`/empresa/forum`} exact component={EmpresaForum} />
                <Route path={`/empresa/forum/:id`} exact component={EmpresaForum1} />
                <Route path={`/casa/troca-de-pontos`} exact component={CasaTrocaPonto} />
                <Route path={`/empresa/troca-de-pontos`} exact component={EmpresaTrocaPonto} />
            </Switch>
        </BrowserRouter>
    )
}