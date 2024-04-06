import { Text, View, TouchableOpacity, Pressable, ActivityIndicator, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="w-full h-14 bg-orange-500 rounded-lg items-center justify-center"
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) :
        <Text className=" text-green-500 text-base uppercase">{title}</Text>
      }
    </TouchableOpacity>
  )
}