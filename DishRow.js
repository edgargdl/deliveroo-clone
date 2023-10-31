import { View, Text, TouchableOpacity, Image } from 'react-native'

import React from 'react'
import { urlFor } from './RestaurantCard';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useState } from 'react';

const DishRow = ({ id, name, description, price, image }) => {

return (
        <TouchableOpacity
          
            className={`bg-white border p-4`}>

            <View className="flex-row">
                <View className="flex-1 pr-2">
 
                    <Text className="text-lg ab-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2">
       
                    </Text>

                </View>

                <View>
                    <Image
                        style={{

                            borderWidth: 1,
                            borderColor: "#F3F3F4",
                        }}

                        source={{
                            uri: urlFor(image).url(),
                        }}
                        className='h-20 w-20 bg-gray-300 p-4'

                    />

                </View>
            </View>
        </TouchableOpacity>

);
}

export default DishRow;