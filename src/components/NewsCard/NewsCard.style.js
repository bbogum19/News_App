import { StyleSheet, Dimensions } from "react-native";
// Dimensions: cihazın yüksekliği ve genişliğine erişim sağlamımza olanak sağlar.
export default StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingBottom: 6,
        borderWidth:1,
        borderColor: '#c0c0c0',
    },
    image: {
        height: Dimensions.get('window').height / 3, // cihazın yüksekliğinin / 3 kadar yüksekliğe sahip olur
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 3,
        paddingHorizontal: 6,
    },
    description: {
        marginTop: 2,
        paddingHorizontal: 6,
    },
    author: {
        textAlign: "right",
        fontStyle: 'italic',
        paddingRight: 3,
    }

})