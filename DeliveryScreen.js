import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from './restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native';
import * as Progress from "react-native-progress"
import MapView, { Marker } from "react-native-maps";


const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

    return (
        <View className="bg-[#00CCBB] flex-1">
            <SafeAreaView className='z-50'>
                <View className="flex-row justify-between items-center p-5">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon color="white" size={30} />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        
                    <View>
                        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                        <Text className="text-4xl font-bold">45-55 Minutes</Text>
                    </View>
                 
                    </View>

                    <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
                    
                    <Text className="mt-3 text-gray-500">
                      Your order at {restaurant.title} is being prepared
                    </Text>
                </View>
            </SafeAreaView>

            <MapView
             initialRegion={{

                latitude: restaurant.lat,
                longitude: restaurant.long,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
             }}
             className="flex-1 -mt-10 z-0"
             mapType="mutedStandard"
            >
            <Marker 
             coordinate={{

                latitude: restaurant.lat,
                longitude: restaurant.long,
             }}
             title={restaurant.title}
             description={restaurant.short_description}
             identifier="origin"
             pinColor="#00CCBB"
            
            
            />

            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                <Image
                    source={{

                        uri:"data:image/png;base64,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",
                    }}
                    className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
                />
                <View className="flex-1">
                    <Text className='text-lg'>Edgar Flores</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>

                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    );
};

export default DeliveryScreen;