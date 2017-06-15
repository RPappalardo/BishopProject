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

  <div >
  <center>
    <div>
    <h2 style={{ backgroundColor: 'skyblue' }}>Universal Core Communication Systems</h2>
      <img src={unclogo} style={{width: 170, height: 100}} />
</div>
<br/>
  <button><h5>4 Square Universal Core Communication Book</h5>
  <Link to="/Square4" style={{ textDecoration: 'none' }}><input type="image" src={SquareNum4} ></input></Link>
</button>
{"\n"}
<button><h5>9 Location Universal Core Communication Book</h5>
  <Link to="/Square9" style={{ textDecoration: 'none' }}><input type="image" src={SquareNum9}></input></Link>
</button>
{"\n"}
<button><h5>36 Location Universal Core Communication Board</h5>
  <Link to="/Square36" style={{ textDecoration: 'none' }}><input type="image" src={SquareNum36} ></input></Link>
</button>

</center>
    </div>
)



// first section
const Square4 = () => (
  <div>
    <div>

  <div>
    <center>
<button onclick="speechSynthesis.speak(su)" value="play" style={{padding: 0 }} id ="button">
  <h2 style={{height: 5}}>Like</h2>
 <input type="image" src={like} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Like";
      //  speechSynthesis.speak(su);

    </script>

</button>
{"\n"}

<button onclick="speechSynthesis.speak(su)" value="play" style={{padding: 0 }}>
  <h2 style={{height: 5}}>Want</h2>
 <input type="image" src={want} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Want";
      //  speechSynthesis.speak(su);

    </script>


</button>

<br />
<button onclick="speechSynthesis.speak(su)" value="play" style={{padding: 0 }}>
  <h2 style={{height: 5}}>Not</h2>
<input type="image" src={not} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Not";
      //  speechSynthesis.speak(su);

    </script>


</button>
{"\n"}
<button onclick="speechSynthesis.speak(su)" value="play" style={{padding: 0 }}>
  <h2 style={{height: 5}}>Go</h2>
<input type="image" src={go} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Go";
      //  speechSynthesis.speak(su);

    </script>


</button>
{"\n"}
</center>

</div>
</div>
  </div>

)





//second section
const Square9 = () => (
  <div>
  <center><h2>9 Square Universal Core Communication Book</h2></center>
    <div>

  <div>
    <center>
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={like} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Like";
      //  speechSynthesis.speak(su);

    </script>

<h2>Like</h2>
</button>
{"\n"}

<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={want}></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Want";
      //  speechSynthesis.speak(su);

    </script>

<h2>Want</h2>
</button>
{"\n"}
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={get} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Get";
      //  speechSynthesis.speak(su);

    </script>

<h2>Get</h2>
</button>

<br />
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={not}></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Not";
      //  speechSynthesis.speak(su);

    </script>

<h2>Not</h2>
</button>
{"\n"}
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={go} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Go";
      //  speechSynthesis.speak(su);

    </script>

<h2>Go</h2>
</button>
{"\n"}
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={look} ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Look";
      //  speechSynthesis.speak(su);

    </script>

<h2>Look</h2>
</button>


<br />
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={I1}  ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "I";
      //  speechSynthesis.speak(su);

    </script>

<h2>I</h2>
</button>
{"\n"}
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={he}  ></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "He";
      //  speechSynthesis.speak(su);

    </script>

<h2>He</h2>
</button>
{"\n"}
<button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={open}></input>
<script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Open";
      //  speechSynthesis.speak(su);

    </script>

<h2>Open</h2>
</button>
</center>
<br />

</div>
</div>
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
  <center><h2>36 Square Universal Core Communication Book</h2></center>
    <div>

  <div>
    <center>
  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={like} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "like";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Like</h2>
  </button>
  {"\n"}

  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={want} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Want";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Want</h2>
  </button>
  {"\n"}
  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={get} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Get";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Get</h2>
  </button>
  {"\n"}
  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={make} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Make";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Make</h2>
  </button>
  {"\n"}

  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={good} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Good";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Good</h2>
  </button>
  {"\n"}

  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={more} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Move";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Move</h2>
  </button>

  <br />
  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={not} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Not";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Not</h2>
  </button>
  {"\n"}
  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={go} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Go";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Go</h2>
  </button>
  {"\n"}
  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={look} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Look";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Look</h2>
  </button>
  {"\n"}

  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={turn} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Turn";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Turn</h2>
  </button>
  {"\n"}

  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={help} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Help";
      //  speechSynthesis.speak(su);

    </script>
  <h2>Help</h2>
  </button>
  {"\n"}

  <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={different} height = "180" width= "180"></input>
  <script>
        var su = new SpeechSynthesisUtterance();
        su.lang = "en";
        su.text = "Different";
      //  speechSynthesis.speak(su);

    </script>

  <h2>Different</h2>
  </button>
  <br />

    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={I1} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "I";
        //  speechSynthesis.speak(su);

      </script>

    <h2>I</h2>
    </button>
    {"\n"}

    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={he} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "He";
        //  speechSynthesis.speak(su);

      </script>

    <h2>He</h2>
    </button>
    {"\n"}
    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={open} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "Open";
        //  speechSynthesis.speak(su);

      </script>

    <h2>Open</h2>
    </button>
  {"\n"}
    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={do1} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "Do";
        //  speechSynthesis.speak(su);

      </script>

    <h2>Do</h2>
    </button>
    {"\n"}

    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={put} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "Put";
        //  speechSynthesis.speak(su);

      </script>

    <h2>Put</h2>
    </button>
    {"\n"}

    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={same} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "Same";
        //  speechSynthesis.speak(su);

      </script>

    <h2>Same</h2>
    </button>

    <br />
    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={you} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "You";
        //  speechSynthesis.speak(su);

      </script>

    <h2>You</h2>
    </button>
    {"\n"}
    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={she} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "She";
        //  speechSynthesis.speak(su);

      </script>

    <h2>She</h2>
    </button>
    {"\n"}
    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={that}  height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "That";
        //  speechSynthesis.speak(su);

      </script>

    <h2>That</h2>
    </button>
  {"\n"}

    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={up} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "Up";
        //  speechSynthesis.speak(su);

      </script>

    <h2>Up</h2>
    </button>
    {"\n"}

    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={all} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "All";
        //  speechSynthesis.speak(su);

      </script>

    <h2>All</h2>
    </button>
    {"\n"}

    <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={some} height = "180" width= "180"></input>
    <script>
          var su = new SpeechSynthesisUtterance();
          su.lang = "en";
          su.text = "Some";
        //  speechSynthesis.speak(su);

      </script>

    <h2>Some</h2>
    </button>
    <br/>

      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={it} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "it";
          //  speechSynthesis.speak(su);

        </script>

      <h2>It</h2>
      </button>
      {"\n"}

      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={here} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "Here";
          //  speechSynthesis.speak(su);

        </script>

      <h2>Here</h2>
      </button>
      {"\n"}
      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={in1} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "In";
          //  speechSynthesis.speak(su);

        </script>

      <h2>In</h2>
      </button>
  {"\n"}
      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={on} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "On";
          //  speechSynthesis.speak(su);

        </script>

      <h2>On</h2>
      </button>
      {"\n"}

      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={can} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "Can";
          //  speechSynthesis.speak(su);

        </script>

      <h2>Can</h2>
      </button>
      {"\n"}

      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={finish} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "Finished";
          //  speechSynthesis.speak(su);

        </script>

      <h2>Finished</h2>
      </button>

      <br />
      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={where} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "Where";
          //  speechSynthesis.speak(su);

        </script>

      <h2>Where</h2>
      </button>
      {"\n"}
      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={what} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "What";
          //  speechSynthesis.speak(su);

        </script>

      <h2>What</h2>
      </button>
      {"\n"}
      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={why}  height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "Why";
          //  speechSynthesis.speak(su);

        </script>

      <h2>Why</h2>
      </button>

  {"\n"}
      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={who} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "Who";
          //  speechSynthesis.speak(su);

        </script>

      <h2>Who</h2>
      </button>
      {"\n"}

      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={when} height = "180" width= "180" ></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "When";
          //  speechSynthesis.speak(su);

        </script>

      <h2>When</h2>
      </button>
      {"\n"}

      <button onclick="speechSynthesis.speak(su)" value="play"> <input type="image" src={stop} height = "180" width= "180"></input>
      <script>
            var su = new SpeechSynthesisUtterance();
            su.lang = "en";
            su.text = "Stop";
          //  speechSynthesis.speak(su);

        </script>

      <h2>Stop</h2>
      </button>

  </center>
  <br />

  </div>
  </div>
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
