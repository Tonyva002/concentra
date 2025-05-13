import { View, Text, Dimensions } from "react-native";
import React from "react";
import useViewModel from "./ViewModel";
import RolesItem from "./item";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../navigator/StackNavigator";

type RolesScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Roles">;
};

export default function RolesScreen({ navigation }: RolesScreenProps) {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  const { user } = useViewModel();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: "center" }}>
      <View>
        <Carousel
          ref={ref}
          width={width}
          height={height / 2}
          //  autoPlay={true}
          data={user?.roles!}
          onProgressChange={progress}
          renderItem={({ item }) => (
            <RolesItem
              rol={item}
              height={400}
              width={width - 100}
              navigation={navigation}
            />
          )}
        />

        <Pagination.Basic
          progress={progress}
          data={user?.roles!}
          dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
          containerStyle={{ gap: 5, marginTop: 10 }}
          onPress={onPressPagination}
        />
      </View>
    </GestureHandlerRootView>
  );
}
