
import './One.css';
import white from "../photo/white.png";
import CN24 from "../Docu/CN24.pdf";
import COA24 from "../Docu/COA24.pdf";
import HV24 from "../Docu/HV24.pdf";
import oops24 from "../Docu/oops24.pdf";
import python24 from "../Docu/python24.pdf";


function Three(){
    return(<>
   <hr/>
   <h5 className='year'>P.Y.Q-2024</h5>
   <hr/>
 <div className="row row-cols-2 row-cols-md-5 g-2">
  <div className="col">
    <div className="ca">     
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">C++ </h5>
        <p className="card-text">
        <button className='btn'><a href ={oops24} target='_blank'><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button>        
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca"> 
      <img src={white}className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">COA</h5>
        <p className="card-text">
        <button className='btn' ><a href ={COA24} target='_blank'><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca">   
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Python</h5>
        <p className="card-text">
        <button className='btn'><a href ={python24} target='_blank' ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="ca">   
      <img src={white}className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Computer Networks</h5>
        <p className="card-text">
        <button className='btn'><a href ={CN24} target='_blank'><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="ca">  
      <img src={white} className="ca-img" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Principal of management</h5>
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
        <h5 className="card-title">Human Values</h5>
        <p className="card-text">
        <button className='btn'><a href ={HV24} target='_blank' ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
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
        <h5 className="card-title">C++ </h5>
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
        <h5 className="card-title">C.O.A</h5>
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
        <h5 className="card-title">Python</h5>
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
        <h5 className="card-title">Computer Network</h5>
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
        <h5 className="card-title">Principal of management</h5>
        <p className="card-text">
        <button className='btn'><a href ="#" ><h6>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h6></a></button> 
        </p>
      </div>
    </div>
  </div>
</div>
</>)
}
export default Three;