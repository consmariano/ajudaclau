import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, Platform } from "react-native";
import FilledButton from "../../components/FilledButton";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { baseDeDados, loggedInUser } from "../../utilities/baseDeDados";
import PiuReply from '../../components/SocialMedia/Feed/PiuReply';
import ExpandingTextInput from "../../components/General/AutoExpandingTextInput";
import CustomStatusBar from "../../components/General/CustomStatusBar";


function PiarScreen({navigation, route}) {
    let [piuText, changePiuText] = useState("");
    let { piuReplyId } = route.params != undefined ? route.params : { piuReplyId: null };

    return (
        <SafeAreaView style={styles.background}>
            {Platform.OS == 'ios' ? null : <CustomStatusBar barStyle='dark-content' backgroundColor="#fff" />}
            <View style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
                flexDirection: 'row',
                paddingHorizontal: 20,
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
            }} 
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text
                        style={{
                            fontWeight: '500',
                            fontSize: 16,
                            paddingVertical: 10,
                            paddingRight: 20,
                        }}
                    >
                        Cancelar
                    </Text>
                </TouchableOpacity>
                <FilledButton 
                    text="Piar" 
                    onPress={() => navigation.goBack()}
                    textStyle={{fontSize: 17, color: "#fff"}} 
                    width={100}
                    height={38} 
                />
            </View>

            <ScrollView style={{ flex: 1 }}>
                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: 'row',
                }}>
                    <Image  
                        source={
                            baseDeDados //mudar aqui
                                .getDadosUsuarioFromUsername(loggedInUser) == null 
                                    ? null 
                                    : baseDeDados.getDadosUsuarioFromUsername(loggedInUser).infoUsuario.avatar
                        } 
                        style={{
                            height: 50,
                            width: 50,
                            right: 4,
                            borderRadius: 25,
                            margin: 3,
                            backgroundColor: "#ddd"
                        }}
                    />
                    <View style={{ flex: 1 }} >
                        <ExpandingTextInput 
                            placeholder="Em que você está pensando?"
                            value={piuText}
                            onChangeText={(newValue) => changePiuText(newValue)}
                            style={{
                                flex: 1,
                                fontSize: 18,
                                textAlignVertical: 'top',
                                marginLeft: 5,
                                padding: 0,
                                paddingTop: 15,
                                paddingBottom: 5
                            }}
                            autoCapitalize='none'
                        />
                        {
                            piuReplyId != null
                                ? <PiuReply piuReplyId={piuReplyId} />
                                : null
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default PiarScreen;