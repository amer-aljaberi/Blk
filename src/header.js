import "./header.css";
import one from './image/p12.png'
import two from './image/p1.png'
import three from './image/three.png'
import four from './image/four.png'
import i from './image/i.png'
import f from './image/f.png'
import m from './image/m.png'

function Header() {
  return (
    <>
          

      <section className="he"> 
        <div className="head">
          <img
            className="img"
            src="https://qahwablk.com/wp-content/uploads/2022/10/Qahwa-BLK.webp"
            alt="logo"
          ></img>
    
          <div className="circle"></div>
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="MENU">MENU</a>
            </li>
            <li>
              <a href="LINK">LINK</a>
            </li>
            <li>
              <a href="LINK">LINK</a>
            </li>
          </ul>
         
        </div>
        <div className="circle"></div>
        <div className="content">
        <div className="textBox">
            <h2 > It's not just coffee <br/>It's <span>Qahwa BLK</span></h2>
            <br></br>
            <p>Our coffee combines art and flavor in every cup.
                Immerse yourself in the world of fine coffee where you can discover a variety of flavors and carefully roasted coffee. We are here to offer you exceptional moments with every coffee you drink. 
                Visit us and enjoy an unforgettable experience!</p>
                <a href="#">Learn More</a>
        </div>
        
        <div className="imgBox">
            <img className="imageone" src={one} alt="image"/>
            
        </div>
      </div>
      <ul className="thumb">
        <li><img src={two} ></img > </li>
        <li ><img src={three}></img> </li>
        <li><img src={four}></img> </li>
      </ul>
      <ul className="scialmedia">
<li><a href="#"> <img src={f}></img></a></li>
<li><a href="#"> <img src={i}></img></a></li>
<li><a href="#"> <img src={m}></img></a></li>
      </ul>
<br>
</br>


      </section>
      
    </>
    
  );
}

export default Header;
