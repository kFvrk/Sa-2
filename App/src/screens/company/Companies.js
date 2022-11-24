import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/authContext'
import api from '../../api'
import { Entypo } from '@expo/vector-icons'
import CustomButton from '../../components/CustomButton'

const Companies = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)

    const [companies, setCompanies] = useState({});

    useEffect(() => {
        const onScreenLoad = async () => {
            const list = await api.get('/company/find');
            setCompanies(list.data.companies)
            dispatch({type: "update", payload: false})
        }
        onScreenLoad();
    }, [state.update]
    )

    const seeModel = async (item) => {
        await dispatch({type: 'setCompany', payload: item});
        navigation.navigate('CompanyModels');
    }

    const newModel = async (item) => {
        await dispatch({type: 'setCompany', payload: item});
        navigation.navigate('RegisterModel')
    }

    return (
        <View style={styles.view}>
            {state.isAdmin ? (
                <CustomButton text="Nova Empresa" onPress={() => navigation.navigate("RegisterCompany")} />
            ) : (
                <></>
            )}
            <FlatList
                data={companies}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.text} onPress={() => seeModel(item)}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.item}>{item.cnpj}</Text>
                                    <Text style={styles.item}>{item.address}</Text>
                            </TouchableOpacity>
                            <Entypo
                                name="squared-plus"
                                size={60}
                                color="#6959CD"
                                style={styles.icon}
                                onPress={() => newModel(item)}
                            />
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
            />
        </View>


    )
}

export default Companies;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        marginBottom: 20
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
        width: '80%',
        justifyContent: "center",
    },
    title: {
        fontSize: 30
    },
    item: {
        fontSize: 15
    },
    icon: {
        margin: 0
    }
})
