import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from 'axios';

const CadastroCliente: React.FC = () => {
    const [clientes, setCliente] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [foto, setFoto] = useState<any>('');

    const CadastrarProduto = async () => {
       try{
       const formData = new FormData();
       formData.append('nome', nome);
       formData.append('endereco', endereco);
       formData.append('telefone', telefone);
       formData.append('email',email);
       formData.append('cpf',cpf);
       formData.append('password',password);
       formData.append('foto', {
        uri: foto,
        type: 'image/jpeg',
        name: new Date() + '.jpg'
    });

       const response =await axios.post('http://10.137.11.206:8000/api/clientes',formData, {
           headers: {
               'Content-Type': 'multipart/form-data'
           }
       });

       console.log(response.data)
     } catch(error) {
       console.log(error);
   }
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            inclusedBase64: false,
            maxHeigh: 2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            }else if(response.error){
                console.log('erro ao abrir a camera');
            }else {
                let fotoUri = response.uri || response.assets?.[0]?.uri;
                setFoto(fotoUri);
                console.log(fotoUri);
            }
        });
     }

     const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response)=> {
            if(response.didCancel){
                console.log('cancelado pelo usuário');
            } else if(response.error){
                console.log('erro ao abrir a galeria');
            } else {
                let fotoUri = response.uri || response.assets?.[0]?.uri;
                setFoto(fotoUri);
            }
        })
     }


   return (
       <View style={styles.container}>
           <StatusBar backgroundColor="#00BFFF" barStyle="light-content" />
           <View style={styles.header}>
               <Text style={styles.headerText}>VSBurger</Text>
           </View>
           <View style={styles.form}>
               <TextInput
               style={styles.input}
               placeholder="Nome"
               value={nome}
               onChangeText={setNome} />

               <TextInput
               style={styles.input}
               placeholder="Endereço"
               value={endereco}
               onChangeText={setEndereco} />

               <TextInput
               style={styles.input}
               placeholder="Telefone"
               value={telefone}
               onChangeText={setTelefone} />

               <TextInput
               style={styles.input}
               placeholder="Email"
               value={email}
               onChangeText={setEmail} />

               <TextInput
               style={styles.input}
               placeholder="CPF"
               value={cpf}
               onChangeText={setCpf} />

               <TextInput
               style={styles.input}
               placeholder="senha"
               value={password}
               onChangeText={setPassword}
               secureTextEntry={true} />

               <TextInput
                style={styles.input}
                placeholder="Foto"
                value={foto}
                onChangeText={setFoto} 
                multiline />

               <View style={styles.alinhamentoImagemSelecionada}>
                   {foto ? <Image source ={{uri: foto}} style={styles.imagemSelecionada} /> : null}
               </View>
               <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                   <Text style={styles.imageButtonText}>Selecionar Imagem</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.imageButton}  onPress={abrirCamera}>
                   <Text style={styles.imageButtonText}>Tirar Foto</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={CadastrarProduto}>
                   <Text style={styles.buttonText}>Cadastrar-se</Text>
               </TouchableOpacity>
           </View>

       </View>
   );
}

   const styles = StyleSheet.create({
       container: {
           flex: 1
       },
       header: {
           backgroundColor: '#00BFFF',
           paddingVertical: 10,
           alignItems: 'center'
       },
       headerText: {
           fontSize: 20,
           fontWeight: 'bold',
           color: 'white',
       },
       form: {
           padding: 10,
           backgroundColor: 'whithe',
           marginBottom:10,
       },
       input: {
           height: 40,
           borderColor: '#00BFFF',
           borderWidth: 1,
           marginBottom: 10,
           paddingHorizontal: 10,
           borderRadius: 10
       },
       imageButton: {
           backgroundColor: '#00BFFF',
           padding: 10,
           borderRadius: 5,
           alignItems: 'center',
           marginBottom: 10,
       },
       imageButtonText: {
           color: 'white',
           fontWeight: 'bold',
       },
       imagemSelecionada: {
           width: 200,
           height: 200,
           resizeMode: 'cover',
           borderRadius: 5,
           marginBottom: 10,
       },
       alinhamentoImagemSelecionada: {
           alignItems: 'center'
       },
       button: {
           backgroundColor: '#00BFFF',
           padding: 10,
           borderRadius: 5,
           alignItems: 'center'
       },
       buttonText: {
           color: 'white',
           fontWeight: 'bold',

       }
   });

export default CadastroCliente;