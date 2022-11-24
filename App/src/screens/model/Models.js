import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/authContext'
import api from '../../api'
import { Entypo } from "@expo/vector-icons";

const CompanyModels = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [models, setModels] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/model/find');
            console.log(list);
            setModels(list.data.models)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

    return (
        <View style={styles.view}>
            <FlatList
                data={models}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View style={styles.text}>
                                <Text style={styles.item}>{"Empresa: " + item.company.name}</Text>
                                <Text style={styles.title}>{"Nome do modelo(a): "+ item.name}</Text>
                                <Text style={styles.title}>{"Idade do modelo(a): " + item.age}</Text>
                                <Text style={styles.title}>{"Email do modelo(a): " + item.email}</Text>
                            </View>
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default CompanyModels;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F0F8FF',
        alignItems: 'center'
    },
    text: {
        height: 120,
        width: '100%',
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        margin: 5,
        textAlign: 'center'
    },
    item: {
        margin: 5,
        fontSize: 15
    },
    icon: {
        margin: 10
    }
})
