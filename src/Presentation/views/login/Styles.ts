import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/appTheme";


const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.reddishOrange
    },


    titleContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: 2
    },

    title: {
        marginTop: 150,
        color: MyColors.white,
        fontSize: 24
    },


    loginForm: {
        width: '100%',
        height: '54%',
        backgroundColor:'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },

    loginTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        
    },


    loginRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },

    loginTextRegister: {
        fontStyle: 'italic',
        color: 'orange',
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
        marginLeft: 10
    },

    loginTerminos: {
        marginTop: 36,
        fontStyle: 'italic',
        textAlign: 'center'
        
    }
});

export default LoginStyles;