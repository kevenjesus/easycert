import Body from "./components/body/Body";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
import Input from "./components/input/Input";
import Button from "./components/Button/Button";
import Link from "./components/Link/Link";

function App() {
  return (
    <Body>
      <Title/>
      <Card>
      <Input/>
      <Input/>
      <Link></Link>
    <Button>Entrar</Button>
    <Link>ainda nao possui uma conta?</Link>
      </Card>
       
    </Body>
   
    
   
  );
}

export default App;
