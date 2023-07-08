import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import Dress from "../../assets/dress.png";

const OfferCard = () => {
  return (
    <View className="flex-row max-w-[250px] py-2 mr-6 max-h-[160px] overflow-hidden bg-[#b8b894] rounded-2xl">
      <View className="px-4 py-2">
        <Text className="font-extrabold text-2xl">50% Off</Text>
        <Text className="text-lg">Qualquer peça hoje!</Text>
        <Text className="text-xs my-2">Código: FSCREATION</Text>

        <Pressable className="bg-black w-20 rounded-2xl">
          <Text className="text-white text-xs font-semibold mx-3 my-1">
            Adquira
          </Text>
        </Pressable>
      </View>
      <View>
        <Image source={Dress} className="object-contain h-[150px] w-[55px]" />
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({});
