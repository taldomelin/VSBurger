import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image} from "react-native";

interface Item {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    imagem:any,
}

const dados: Item[] = [
    {
        id:"1",
        nome:"X-Burger",
        preco:"10.00",
        ingredientes:"Pão, presunto, queijo e hambúrguer.",
        imagem: require('../src/assets/images/x-burguer.png')
    },
    {
        id:"2",
        nome:"X-Salada",
        preco:"13.00",
        ingredientes:"Pão, presunto, queijo, hambúrguer, alface e tomate.",
        imagem: require('../src/assets/images/x-salada.png')
    },
    {
        id:"3",
        nome:"X-Frango",
        preco:"13.00",
        ingredientes:"Pão, presunto, queijo, frango, alface e tomate.",
        imagem: require('../src/assets/images/x-frango.png')
    },
    {
        id:"4",
        nome:"X-Bacon",
        preco:"15.00",
        ingredientes:"Pão, presunto, queijo, hambúrguer, bacon, alface e tomate.",
        imagem: require('../src/assets/images/x-bacon.png')
    },
    {
        id:"5",
        nome:"X-Egg",
        preco:"13.00",
        ingredientes:"Pão, presunto, queijo, hambúrguer, ovo, alface e tomate.",
        imagem: require('../src/assets/images/x-egg.png')
    },
    {
        id:"6",
        nome:"X-Calabresa",
        preco:"14.00",
        ingredientes:"Pão, presunto, queijo, hambúrguer, calabresa, alface e tomate.",
        imagem: require('../src/assets/images/x-calabresa.png')
    },
    {
        id:"7",
        nome:"X-Bagunça",
        preco:"20.00",
        ingredientes:"Pão, presunto, queijo, hambúrguer, bacon, calabresa, alface e tomate.",
        imagem: require('../src/assets/images/x-bagunca.png')
    },
    {
        id:"8",
        nome:"X-Tudo",
        preco:"25.00",
        ingredientes:"Pão, presunto, queijo, hambúrguer, calabresa, bacon, ovo, milho, batata palha, frango, salsicha, catupiry, alface e tomate.",
        imagem: require('../src/assets/images/x-tudo.png')
    },
    {
        id:"9",
        nome:"Porção de batata simples-100g",
        preco:"20.00",
        ingredientes:"100g de batata frita",
        imagem: require('../src/assets/images/batata.png')
    },
    {
        id:"10",
        nome:"Porção de batata(cheddae+bacon)-150g",
        preco:"25.00",
        ingredientes:"150g de batata frita com cheddar e bacon por cima.",
        imagem: require('../src/assets/images/batatabacon.png')
    },
    {
        id:"11",
        nome:"Coca-Cola lata",
        preco:"5.00",
        ingredientes:"Felicidade.",
        imagem: require('../src/assets/images/cocalata.png')
    },
    {
        id:"12",
        nome:"Coca-Cola 2L",
        preco:"14.00",
        ingredientes:"Muita felicidade.",
        imagem: require('../src/assets/images/coca2l.png')
    },
    {
        id:"13",
        nome:"Guraná lata",
        preco:"3.50",
        ingredientes:"Alegria",
        imagem: require('../src/assets/images/guaranalata.png')
    },
    {
        id:"14",
        nome:"Guaraná 2L",
        preco:"9.00",
        ingredientes:"Muita alegria.",
        imagem: require('../src/assets/images/guarana2l.png')
    },
    {
        id:"15",
        nome:"Água mineral",
        preco:"3.00",
        ingredientes:"500ml de água.",
        imagem: require('../src/assets/images/agua.png')
    },
];

const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
        <Image source={item.imagem} style={styles.bottomImage}></Image>
        </TouchableOpacity>
)

function VSBurger(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle='light-content'/>
            <View style={styles.header}>
                <Text style={styles.headerText}>VSBurger</Text>
            </View>
            <FlatList
            showsVerticalScrollIndicator={false} 
                data={dados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

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
        width:'115%',
        position:'absolute',
        bottom:0,
        resizeMode:'cover',
        height:'57%'
      },
    container: {
        flex: 1,
       
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        backgroundColor: 'blue',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth:0.2,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10
    },
    footerIcon: {
        width:30,
        height:30
    }
});

export default VSBurger;