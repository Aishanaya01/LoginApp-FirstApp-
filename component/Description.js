import React, { useState, useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import styles from "./ExploreStyle";

const Description = (props, { data }) => {
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 3);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 3 && !textShown) {
        setShowMoreButton(true);
        setNumLines(3);
      }
    },
    [textShown]
  );

  return (
    <View>
      <Text
        style={styles.description}
        onTextLayout={onTextLayout}
        numberOfLines={numLines}
        ellipsizeMode="tail"
      >
        {props.data.Body}
      </Text>
      {showMoreButton ? (
        <Text onPress={toggleTextShown} style={styles.viewmore}>
          {textShown ? "View Less" : "View More"}
        </Text>
      ) : null}
    </View>
  );
};
export default Description;
