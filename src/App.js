import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import unclogo from './unclogo.png';
import './App.css';
import all from './symbols/all.png';
import can from './symbols/can.png';
import different from './symbols/different.png';
import do1 from './symbols/do.png';
import finish from './symbols/finish.png';
import get from './symbols/get.png';
import go from './symbols/go.png';
import good from './symbols/good.png';
import he from './symbols/he.png';
import help from './symbols/help.png';
import here from './symbols/here.png';
import I1 from './symbols/I.png';
import in1 from './symbols/in.png';
import it from './symbols/it.png';
import like from './symbols/like.png';
import look from './symbols/look.png';
import make from './symbols/make.png';
import more from './symbols/more.png';
import not from './symbols/not.png';
import on from './symbols/on.png';
import open from './symbols/open.png';
import put from './symbols/put.png';
import same from './symbols/same.png';
import she from './symbols/she.png';
import some from './symbols/some.png';
import stop from './symbols/stop.png';
import that from './symbols/that.png';
import turn from './symbols/turn.png';
import up from './symbols/up.png';
import want from './symbols/want.png';
import what from './symbols/what.png';
import when from './symbols/when.png';
import where from './symbols/where.png';
import who from './symbols/who.png';
import why from './symbols/why.png';
import you from './symbols/you.png';

import SquareNum4 from './symbols/4_Square_Book.gif';
import SquareNum9 from './symbols/9_Location_Book.gif';
import SquareNum36 from './symbols/36_Location_Board.gif';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


var WindowDimensions = React.createClass({
    render: function() {
        return <span>{this.state.width} x {this.state.height}</span>;
    },
    updateDimensions: function() {

    var w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.getElementsByTagName('body')[0],
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

        this.setState({width: width, height: height});
        // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
    },
    componentWillMount: function() {
        this.updateDimensions();
    },
    componentDidMount: function() {
        window.addEventListener("resize", this.updateDimensions);
    },
    componentWillUnmount: function() {
        window.removeEventListener("resize", this.updateDimensions);
    }
});

const containerStyle = {
//  width: store.screen.width,
//  height: store.screen.height - 30,
  position: 'absolute' ,
  overflow: 'hidden' ,
  left: 0,
  top: 0,
  whiteSpace: "nowrap",
     textOverflow: "ellipsis",
};

function sayWord() {
//  var msg = new SpeechSynthesisUtterance(store.word);
//  msg.lang = 'en-US';
//  speechSynthesis.speak(msg);
}

const home = () => (

  <div id = "home">
  <center>
    <div>
    <h2 style={{ backgroundColor: 'skyblue' }}>Universal Core Communication Systems</h2>
      <img src={unclogo} style={{width: 170, height: 100}} />
</div>
<table>
  <tr>
<td> <h5>4 Square Universal Core Communication Book</h5> <button>
  <Link to="/Square4" style={{ textDecoration: 'none' }}><img src={SquareNum4} /></Link>
</button> </td>
{"\n"}
<td><h5>9 Location Universal Core Communication Book</h5><button>
  <Link to="/Square9" style={{ textDecoration: 'none' }}><img src={SquareNum9} /></Link>
</button> </td>
{"\n"}
<td> <h5>36 Location Universal Core Communication Board</h5><button>
  <Link to="/Square36" style={{ textDecoration: 'none' }}><img src={SquareNum36} /></Link>
</button></td>
</tr>
</table>
</center>
    </div>
)



// first section
const Square4 = () => (
  <div id ="div1">
<center>
    <table>
  <tr>
<td><button><img src= {like} /></button></td>
  <td><button><img src= {want} /></button></td>
  </tr>
  <tr>
    <td><button><img src= {not} /></button></td>
      <td><button><img src= {go} /></button></td>
</tr>
</table>
</center>
</div>


)





//second section
const Square9 = () => (
  <div >
    <center>
  <table>
<tr>
  <td><button><img src= {like} /></button></td>
    <td><button><img src= {want} /></button></td>
      <td><button><img src= {get} /></button></td>
</tr>
<tr>
  <td><button><img src= {not} /></button></td>
    <td><button><img src= {go} /></button></td>
      <td><button><img src= {look} /></button></td>
</tr>
<tr>
  <td><button><img src= {I1} /></button></td>
    <td><button><img src= {he} /></button></td>
      <td><button><img src= {open} /></button></td>
</tr>
  </table>
</center>
</div>



)








const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
    </div>
)








//third section
const Square36 = ({  }) => (
  <div>
<center>
      <table>
      <tr>
        <td><button><img src= {like} /></button></td>
          <td><button><img src= {want} /></button></td>
            <td><button><img src= {get} /></button></td>
              <td><button><img src= {make} /></button></td>
                <td><button><img src= {good} /></button></td>
                  <td><button><img src= {more} /></button></td>

</tr>
<tr>  <td><button><img src= {not} /></button></td>
  <td><button><img src= {go} /></button></td>
    <td><button><img src= {look} /></button></td>
      <td><button><img src= {turn} /></button></td>
        <td><button><img src= {help} /></button></td>
          <td><button><img src= {different} /></button></td>
</tr>
<tr>  <td><button><img src= {I1} /></button></td>
  <td><button><img src= {he} /></button></td>
    <td><button><img src= {open} /></button></td>
      <td><button><img src= {do1} /></button></td>
        <td><button><img src= {put} /></button></td>
          <td><button><img src= {same} /></button></td>
</tr>
<tr>
    <td><button><img src= {you} /></button></td>
      <td><button><img src= {she} /></button></td>
        <td><button><img src= {that} /></button></td>
          <td><button><img src= {up} /></button></td>
            <td><button><img src= {all} /></button></td>
              <td><button><img src= {some} /></button></td>
</tr>
<tr>
    <td><button><img src= {it} /></button></td>
      <td><button><img src= {here} /></button></td>
        <td><button><img src= {in1} /></button></td>
          <td><button><img src= {on} /></button></td>
            <td><button><img src= {can} /></button></td>
              <td><button><img src= {finish} /></button></td>
</tr>
<tr>
    <td><button><img src= {where} /></button></td>
      <td><button><img src= {what} /></button></td>
        <td><button><img src= {why} /></button></td>
          <td><button><img src= {who} /></button></td>
            <td><button><img src= {when} /></button></td>
              <td><button><img src= {stop} /></button></td>

</tr></table>
</center>
  </div>

)








//parts put together
const BasicExample = () => (
  <Router>
    <div>
      <div className="App">

</div>
<Route exact path="/" component={home}/>
  <Route path="/0" component={home}/>
      <Route path="/Square4" component={Square4}/>
      <Route path="/Square9" component={Square9}/>
      <Route path="/Square36" component={Square36}/>
    </div>
  </Router>
)
export default BasicExample;
