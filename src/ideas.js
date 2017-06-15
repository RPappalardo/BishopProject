<div className="App-header"  style={{backgroundColor: 'skyblue'}} >
  <img src={unclogo} style={{width: 170, height: 100}} />




</div>

<hr/>
<ul className="header">
  <button class="btn btn-default btn-lg btn-block"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></button>
       <button class="btn btn-default btn-lg btn-block"><Link to="/Square4" style={{ textDecoration: 'none' }}>4-Square</Link></button>
       <button  class="btn btn-default btn-lg btn-block"><Link to="/Square9" style={{ textDecoration: 'none' }}>9-Square</Link></button>
       <button class="btn btn-default btn-lg btn-block"><Link to="/Square36" style={{ textDecoration: 'none' }}>36-Square</Link></button>
</ul>

----------------------------------

<div class="btn-group btn-group-justified">
       <button class="btn btn-default btn-lg btn-block"><Link to="/Square4" style={{ textDecoration: 'none' }}>4-Square</Link></button>
       <button  class="btn btn-default btn-lg btn-block"><Link to="/Square9" style={{ textDecoration: 'none' }}>9-Square</Link></button>
       <button class="btn btn-default btn-lg btn-block"><Link to="/Square36" style={{ textDecoration: 'none' }}>36-Square</Link></button>
</div>



const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>


)



<Route path={`${match.url}/:topicId`} component={Topic}/>
<Route exact path={match.url} render={() => (
  <h3>Please select a topic.</h3>
)}/>
</div>


<img src={unclogo} className="App-logo" alt="logo" />
