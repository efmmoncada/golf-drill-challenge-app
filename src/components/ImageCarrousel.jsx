
import { FlatList, Image, StyleSheet, Dimensions, View } from "react-native";


function Seperator() {
    return <View style={styles.sep}></View>
}



/**
 *
 * @param {object} props
 * @param {string[]} props.images
 * @param {number} props.width
 */
export default function ImageCarrousel({ images, width }) {

    const renderItem = ( {item} ) => {
        return (
            <Image
                source={{uri: item}}
                style={{...styles.image, width}}
            />
        )
    }

    return (
            <FlatList
                data={images}
                style={styles.list}
                renderItem={renderItem}
                pagingEnabled={true}
                horizontal={true}
            />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
});