import "@/styles/global.css";
import { Loading } from "@/components/loading";
import { Slot } from "expo-router";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,   
  Roboto_400Regular,
  Roboto_100Thin
} from "@expo-google-fonts/roboto";

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_100Thin
  })

  if(!fontsLoaded) return <Loading /> 

  return (
    <Slot />
  )
}