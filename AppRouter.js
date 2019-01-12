import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import AppHome from './src/components/AppHome';
import AppDetail from './src/components/AppDetail';


class AppRouter extends Component{
    render() {
        return(
            <Router hideNavBar= "true">
                <Scene key="root">
    
                    <Scene 
                        key="home"
                        component={AppHome}
                        hideNavBar="true"
                        initial
                    />
                    <Scene 
                        key="detail"
                        component={AppDetail}
                        hideNavBar="true"
                    />
                    
    
                </Scene>
            </Router>
        )
    }
}

export default AppRouter;
