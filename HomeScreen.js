import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  UserIcon,
  ChevronDownIcon,
  DocumentMagnifyingGlassIcon,
  BookmarkIcon,
} from "react-native-heroicons/outline";

import FeaturedRow from './FeaturedRow';
import Categories from './Categories';
import category from './sanity/schemas/category';
import { createClient } from '@sanity/client'


export const client = createClient({
  name: 'default',
  title: 'Deliveroo-clone-yt',
  projectId: 'qz8pwqf5',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2021-10-21', // use current date (YYYY-MM-DD) to target the latest API version

})

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {

    navigation.setOptions({

      headerShown: false,
    })

  }, []);

  useEffect(() => {
    client.fetch(`*[_type == "featured"] {
    ...,
  post[]->{
    ...,
    dish[]->,
    type-> {

    }
    },
  } `)
      .then((data) => {



        setFeaturedCategories(data);

      });
    console.log("featuredCategories");
    console.log(featuredCategories);
  }, []);



  return (
    <SafeAreaView className="bg-white pt-5">

      {/* header */}


      <View className="flex-row pb-3 items-center  nx-4 space-x-2">
        <Image
          source={{

            uri: 'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className="flex-row flex 1 space-x-2 bg-gray-200 p-3">
          <DocumentMagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput
            placeholder='Restaurants and cuisines'

          />
          
        </View>
      </View>

      {/* body */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{

          paddingBottom: 100,

        }}
      >

        {/* Categories*/}
        <Categories />
   
        {/* Featured Rows */}

        {featuredCategories?.map((category) => (

          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />

        ))}


      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

