import axios from "axios";
import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image, ImageBackground, ScrollView} from "react-native";

interface Produto {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    imagem:any,
}



const renderItem = ({item}: {item: Produto}) => (
    <View style={styles.item}>
        <Text style={styles.fonteNome}>{item.nome}🖥</Text>
        <Text style={styles.fonte}>------------------------------------------------------</Text>
        <Image source={item.imagem} style={styles.bottomImage} />
        <Text style={styles.fonte}>💲-{item.preco}</Text>
        <Text style={styles.fonte}>❃{item.ingredientes}😋🍔</Text>
        <TouchableOpacity>
        <Image source={require('../src/assets/images/carrinho.png')} style={ styles.footerIcon}/>
        </TouchableOpacity>
        </View>
)

function VSBurger(): React.JSX.Element {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        listarProdutos();           
    }, []);


    const listarProdutos = async () => {
        try {
            const response = await axios.get('http://10.137.11.208:8000/api/produtos');

            console.log(response.data)
            if (response.status === 200) {
                setProdutos(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <View style={styles.container}>
              <ImageBackground source={require('../src/assets/images/fotodetras.jpg')} resizeMode="cover" style={styles.imagemfundo}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require('../src/assets/images/logo.png')} style={styles.headerIcon}></Image>
            </View>
            
            
            <FlatList
            showsVerticalScrollIndicator={false} 
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
         
            </ImageBackground>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image 
                    source={require('../src/assets/images/burger.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    source={require('../src/assets/images/home.png')}
                    style={styles.footerIcon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('../src/assets/images/profile.png')}
                    style={ styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.carrinho}>
                    <Image style={styles.imagemCarrinho} source={require('../src/assets/images/sacola.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    source={require('../src/assets/images/menu.png')}
                    style={styles.footerIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )       
};

const styles = StyleSheet.create({
    bottomImage:{
        width:300,
        height:130,
        borderWidth:2,
        borderColor:'#00BFFF',
        borderRadius:25,
        resizeMode:'center'
      },
    container: {
        flex: 1,
        backgroundColor:'blue'
       
    },
    item: {
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#00BFFF'
        
        
    },
    header: {
        alignItems: 'center'
    },
    footer: {
        borderTopWidth:0.2,
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10
    },
    footerIcon: {
        width:40,
        height:40
    },
    headerIcon:{
        width:590,
        height:83,
        alignItems:'center'
    },
    fonteNome:{
        fontSize:20,
        fontWeight:'100',
        color:'white'
    },
    fonte:{
        fontSize:20,
        color:'white',
        fontWeight:'300'
    },
    imagemfundo: {
        flex:1,
        justifyContent:'center',
    },
    carrinho:{
        position:'absolute',
        width:40,
        height:140,
        alignItems:'center',
        justifyContent:'center',
        right:20,
        bottom:30
    },
    imagemCarrinho:{
        width:77,
        height:77
    }
});

export default VSBurger;