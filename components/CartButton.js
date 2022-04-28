import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

export default function CartButton(props) {

    navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
              navigation.navigate("ShoppingCartScreen", {
                isEditable: true,
                hasQuantity: true,
                onRemove: props.onRemove,
              });
            }}
          >
            <View style={styles.icon}>
              <Icon
                type="ionicon"
                name="ios-cart"
                size={props.iconSize}
                color={Colors.primary}
              />
              {props.cartQuantity !== 0 && (
                <Badge
                  value={props.cartQuantity}
                  status="error"
                  containerStyle={styles.badge}
                />
              )}
            </View>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
      },
      icon: {
          flexDirection: 'row'
      },
      badge: {
        position: "absolute",
        top: -4,
        right: -4,
      }
})