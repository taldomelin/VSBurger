import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar, Image, ImageBackground, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Item {
    id: string,
    nome: string,
    imagem:any,
}

const navigation = useNavigation();

const dados: Item[] = [
    {
        id:"1",
        nome:"➀𝕏-ℍ𝕒𝕞𝕓𝕦́𝕣𝕘𝕦𝕖𝕣",
        imagem: require('../src/assets/images/x-burguer.png')
    },
    {
        id:"2",
        nome:"②𝕏-𝕊𝕒𝕝𝕒𝕕𝕒",
        imagem: require('../src/assets/images/x-salada.png')
    },
    {
        id:"3",
        nome:"➂𝕏-𝔽𝕣𝕒𝕟𝕘𝕠",
        imagem: require('../src/assets/images/x-frango.png')
    },
    {
        id:"4",
        nome:"➃𝕏-𝔹𝕒𝕔𝕠𝕟",
        imagem: require('../src/assets/images/x-bacon.png')
    },
    {
        id:"5",
        nome:"➄𝕏-𝔼𝔾𝔾",
        imagem: require('../src/assets/images/x-egg.png')
    },
    {
        id:"6",
        nome:"➅𝕏-ℂ𝕒𝕝𝕒𝕓𝕣𝕖𝕤𝕒",
        imagem: require('../src/assets/images/x-calabresa.png')
    },
    {
        id:"7",
        nome:"➆𝕏-𝔹𝕒𝕘𝕦𝕟𝕔̧𝕒",
        imagem: require('../src/assets/images/x-bagunca.png')
    },
    {
        id:"8",
        nome:"➇𝕏-𝕋𝕦𝕕𝕠",
        imagem: require('../src/assets/images/x-tudo.png')
    },
    {
        id:"9",
        nome:"➈ℙ𝕠𝕣𝕔̧𝕒̃𝕠 𝕕𝕖 𝕓𝕒𝕥𝕒𝕥𝕒 𝕤𝕚𝕞𝕡𝕝𝕖𝕤-𝟙𝟘𝟘𝕘",
        imagem: require('../src/assets/images/batata.png')
    },
    {
        id:"10",
        nome:"⑩ℙ𝕠𝕣𝕔̧𝕒̃𝕠 𝕕𝕖 𝕓𝕒𝕥𝕒𝕥𝕒  (𝕔𝕙𝕖𝕕𝕕𝕒𝕣+𝕓𝕒𝕔𝕠𝕟)-𝟙𝟝𝟘𝕘",
        imagem: require('../src/assets/images/batatabacon.png')
    },
    {
        id:"11",
        nome:"⑪ℂ𝕠𝕔𝕒-ℂ𝕠𝕝𝕒 𝕝𝕒𝕥𝕒",
        imagem: require('../src/assets/images/cocalata.png')
    },
    {
        id:"12",
        nome:"⑫ℂ𝕠𝕔𝕒-ℂ𝕠𝕝𝕒 𝟚𝕃",
        imagem: require('../src/assets/images/coca2l.png')
    },
    {
        id:"13",
        nome:"⑬𝔾𝕦𝕣𝕒𝕟𝕒́ 𝕝𝕒𝕥𝕒",
        imagem: require('../src/assets/images/guaranalata.png')
    },
    {
        id:"14",
        nome:"⑭𝔾𝕦𝕒𝕣𝕒𝕟𝕒́ 𝟚𝕃",
        imagem: require('../src/assets/images/guarana2l.png')
    },
    {
        id:"15",
        nome:"⑮𝔸́𝕘𝕦𝕒 𝕞𝕚𝕟𝕖𝕣𝕒𝕝",
        imagem: require('../src/assets/images/agua.png')
    },
];

const renderItem = ({item}: {item: Item}) => (
    <View style={styles.item}>
        <Text style={styles.fonteNome}>{item.nome}🖥</Text>
        <Text style={styles.fonte}>------------------------------------------------------</Text>
        <Image source={item.imagem} style={styles.bottomImage} />
        </View>
)

function VSBurger(): React.JSX.Element {
    return (
        <View style={styles.container}>
              <ImageBackground source={require('../src/assets/images/fotodetras.jpg')} resizeMode="cover" style={styles.imagemfundo}>
            <StatusBar backgroundColor="black" barStyle='light-content'/>
            <View style={styles.header}>
                <Image source={require('../src/assets/images/logo.png')} style={styles.headerIcon}></Image>
            </View>
            
            
            <FlatList
            showsVerticalScrollIndicator={false} 
                data={dados}
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
                <TouchableOpacity onPress={() => navigation.navigate('VSBurgerCardapio')}>
                    <Image source={require('../src/assets/images/burger.png')} style={styles.footerIcon}></Image>
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
        width:300,
        height:130,
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
        fontSize:25,
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
    }
});

export default VSBurger;