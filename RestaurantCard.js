import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StarIcon, LocationMarkerIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({

    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,

}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{
                    uri: imgUrl,
                }}

                className='h-36 w-64 rounded-sm'
            />

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>

                <View className='flex-row items-center space-x-1'>
                <StarIcon color="green" opacity={0.5} size={22} />
                <View className="flex-row items-center space-x-1">
                    <Text>{rating} . {genre}</Text>
                </View>


                </View>

               

            </View>


        </TouchableOpacity>
    )
}

export default RestaurantCard