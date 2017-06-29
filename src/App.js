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

var words = "like want get make good more not go look turn help different I he open do put same you she that up all some it here in on can finish where what why who when stop".split(' ');
console.log('words', words);

function sayTheWord(e) {
  console.log('sayTheWord', e.target);
  var word = e.target.parentElement.dataset.word;
  console.log('word', word);
  var msg = new SpeechSynthesisUtterance(word);
  msg.lang = 'en-US';
  speechSynthesis.speak(msg);
}

const home = () => (
      <div id = "home">
         <center>
            <div>
               <h2 style={{backgroundColor:'skyblue'}}>Universal Core Communication Systems</h2>
               <img src={unclogo} style={{width: 170, height: 120}} />
            </div>
            <table id ="table2">
               <tbody>
                  <tr>
                     <td>
                        <h5>4 Square Universal Core Communication Book</h5>
                        <button>
                        <Link to="/Square4" style={{ textDecoration: 'none' }}>
                        <img src={SquareNum4} />
                        </Link>
                        </button>
                     </td>
                     {"\n"}
                     <td>
                        <h5>9 Location Universal Core Communication Book</h5>
                        <button>
                        <Link to="/Square9" style={{textDecoration: 'none'}}>
                        <img src={SquareNum9} />
                        </Link>
                        </button>
                     </td>
                     {"\n"}
                     <td>
                        <h5>36 Location Universal Core Communication Board</h5>
                        <button>
                        <Link to="/Square36" style={{textDecoration: 'none'}}>
                        <img src={SquareNum36} />
                        </Link>
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </center>
      </div>
      )
      // first section
      const Square4 = ({  }) => {
        var rows = [];
        for(var r = 0; r < 2; r++) {
          var cols = [];
          for(var c = 0; c < 2; c++) {
            var word = words[r*2 + c];
            cols.push(
              <td>
                <button data-word={word}>
                  <img src={process.env.PUBLIC_URL + `/symbols/${word}.png`}/>
                </button>
              </td>);
          }
          rows.push(<tr>{cols}</tr>);
        }
        return (
          <div>
             <center>
                <table onClick={sayTheWord}>
                   <tbody>
                   {rows}
                   </tbody>
                </table>
             </center>
          </div>
          )};
      //second section
      const Square9 = ({  }) => {
        var rows = [];
        for(var r = 0; r < 3; r++) {
          var cols = [];
          for(var c = 0; c < 3; c++) {
            var word = words[r*3 + c];
            cols.push(
              <td>
                <button data-word={word}>
                  <img src={process.env.PUBLIC_URL + `/symbols/${word}.png`}/>
                </button>
              </td>);
          }
          rows.push(<tr>{cols}</tr>);
        }
        return (
          <div>
             <center>
                <table onClick={sayTheWord}>
                   <tbody>
                   {rows}
                   </tbody>
                </table>
             </center>
          </div>
          )};
      const Topic = ({ match }) => (
      <div>
         <h3>{match.params.topicId}</h3>
      </div>
      )
      //third section
      const Square36 = ({  }) => {
        var rows = [];
        for(var r = 0; r < 6; r++) {
          var cols = [];
          for(var c = 0; c < 6; c++) {
            var word = words[r*6 + c];
            cols.push(
              <td>
                <button data-word={word}>
                  <img src={process.env.PUBLIC_URL + `/symbols/${word}.png`}/>
                </button>
              </td>);
          }
          rows.push(<tr>{cols}</tr>);
        }
        return (
      <div>
         <center>
            <table onClick={sayTheWord}>
               <tbody>
               {rows}
               </tbody>
            </table>
         </center>
      </div>
      )};
      //parts put together
      const BasicExample = () => (
      <Router>
         <div className="App">
            <Route exact path="/" component={home}/>
            <Route path="/0" component={home}/>
            <Route path="/Square4" component={Square4}/>
            <Route path="/Square9" component={Square9}/>
            <Route path="/Square36" component={Square36}/>
         </div>
      </Router>
      )
      export default BasicExample;
