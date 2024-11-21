
import './One.css';
import white from "../photo/white.png";
import dsa23 from "../Docu/dsa23.pdf";
import AppMath23 from "../Docu/AppMath23.pdf";
function Two(){
    return(<>
   <hr/>
   <h5 className='year'>P.Y.Q-2024</h5>
   <hr/>
 <div className="row row-cols-2 row-cols-md-5 g-2">
  <div className="col">
    <div className="ca">     
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">DSA </h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button>        
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca"> 
      <img src={white}className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Php</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca">   
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">DBMS</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca">   
      <img src={white}className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Enviroment Study</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="ca">  
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Applied Mathematics</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
</div>

<hr/>
   <h5 className='year'>P.Y.Q-2023</h5>
   <hr/>
 <div className="row row-cols-2 row-cols-md-5 g-2">
  <div className="col">
    <div className="ca">
     
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">DSA </h5>
        <p className="card-text">
        <button className='btn'><a href ={dsa23} target='_blank'><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button>        
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca">
  
      <img src={white}className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Php</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca">
   
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">DBMS</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca">
   
      <img src={white}className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Environment Study</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="ca">   
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Applied Mathematics</h5>
        <p className="card-text">
        <button className='btn'><a href ={AppMath23} target='_blank'><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
</div>
</>)
}
export default Two;