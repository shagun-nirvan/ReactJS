import Sha from "./Sha"

function App(){
  return(
    <>                  
    <h1>Shagun Nirvan</h1>   
    <Sha />
    <p>new para</p> 
    </>          //gives error as we can export only one element so we can use div tag
   )                  // <> </> known as fragment used to wrap tags in one tag
}

export default App;