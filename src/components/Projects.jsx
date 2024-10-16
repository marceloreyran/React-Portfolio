  import React from 'react'
  import project from './data/projects.json'


  const Projects = () => {
    return (
      <>
      <div className="container projects my-2" id="projects">

        <h4>PROJECTS</h4>
        <div className="row d-flex justify-content-center align-items-center">
          {project.map((data)=>(<>
          <div key={data.id} className='my-4 col-sm-6 col-md-4 col-lg-3 mx-5' >
          <div className="card bg-dark text-light" style={{width:'18rem', border:'1px solid yellow', boxShadow:'5px 5px 10px 0px rgba(101, 175, 10, 0.5)'}} data-aos="flip-right" data-aos-duration="1000">
            
            <div className="img d-flex justify-content-center align-items-center p-3">
            <img src={data.imageSrc} className="card-img-top" alt="..."
            style={{
              width: '250px',
              height: '200px',
              border:'2px solid yellow',
              borderRadius: '10px'
            }}/>
            </div>
  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href={data.source} className="btn btn-primary mx-3 " target="_blank">Github</a>
    <a href={data.link} className="btn btn-warning" target="_blank">Page</a>
  </div>
</div>
          </div>
          </>))}
        </div>

      </div>
      </>
    )
  }

  export default Projects

