import { useState } from 'react';
import { Text, TextInput } from 'react-native';

 const MyApp = () => {
  return (
    <>
      <Text>Hello World!</Text> 
      <Text>IFAL</Text>
      <Gato  idade= {1} />
      <Gato  idade= {2} />
      <Gato idade= {3} />
      <Gato idade= {12}/>
    </>
  );
}

const Gato = ({idade}) => {
    const [nome, setNome]= useState('');
    const [raca, setRaca]= useState('');
    const [comportamento, setComportamento]= useState('');



    return (
      <>
        <TextInput
          onChangeText={(textoNome) =>setNome(textoNome)}
          defaultValue={nome}
          placeholder='Informe o nome do gato...'
          style={{borderWidth: 1, height: 40}}
      />    
      <TextInput
          onChangeText={(textoRaca) =>setRaca(textoRaca)}
          defaultValue={raca}
          placeholder='Informe a raça do gato...'
          style={{borderWidth: 1, height: 40}}
      />   
      <TextInput
          onChangeText={(textoComportamento) =>setComportamento(textoComportamento)}
          defaultValue={comportamento}
          placeholder='Informe o comportamento do gato...'
          style={{borderWidth: 1, height: 40}}
      />     
      <Text>Eu sou um(a) gato(a), meu nome é {nome.toUpperCase()} e eu tenho {idade} {idade === 1 ? "ano" : "anos"}, minha raça é {raca}, e tenho {comportamento} comportamento.</Text>
      </>
    );
}
export default MyApp;
