import React, { useState } from "react";
import { View } from "react-native";

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

export default CadastroProduto;