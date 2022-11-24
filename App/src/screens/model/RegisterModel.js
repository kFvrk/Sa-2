import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import React, { useContext, useState } from 'react';
import api from '../../api'
import Logo from '../../../assets/images/Logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Context } from "../../context/authContext";
import { Entypo } from "@expo/vector-icons";

const RegisterModel = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [idUser, setidUser] = useState(state.idUser);
    const [idCompany, setidCompany] = useState(state.idCompany);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
 

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
        try {
            const authData = await api.post("/model/register", {
                idUser: idUser,
                idCompany: idCompany,
                name: name,
                age: age,
                email: email
            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setName("")
                setAge("")
                setEmail("")
                dispatch({type: "update", payload: true})
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                value={state.nameCompany}
                editable={false}
            />

            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
            />

            <CustomInput
                placeholder="Age"
                value={age}
                setValue={setAge}
            />
       
            <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
            />


            <CustomButton text="Register" onPress={onRegisterPressed} />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
    }
});

export default RegisterModel;