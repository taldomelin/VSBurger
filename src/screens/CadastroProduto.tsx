import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const CadastroProduto: React.FC = () => {
        const [produtos, setProdutos] = useState<Produto[]>([]);
        const [nome, setNome] = useState<string>('');
        const [preco, setPreco] = useState<number>(0);
        const [ingredientes, setIngredientes] = useState<String>('');
        const [imagem, setImagem] = useState<any>('');
    return (
        <View>

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

        }
    })

export default CadastroProduto;