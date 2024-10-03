  import React from 'react'
  import project from './data/projects.json'


  const Projects = () => {
    return (
      <>
      <div className="container projects my-2">

        <h1>PROJECTS</h1>
        <div className="row">
          {project.map((data)=>(<>
          <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 mx-3'>
          <div className="card bg-dark text-light" style={{width:'18rem'}}>
  <div className="card-body text-center">
  <img src={data.imageSrc} className="card-img-top" alt="..."/>
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <a href="#" className="btn btn-primary">Go Somewhere</a>
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

