import { Text } from 'react-native';

 const MyApp = () => {
  return (
    <>
      <Text>Hello World!</Text> 
      <Text>IFAL</Text>
      <Gato/>
    </>
  );
}

const Gato = () =>{
  return <Text>Eu sou um miau.</Text>
}

export default MyApp;
