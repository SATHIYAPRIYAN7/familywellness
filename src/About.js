import React from 'react'
import './About.css'
import Certificate from './Certificate'

function About() {
  const style={
    backgroundColor:"rgb(30,41,59,0.6)",
    minHeight:"100vh",
    borderRadius:"10px"
  }
  return (
    <div style={style} className='About-div'>

      <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1 style={{fontSize:"25px",fontWeight:"bold",color:"white",paddingLeft:"15px",paddingTop:"10px",textDecoration:"underline",textDecorationColor:"yellow",textUnderlineOffset:'10px'}}>About Me</h1>

      <div style={{display:"flex" ,width:"60%",justifyContent:"space-evenly",backgroundColor:"rgb(30,41,59)",marginBottom:"40px",borderRadius:"0px 10px 0px 10px"}}>
        <p style={{color:"white",fontWeight:"bold",textDecoration:"underline",textDecorationColor:"yellow",marginBottom:'15px'}}>About</p>
        <p  style={{color:"white"}}><a >Certification</a></p>
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

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59,0.8)",margin:"30px",borderRadius:"10px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",margin:"5px 0px"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Web Design & Development</p>
            <p>Creating attractive,easy to use websites that work well for businesses and individuals online.</p>
            </div>
        </div></div>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59,0.8)",margin:"30px",borderRadius:"10px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",margin:"5px 0px"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Mobile Apps & Games</p>
            <p>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
            </div>
        </div></div>


        <div style={{width:"400px",backgroundColor:"rgb(30,41,59,0.8)",margin:"30px",borderRadius:"10px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",margin:"5px 0px"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Development Solutions</p>
            <p>Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p>
            </div>
        </div></div>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59,0.8)",margin:"30px",borderRadius:"10px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",margin:"5px 0px"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Marketing & SEO</p>
            <p>Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
            </div>
        </div></div>
        
        
        
        
        
        </div>

        
     </div>

     



     <div style={{color:"white"}}> 
        <h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"bold",paddingTop:"20px"}}>Exploring Creativity</h1>
      

      <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59,0.8)",margin:"30px",borderRadius:"10px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",margin:"5px 0px"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Visual Storytelling</p>
            <p>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
            </div>
        </div></div>

        <div style={{width:"400px",backgroundColor:"rgb(30,41,59,0.8)",margin:"30px",borderRadius:"10px"}}>
        <div style={{display:"flex",width:"90%",justifyContent:"space-between",margin:"5px 0px"}}>
            <div style={{paddingLeft:"10px"}}>icon</div>
            <div style={{paddingLeft:"100px"}}>
            <p>Digital Content Creation</p>
            <p>Creatiing dynamic digital content, such as 3D models, graphics or animations.</p>
            </div>
        </div></div>


        

        
        
        
        
        
        
        </div>

        
     </div>
     
     




    </div>
  )
}

export default About