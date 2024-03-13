import { useState} from "react";

import "./App.css";

function App() {

  const [emailState, setEmailState]= useState("")
  const [passwordState, setPasswordState] = useState("")
  const [emailValido, setEmailValido] = useState("")
  const[senhaValida, setSenhaValida] = useState("")

  const emailValidation = (ev) => {

    ev.preventDefault();

    const email = ev.target.email.value
    console.log(email)
      
    try {
      if (
        email.match(/@/) &&
        email.match(/(?<=[a-zA-Z0-9_]{2,})@/) &&
        email.match(/@(?=[a-z]{2,}\.)[a-z]+\.[a-z]+/)&&
        !email.match(/\s/)
        
      ) {
        setEmailValido(true); // Define emailValido como verdadeiro se o email for válido
        setEmailState(email)
      } else {
        setEmailValido(false); // Define emailValido como falso se o email for inválido
      }
    } catch (error) {
      console.error("Erro de validação de email:", error);
      setEmailValido(false); // Em caso de erro, define emailValido como falso

    }
  }
  
  const passwordValidation = (ev) =>{
    ev.preventDefault()
    const password = ev.target.password.value;
    console.log(password)
    try{
      if (password.match(/[a-zA-Z0-9]/) &&
          password.match(/\W{1,}/) &&
          !password.match(/\s/)&&
          password.length >= 8
        ){
          setSenhaValida(true)
          setPasswordState(password)
        }
        else{setSenhaValida(false)}
    }
    catch(error){
      console.error('Erro de validação de senha:', error)
      setSenhaValida(false);
    }
  }

  return (
    <>
      <form
        onSubmit={(ev) => {
          emailValidation(ev);
          passwordValidation(ev);
        }}
      >
        <label>
          <span>email</span>
          <input
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label>
          <span>senha</span>
          <input
            type="password"
            name="password"
            id="password"
          />
        </label>
        <button type="submit"
        >
          Enviar formulário
        </button>
      </form>
      {/* Aqui exibimos o estado emailValido */}
      {emailValido ? <h1>Email válido:{emailState} </h1> : <h1>Email inválido</h1>}
      {senhaValida ? <h1>Senha válida:{passwordState} </h1> : <h1>Senha inválida</h1>}
    </>
  );
}

export default App;
