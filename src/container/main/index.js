import React from 'react'
import { Switch, Route} from 'react-router-dom';
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'


const AsyncMenu=Loadable({
    loader:()=>import('../app'),
    loading:Loading
})

const AsyncSearch=Loadable({
    loader:()=>import('../search'),
    loading:Loading
})

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact={true} component={AsyncMenu}></Route>
                <Route path='/search' exact={true} component={AsyncSearch}></Route>
            </Switch>
        )
    }
}