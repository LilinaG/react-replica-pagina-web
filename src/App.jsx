
import './App.css'
import PinkButton from './components/atoms/PinkButton'
import NonColorButton from './components/atoms/NonColorButton'



function App() {

  return (
    <>
      <div> 
        <NonColorButton button_content={'DOWNLOAD'}></NonColorButton>
        <PinkButton button_content={'DOWNLOAD'}></PinkButton>
        
     </div>
    </>
  )
}

export default App
