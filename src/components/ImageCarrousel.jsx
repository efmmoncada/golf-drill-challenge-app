import { useCallback, useRef, useState } from "react";
import { FlatList, Image, View } from "react-native";
import PaginationDot from "react-native-animated-pagination-dot";

// Adapted from: https://dev.to/lloyds-digital/let-s-create-a-carousel-in-react-native-4ae2

/**
 *
 * @param {object} props
 * @param {string[]} props.images
 * @param {number} props.width
 */
export default function ImageCarrousel({ images, width }) {
  const [currIndex, setCurrIndex] = useState(0);
  const indexRef = useRef(currIndex);
  indexRef.current = currIndex;

  const onScroll = useCallback((e) => {
    const slideSize = e.nativeEvent.layoutMeasurement.width;
    const index = e.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setCurrIndex(roundIndex);
    }
  }, []);

  const renderItem = ({ item }) => {
    return <Image source={{ uri: item }} style={{ width }} />;
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={images}
        renderItem={renderItem}
        pagingEnabled={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <PaginationDot
        activeDotColor="black"
        curPage={currIndex}
        maxPage={images.length}
        sizeRatio={1.2}
      />
    </View>
  );
}
