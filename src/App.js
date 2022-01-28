import './App.css';
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'


function App() {
  return (
    <div className="App">

<div class="container">

<img src={logo} id="logo" />
<img src={menu} id="menu" />

<h1>Say hello to ReactJS</h1>

<p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>

<button>Awesome!</button> 
</div>

<div class="cards">


<img src={icon1} alt="icon1" /><span><b>Declarative</b></span>
<img src={icon2} alt="icon2" /><b>Components</b>
<img src={icon3} alt="icon3" /><b>Single-Way</b>
<img src={icon4} alt="icon4" /><b>JSX</b>

</div>

</div>

  );
  
}
export default App;
