
import 'bootstrap/dist/css/bootstrap.css'; 
import '../pages/styles/Home.css';
import image1 from './images/slide-4.jpg';
import image2 from './images/slide-5.jpg';
import image4 from './images/slide-3.jpeg';
import image5 from './images/slide-4.jpg';
import image6 from './images/Employe.png';
import image7 from './images/face1.jpg';
import image8 from './images/my face.jpg';
import image9 from './images/first.jpg';
import image10 from './images/first.jpg';
import image11 from './images/service.png';
const Home = () => {
return(
<>
<div className="container-fluid bg-body-secondary">
<div className="row"> 
<div className="col-12"> 
<div className="carroussel">    
  <div className="images"> 
  <img src={image1} className="image" alt=""/>  
<img src={image2} className="image" alt=""/>
<img src={image4} className="image" alt=""/>
<img src={image5} className="image" alt=""/>
  </div>
</div>
<div className='title'>
    <h1 className='title-1'>Are you looking for a career change or your dream job?</h1>
    <p className='text-1'>Check out our job openings.</p>
</div>
  </div>  
  <div className='col-6'>
  <img src={image6} className="image-6" alt=""/> 
    </div>    
    <div className='col-6'>
        <div className='projet'>
    <h1 className='title-2'>Get to know our management team</h1>
    <p className='text-2'>Talent is a crucial element in any organization, including ours.</p>
    <p className='text-3'>
    Proforce Personnel is dedicated to hiring and training the best recruiters in our agency</p>
    <p className='text-4'> Our unique approach enables our recruiters to provide personalized and effective service focused on results.</p>
    <p className='text-5'>Contact our recruiting team today so we can help grow your business!</p> 
    <h3 className='title-3'>Reliable & Cost Efficiant
    Recruitment Agency</h3>  
    <p className='text-6' >Recruitment Agency: We are a leading recruitment agency specializing in sourcing top talent across various industries</p>
    <p className='text-7'>Our mission is to connect skilled professionals with exceptional career opportunities </p>
    <p className='text-8'>while assisting companies in achieving their staffing goals.</p>
        
    </div>
        </div> 
        <div className='col-12'>
           <h1 className='title-4' >Our Dream team!</h1>
           <h2 className='title-5' >Get to know our management team.</h2>
           <div className='texts'>
           <p className='text-9'>And train with us! Our team at Adc Transition not only excels in management and recruitment but also offers comprehensive training programs.</p>
           <p className='text-10'>We believe in empowering individuals with the skills and knowledge they need to thrive in their careers.</p>
           <p className='text-11'>Whether you're looking to enhance your recruitment strategies or develop leadership skills, </p>
           <p className='text-12'>our training sessions are designed to cater to diverse professional needs. </p>          
           </div>
           </div> 
           <div className='col-6' >             
             <img src={image7} className="image-7" alt=""/>
             <img src={image10} className="image-9" alt=""/> 
             <span className='plus-1'>Adc</span>
             <div className='sarra' >
             <h2 className='title-6'>Sarra Youssef</h2>
             <p className='text-13'>Partner, Recruiting Director</p>
             </div>
           
           </div>
           <div className='col-6'>  
           <span className='plus-2'>Transition</span>                    
           <img src={image9} className="image-9" alt=""/>             
           <img src={image8} className="image-face" alt=""/>            
           <div className='mahmoud' >
             <h2 className='title-7'>Mahmoud</h2>
             <p className='text-14'>Director</p>             
             </div>        
     </div>
     <div className='col-12'>
<h1 className='services'>Services</h1>
     </div>
     <div className='col-4'>
     <div className="card-3">
  <div className="row">
    <div className="col-md-4">
      <img src={image11} className="image-11" alt="..."/>
    </div>    
      <div className="card-body1">        
        <h3 className="card-title1">Recruiting</h3>       
        <p className="card-text">Our Dream Team! At Adc Transition, we excel in bridging the gap between talented professionals and top-tier companies.</p>
        <p className="card-text">Our management and recruitment teams are dedicated to understanding the unique needs of both employers and job seekers.</p>
        <p className="card-text">We meticulously source and place the best talent, ensuring a perfect match for every role.</p>
        <p className="card-text">Additionally, we offer comprehensive training programs to help individuals and organizations thrive..</p>
        <p className="card-text"><small class="text-body-secondary">Join us and experience a personalized.</small></p>
        <button className="btn btn-primary form-control panier " type="submit">See more</button>
      </div>
     
  </div>
</div>
        </div>   
        <div className='col-4'>
     <div className="card-3">
  <div className="row">
    <div className="col-md-4">
    <img src={image11} className="image-11" alt="..."/>
    </div>    
      <div className="card-body2">
                <h3 className="card-title">Formation</h3>       
        <p className="card-text">we are not only a premier recruitment agency but also a leader in professional training and development.</p>
        <p className="card-text"> Our comprehensive training programs are designed to equip individuals and organizations with the skills and knowledge needed to excel in todays competitive job market.</p>
        <p className="card-text">From recruitment best practices to leadership development and industry-specific skills, our training sessions are tailored to meet the unique needs of our clients.</p>
                          <p className="card-text"><small class="text-body-secondary">Join us and benefit from expert-led workshops, personalized coaching, and cutting-edge training methodologies.</small></p>
        <button className="btn btn-primary form-control panier-2 " type="submit">See more</button>
      </div>
     
  </div>
</div>
        </div>  
        <div className='col-4'>
     <div className="card-3">
  <div className="row">
    <div className="col-md-4">
    <img src={image11} className="image-11" alt="..."/>
    </div>    
      <div className="card-body1">        
        <h3 className="card-title1">Our project</h3>       
        <p className="card-text1">we pride ourselves on our innovative projects that set new standards in recruitment and professional training.</p>
        <p className="card-text1">Our recent initiatives include successful executive search campaigns, industry-specific hiring drives, and digital transformation projects that modernize recruitment strategies.</p>
        <p className="card-text1">Additionally, our training programs have been instrumental in developing leadership skills and industry-specific expertise among professionals.</p>    
        <p className="card-text1"><small class="text-body-secondary">Each project reflects our commitment to excellence, personalized service, and achieving tangible results.</small></p>
                        <button className="btn btn-primary form-control panier " type="submit">See more</button>
      </div>
     
  </div>
</div>
        </div> 
        <div className='col-12'>
            <h3 className='contact-us'>Contact us</h3>
            <h1 className='style'>Feel Free to Get in Touch
            with Adc transition</h1>
            <p className='contact-1'>Ready to take the next step? Whether you're seeking top talent or looking to advance your career, our team at Proforce Personnel is here to help.</p>
        <p className='contact-1'>Contact us today to learn more about our personalized recruitment and training services.</p>
        <p className="contact-1"><small class="small-3">Let s work together to achieve your goals!.</small></p>
        </div>
        <div className='col-6'>
           
        </div>
        <form className="row g-3 bg-primary-subtle group">
  <div className="col-md-6">
  <label htmlFor="inputSurname" className="form-label">SurName:</label>
  <input type="text" className="form-control surname" id="inputSurname"/>
  <label htmlFor="inputName" className="form-label">Name:</label>
  <input type="text" className="form-control name" id="inputName"/></div>
<div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email:</label>
    <input type="email" className="form-control email" id="inputEmail4"/> 
      <label htmlFor="inputPassword4" className="form-label">Password:</label>
    <input type="password" className="form-control password" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label1">Address:</label>
    <input type="text" className="form-control Adresse" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputDiploms" className="form-label dip-1">Diploms:</label>
    <input type="text" className="form-control dip" id="inputDiploms" placeholder="diploms,certificate"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputRole" className="form-label role-1">Role:</label>
    <input type="text" className="form-control role" id="inputRole"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label level-1">Level:</label>
    <select id="inputLevel" className="form-select1 level">
      <option selected>Level-1</option>
      <option>Level-2</option>
    </select>
  </div>
  <div class="col-md-4">
    <label htmlFor="inputZip" className="form-label age-1">Age:</label>
    <input type="text" className="form-control age" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> 
  <div className="col-12">
    <button type="submit" className="btn btn-primary inscriv">First Inscriv</button>
  </div>
</form>
<iframe  width="560"     
height="450" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

</div>
</div>
    


</>

)

}
export default Home;