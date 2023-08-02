import { Text } from 'react-native';

 const MyApp = () => {
  return (
    <>
      <Text>Hello World!</Text> 
      <Text>IFAL</Text>
      <Gato nome="jubileu" idade= {1}/>
      <Gato nome="Leonino" idade= {2}/>
      <Gato nome="Marie" idade= {3}/>
      
    </>
  );
}

const Gato = ({nome, idade}) =>{
  return <Text>Eu sou um(a) miau e meu nome é {nome.toUpperCase()} e eu tenho {idade} ano(s).</Text>
}

export default MyApp;
