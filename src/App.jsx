import './App.css';
import elephant from "./images/elephant.jpeg";



function App(props) {
  // code here
  let imgData = [...props.myData]
  console.log(imgData)
  return (
   <>
   <h1>Kalvium Gallery</h1>
   <div className='img-div'>
   {
     imgData.map((item, index)=>{
      return(<div key={index}>
        <img src={item.img} alt="" />
      </div>)
     }) 
    } 
   </div>
     
   </>
  )

}

export default App;
