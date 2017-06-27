import React, { Component } from 'react';
import { observer } from 'mobx-react';
//import DevTools from 'mobx-react-devtools';
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

//function sayWord() {
//  var msg = new SpeechSynthesisUtterance('like');
//  msg.lang = 'en-US';
//  speechSynthesis.speak(msg);
//}
function sayWord1() {
  var msg = new SpeechSynthesisUtterance('like');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord2() {
  var msg = new SpeechSynthesisUtterance('want');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}

function sayWord3() {
  var msg = new SpeechSynthesisUtterance('not');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord4() {
  var msg = new SpeechSynthesisUtterance('go');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord5() {
  var msg = new SpeechSynthesisUtterance('get');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord6() {
  var msg = new SpeechSynthesisUtterance('look');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord7() {
  var msg = new SpeechSynthesisUtterance('I');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord8() {
  var msg = new SpeechSynthesisUtterance('he');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord9() {
  var msg = new SpeechSynthesisUtterance('open');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord10() {
  var msg = new SpeechSynthesisUtterance('make');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord11() {
  var msg = new SpeechSynthesisUtterance('good');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord12() {
  var msg = new SpeechSynthesisUtterance('more');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord13() {
  var msg = new SpeechSynthesisUtterance('turn');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord14() {
  var msg = new SpeechSynthesisUtterance('help');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord15() {
  var msg = new SpeechSynthesisUtterance('different');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord16() {
  var msg = new SpeechSynthesisUtterance('do1');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord17() {
  var msg = new SpeechSynthesisUtterance('put');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord18() {
  var msg = new SpeechSynthesisUtterance('same');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord19() {
  var msg = new SpeechSynthesisUtterance('you');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord20() {
  var msg = new SpeechSynthesisUtterance('she');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord21() {
  var msg = new SpeechSynthesisUtterance('that');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord22() {
  var msg = new SpeechSynthesisUtterance('up');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord23() {
  var msg = new SpeechSynthesisUtterance('all');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord24() {
  var msg = new SpeechSynthesisUtterance('some');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord25() {
  var msg = new SpeechSynthesisUtterance('it');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord26() {
  var msg = new SpeechSynthesisUtterance('here');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord27() {
  var msg = new SpeechSynthesisUtterance('in1');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord28() {
  var msg = new SpeechSynthesisUtterance('on');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord29() {
  var msg = new SpeechSynthesisUtterance('can');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord30() {
  var msg = new SpeechSynthesisUtterance('finish');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord31() {
  var msg = new SpeechSynthesisUtterance('where');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord32() {
  var msg = new SpeechSynthesisUtterance('what');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord33() {
  var msg = new SpeechSynthesisUtterance('why');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord34() {
  var msg = new SpeechSynthesisUtterance('who');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord35() {
  var msg = new SpeechSynthesisUtterance('when');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}
function sayWord36() {
  var msg = new SpeechSynthesisUtterance('stop');
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}





const home = () => (
  <div id = "home">
  <center>
    <div>
    <h2 style={{backgroundColor:'skyblue'}}>Universal Core Communication Systems</h2>
      <img src={unclogo} style={{width: 170, height: 100}} />
</div>
<table>
  <tbody>
  <tr>
<td><h5>4 Square Universal Core Communication Book</h5><button>
  <Link to="/Square4" style={{ textDecoration: 'none' }}><img src={SquareNum4} /></Link>
</button></td>
{"\n"}
<td><h5>9 Location Universal Core Communication Book</h5><button>
  <Link to="/Square9" style={{textDecoration: 'none'}}><img src={SquareNum9} /></Link>
</button> </td>
{"\n"}
<td><h5>36 Location Universal Core Communication Board</h5><button>
  <Link to="/Square36" style={{textDecoration: 'none'}}><img src={SquareNum36} /></Link>
</button></td>
</tr>
</tbody>
</table>
</center>
    </div>
)



// first section
const Square4 = () => (
  <div id ="div1">
<center>
    <table>
      <tbody>
  <tr>
<td><button onClick={sayWord1} tabIndex="1"><img src={like}/></button></td>
  <td><button onClick={sayWord2} tabIndex="2"><img src={want}/></button></td>
  </tr>
  <tr>
    <td><button onClick={sayWord3} tabIndex="3"><img src={not}/></button></td>
      <td><button onClick={sayWord4} tabIndex="4"><img src={go}/></button></td>
</tr>
</tbody>
</table>
</center>
</div>
)



//second section
const Square9 = () => (
  <div>
    <center>
  <table>
    <tbody>
<tr>
  <td><button onClick={sayWord1} tabIndex="1"><img src={like}/></button></td>
    <td><button onClick={sayWord2} tabIndex="2"><img src={want}/></button></td>
      <td><button onClick={sayWord5} tabIndex="3"><img src={get}/></button></td>
</tr>
<tr>
  <td><button onClick={sayWord3} tabIndex="4"><img src={not}/></button></td>
    <td><button onClick={sayWord4} tabIndex="5"><img src={go}/></button></td>
      <td><button onClick={sayWord6} tabIndex="6"><img src={look}/></button></td>
</tr>
<tr>
  <td><button onClick={sayWord7} tabIndex="7"><img src={I1}/></button></td>
    <td><button onClick={sayWord8} tabIndex="8"><img src={he}/></button></td>
      <td><button onClick={sayWord9} tabIndex="10"><img src={open}/></button></td>
</tr>
</tbody>
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
        <tbody>
      <tr>
        <td><button onClick={sayWord1}><img src={like}/></button></td>
          <td><button onClick={sayWord2}><img src={want}/></button></td>
            <td><button onClick={sayWord5}><img src={get}/></button></td>
              <td><button onClick={sayWord10}><img src={make}/></button></td>
                <td><button onClick={sayWord11}><img src={good}/></button></td>
                  <td><button onClick={sayWord12}><img src={more}/></button></td>
</tr>
<tr><td><button onClick={sayWord3}><img src={not}/></button></td>
  <td><button onClick={sayWord4}><img src={go}/></button></td>
    <td><button onClick={sayWord6}><img src={look}/></button></td>
      <td><button onClick={sayWord13}><img src={turn}/></button></td>
        <td><button onClick={sayWord14}><img src={help}/></button></td>
          <td><button onClick={sayWord15}><img src={different}/></button></td>
</tr>
<tr><td><button onClick={sayWord7}><img src={I1}/></button></td>
  <td><button onClick={sayWord8}><img src={he}/></button></td>
    <td><button onClick={sayWord9}><img src={open}/></button></td>
      <td><button onClick={sayWord16}><img src={do1}/></button></td>
        <td><button onClick={sayWord17}><img src={put}/></button></td>
          <td><button onClick={sayWord18}><img src={same}/></button></td>
</tr>
<tr>
    <td><button onClick={sayWord19}><img src={you}/></button></td>
      <td><button onClick={sayWord20}><img src={she}/></button></td>
        <td><button onClick={sayWord21}><img src={that}/></button></td>
          <td><button onClick={sayWord22}><img src={up}/></button></td>
            <td><button onClick={sayWord23}><img src={all}/></button></td>
              <td><button onClick={sayWord24}><img src={some}/></button></td>
</tr>
<tr>
    <td><button onClick={sayWord25}><img src={it}/></button></td>
      <td><button onClick={sayWord26}><img src={here}/></button></td>
        <td><button onClick={sayWord27}><img src={in1}/></button></td>
          <td><button onClick={sayWord28}><img src={on}/></button></td>
            <td><button onClick={sayWord29}><img src={can}/></button></td>
              <td><button onClick={sayWord30}><img src={finish}/></button></td>
</tr>
<tr>
    <td><button onClick={sayWord31}><img src={where}/></button></td>
      <td><button onClick={sayWord32}><img src={what}/></button></td>
        <td><button onClick={sayWord33}><img src={why}/></button></td>
          <td><button onClick={sayWord34}><img src={who}/></button></td>
            <td><button onClick={sayWord35}><img src={when}/></button></td>
              <td><button onClick={sayWord36}><img src={stop}/></button></td>
</tr>
</tbody>
</table>
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
