import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StarIcon, LocationMarkerIcon } from 'react-native-heroicons/outline'
import imageUrlBuilder from '@sanity/image-url'


import { createClient } from '@sanity/client'
import { useNavigation } from '@react-navigation/native'


export const client = createClient({
  name: 'default',
  title: 'Deliveroo-clone-yt',
  projectId: 'qz8pwqf5',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
 
})

const builder = imageUrlBuilder(client)

export const urlFor = (source)=> {
  return builder.image(source)
}



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

    const navigation= useNavigation();

    return (
        <TouchableOpacity
        onPress={() => {
            navigation.navigate('Restaurant', {
                
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

            })

        }}
        
        className="bg-white mr-3 shadow">
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
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