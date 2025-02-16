import { View , Image} from "react-native"
const FullMap = () => {
return <View>
    <Image
      source={{ uri: 'https://dummyimage.com/16:9x1080/' }} // URL of the image
      style={{ width: "100%",height:"100%" }}
    />
  </View>
}
export default FullMap;