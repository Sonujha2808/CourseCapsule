import syll from '../photo/syll.png';
import 'bootstrap-icons/font/bootstrap-icons.css' ;
import './Syllabus.css';
import Sem1 from '../Docu/Sem1.pdf';
import Sem2 from '../Docu/Sem-2.pdf';
import Sem3 from '../Docu/Sem-3.pdf';
import Sem4 from '../Docu/Sem-4.pdf';
import Sem5 from '../Docu/Sem-5.pdf';
import Sem6 from '../Docu/Sem-6.pdf';
function Syllabus() {
    return (
      <div className="main">
   <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src= {syll}   className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title-1">Semester - I</h5>
      <p className="card-text"><button className='btn' ><a href ={Sem1} target='_blank' ><h3>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h3></a></button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={syll} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title-1">Semester - II</h5>
      <p className="card-text"><button className='btn'><a href ={Sem2}  target='_blank' ><h3>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h3></a></button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={syll} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title-1">Semester - III</h5>
<p className="card-text"><button className='btn'><a href ={Sem3}  target='_blank' ><h3>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h3></a></button></p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={syll} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title-1">Semester - IV</h5>
      <p className="card-text"><button className='btn'><a href ={Sem4}  target='_blank' ><h3>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h3></a></button></p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src={syll} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title-1">Semester - V</h5>
      <p className="card-text"><button className='btn'><a href ={Sem5} target='_blank' ><h3>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h3></a></button></p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src={syll} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title-1">Semester - VI</h5>
      <p className="card-text"><button className='btn'><a href ={Sem6}  target='_blank' ><h3>DOWNLOAD<i className="bi bi-file-earmark-arrow-down-fill"></i></h3></a></button></p>
      </div>
    </div>
  </div>
</div>
</div>



    );
}
export default Syllabus;
