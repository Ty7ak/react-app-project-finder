import React from 'react';
import New from './New';
import StudentsList from './StudentsList';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
    state = {
        StudentsList: [ "Maciej Tylak/Lubię programować i wgl", "Adam Nowak/Nie mam pojęcia co robię", "Anna Kowalska/5 lat doświadczenia jako senior c++ developer, 10 lat doświadczenia jako fullstack PHP developer, dobrze pracuję w zespole, jestem otwartą i pozytywną osobą." ],
    }

    adder = (newDescriptionText, newItemText) => {
        this.setState({
                StudentsList: this.state.StudentsList.concat(newItemText + "/" + 
                newDescriptionText)
                });
    }
    
    render() {
        return (
    
          <Switch>
            <Route path="/" exact>
              <section><StudentsList StudentsList={this.state.StudentsList}/></section>
            </Route>
            <Route path="/new">
              <section><New adder={this.adder}/></section>
            </Route>
            <Route>
              <section><h1>Error 404 - not found</h1></section>
            </Route>
          </Switch>
        );
      }
}

export default Main;