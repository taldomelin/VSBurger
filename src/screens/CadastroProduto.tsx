import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import axios from "axios";

const CadastroProduto: React.FC = () => {
        const [produtos, setProdutos] = useState<Produto[]>([]);
        const [nome, setNome] = useState<string>('');
        const [preco, setPreco] = useState<string>('');
        const [ingredientes, setIngredientes] = useState<string>('');
        const [imagem, setImagem] = useState<any>('');

        const CadastroProduto = async () => {
            try{
            const formData = new FormData();
            formData.append('nome',nome);
            formData.append('preco',preco);
            formData.append('ingredientes',ingredientes);
            formData.append('imagem',{
                uri:imagem,
                type: 'imagem/jpeg',
                name: new Date() + '.jpg'
            });

            const response = await axios.post ('http://10.137.11.206:8000/api/produtos',formData,{
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            });
        }catch(error){
            console.log(error);
        }

        }

        const abrirCamera = () => {
                const   options = {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 2000,
                    maxWidht: 2000
                };

                launchCamera(options, response => {
                    if(response.didCancel){
                        console.log('cancelado pelo usuario');
                    }else if (response.error){
                        console.log('erro ao abrir a camera');
                    }else {
                        let imagemUri = response.uri || response.assets?.[0]?.uri;
                        setImagem(imagemUri);
                        console.log(imagemUri);
                    }
                });
        }

        const selecionarImagem = () => {
            const options = {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 2000,
                maxWidht:2000
            };

            launchImageLibrary(options, (response)=>{
                if(response.didCancel){
                    console.log('cancelado pelo usuario');
                }else if(response.error) {
                    console.log('erro ao abrir a galeria');
                }else {
                    let imageUri = response.uri || response.assets?.[0]?.uri;
                    setImagem(imageUri);
                }
            });
        }



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Top Food</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={nome}
                onChangeText={setNome} />

                <TextInput
                style={styles.input}
                placeholder="Preço"
                value={preco}
                onChangeText={setPreco}/>
                
                <TextInput
                style={styles.input}
                placeholder="Ingredientes"
                value={ingredientes}
                onChangeText={setIngredientes}
                multiline/>
                <View style={styles.alinhamentoImagemSelecionada}>
                    {imagem ? <Image source={{ uri : imagem }} style={styles.imageSelecionada} /> : null}
                </View>
                <TouchableOpacity style={styles.imageButton} onPress={selecionarImagem}>
                    <Text style={styles.imagemButtonText}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageButton} onPress={abrirCamera}>
                    <Text style={styles.imagemButtonText}>Tirar Foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={CadastroProduto}>
                    <Text style={styles.buttonText}>Cadastrar Produto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
    const styles = StyleSheet.create({
        container:{
            flex:1
        },
        header:{
            backgroundColor:'red',
            paddingVertical:10,
            alignItems: 'center'
        },
        headerText:{
            fontSize:20,
            fontWeight: 'bold',
            color: 'white'
        },
        form:{
            padding:10,
            backgroundColor: '#f0f0f0',
            marginBottom: 10
        },
        input:{
            height:40,
            borderColor:'gray',
            borderWidth:1,
            marginBottom:10,
            paddingHorizontal:10,
            borderRadius:10
        },
        imageButton:{
            backgroundColor:'red',
            padding:10,
            borderRadius:5,
            alignItems:'center',
            marginBottom:10
        },
        imagemButtonText:{
            color:'white',
            fontWeight:'bold'
        },
        imageSelecionada:{
            width:200,
            height:200,
            resizeMode:'cover',
            borderRadius:5,
            marginBottom:10
        },
        alinhamentoImagemSelecionada:{
            alignItems:'center'
        },
        button:{
            backgroundColor:'red',
            padding:10,
            borderRadius:5,
            alignItems:'center'
        },
        buttonText:{
            color:'white',
            fontWeight:'bold'
        }
    })

export default CadastroProduto;