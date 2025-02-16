import { View , Image} from "react-native"
const MapCompo = () => {
    return <View>
    <Image
      source={{ uri: 'https://dummyimage.com/16:9x1080/' }} // URL of the image
      style={{ width: 200,height:200 }}
    />
  </View>
}

export default MapCompo;