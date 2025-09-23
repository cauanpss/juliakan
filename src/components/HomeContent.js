import { Link } from "react-router-dom" 

export default function HomeContent() {
   
    function redirecionamentoExterno() {
        const resposta = window.confirm("Você está sendo redirecionado para um link externo. Deseja continuar?");
        if(resposta) {
            window.open("https://juliakan.hotglue.me/", "_blank")    
        }
    }
   
    return (
    
  <main>
    
      <div class="logo">
          <h1>Julia Kan</h1>
      </div>  
      <div class="home_menu">
          <div class="button_container">
            <button onClick = {redirecionamentoExterno} class="visual_arts">Artes Visuais</button>
            
            <div class="separador">/</div>
              
            <Link to="/projects">  
                <button class="performing_arts"> Artes cênicas</button>
            </Link>
          
          </div>
      </div>        
  </main>

  )
}