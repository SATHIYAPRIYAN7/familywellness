import React from 'react'
import './About.css'
import Certificate from './Certificate'

function About() {
  const style={
    backgroundColor:"rgb(30,41,59,0.6)",
    minHeight:"100vh",
    
  }
  return (
    <div style={style} className='About-div'>

      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1 style={{fontSize:"25px",fontWeight:"bold",color:"white",}}>About Me</h1>

      <div style={{display:"flex" ,width:"60%",justifyContent:"space-evenly",backgroundColor:"rgb(30,41,59)"}}>
        <p style={{color:"white",fontWeight:"bold",textDecoration:"underline",textDecorationColor:"yellow"}}>About</p>
        <p  style={{color:"white"}}><a href={<Certificate />}>Certification</a></p>
        <p style={{color:"white"}}>Projects</p>
        <p style={{color:"white"}}>More</p>
        <p style={{color:"white"}}>Contact</p>
      </div></div>

      <div style={{color:"white",marginTop:"60px",backgroundColor:"rgb(30,41,59)",maxWidth:"80%",margin:"auto",padding:"10px",borderRadius:"10px"}}>
        <p> Hello there! My name is sathiyapriyan and I'm from India.As a Full-Stack Software developer,I specialize in creating visually appealing websites,apps and mobile games.My passion for graphics design isn't just  hobby, it's a key ingrident in every project I work on.</p>
        <p style={{textAlign:"center",marginTop:"10px",color:"black",fontWeight:"bold",opacity:"0.6"}}>Show more</p>
      </div>
          

     <div style={{color:"white"}}> 
        <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"bold",paddingTop:"20px"}}>Primary Focus</h1>
      

      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59)",margin:"30px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Web Design & Development</p>
            <p>Creating attractive,easy to use websites that work well for businesses and individuals online.</p>
            </div>
        </div></div>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59)",margin:"30px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Web Design & Development</p>
            <p>Creating attractive,easy to use websites that work well for businesses and individuals online.</p>
            </div>
        </div></div>


        <div style={{width:"400px",backgroundColor:"rgb(30,41,59)",margin:"30px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Web Design & Development</p>
            <p>Creating attractive,easy to use websites that work well for businesses and individuals online.</p>
            </div>
        </div></div>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59)",margin:"30px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Web Design & Development</p>
            <p>Creating attractive,easy to use websites that work well for businesses and individuals online.</p>
            </div>
        </div></div>
        
        
        
        
        
        </div>

        
     </div>

     



     <div style={{color:"white"}}> 
        <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"bold",paddingTop:"20px"}}>Primary Focus</h1>
      

      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59)",margin:"30px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Web Design & Development</p>
            <p>Creating attractive,easy to use websites that work well for businesses and individuals online.</p>
            </div>
        </div></div>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59)",margin:"30px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Web Design & Development</p>
            <p>Creating attractive,easy to use websites that work well for businesses and individuals online.</p>
            </div>
        </div></div>


        

        
        
        
        
        
        
        </div>

        
     </div>
     
     




    </div>
  )
}

export default About