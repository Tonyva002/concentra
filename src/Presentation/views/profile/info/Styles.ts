import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/appTheme";



const styles = StyleSheet.create({

        container: {
               flex: 1,
               backgroundColor: MyColors.white
           },
       
           imageBackground: {
               width: '100%',
               height: '100%',
               opacity: 0.7,
               bottom: '30%'
           },
     


           loginForm: {
                width: '100%',
                height: '80%',
                backgroundColor:'white',
                position: 'absolute',
                bottom: 0,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                padding: 30,
                
                
            },
        
           
});

export default styles;