import React from 'react';
import AppHeader from './components/appheader';
import AppFooter from './components/appfooter';
import NewslistView from './components/newslistview';
import AppSettings from './components/appsettings';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [
        {title: "Article 1", description: "Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod.", source: "Nimportekoi", image:"https://picsum.photos/id/4/300/200" },
        {title: "Article 2", description: "Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo.", source: "Nimportekoi", image:"https://picsum.photos/id/5/300/200" },
        {title: "Article 3", description: "Donec sed odio dui. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.", source: "Nimportekoi", image:"https://picsum.photos/id/4/300/200" },
        {title: "Article 4", description: "Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor.", source: "Nimportekoi", image:"https://picsum.photos/id/5/300/200" },
      ]
    }
  }

  render = () =>(
    <div className="App">
    <Router>
      <AppHeader />
      <Switch>
        <Route exact path='/' render={()=><NewslistView articles={this.state.data}/>} />
        <Route exact path='/settings' render={()=><AppSettings/>} />
      </Switch>
      <AppFooter />
    </Router>
    </div>
  );
}