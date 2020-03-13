import React from 'react';
import './layoutAdmin.scss';
import { Route} from 'react-router-dom';

export default function LayoutAdmin(props){
    const {routes} = props;
    return(
        <div>
            <header>
                <h2>Cities</h2>
            </header>

                <section>
                <nav>
                    <ul>
                    <li><a href="#">London</a></li>
                    <li><a href="#">Paris</a></li>
                    <li><a href="#">Tokyo</a></li>
                    </ul>
                </nav>
                
                <article>
                    <LoadRouters routes={routes}></LoadRouters>
                </article>
                </section>

                <footer>
                <p>Footer</p>
                </footer>

        </div>
    )
}

function LoadRouters({routes}){
    console.log(routes)
    // const routes = props;
    return routes.map((route, index) =>(
        <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ));
}