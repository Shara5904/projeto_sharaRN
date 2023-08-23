import { useState } from 'react';
import { Text, TextInput } from 'react-native';

 const MyApp = () => {
  return (
    <>
      <Text>Hello World!</Text> 
      <Text>IFAL</Text>
      <Gato nome="jubileu" idade= {1}/>
      <Gato nome="Leonino" idade= {2}/>
      <Gato nome="Marie" idade= {3}/>

      
      <Gato nome="Marie" idade= {12}/>
    </>
  );
}

const Gato = ({idade}) => {
    const [nome, SetNome]= useState('');




    return (
      <>
        <TextInput
          onchengeText={(texto) =>SetNome(texto)}
          defaultValue={nome}
          placeholder='Informe o nome do gato...'
          style={{borderWidth: 1, height: 40}}
      />      
      <Text>Eu sou um(a) gato(a), meu nome é {nome.toUpperCase()} e eu tenho {idade} {idade === 1 ? "ano" : "anos"}.</Text>
      </>
    );
}
export default MyApp;
