import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import {
  UserIcon,
  ChevronDownIcon,
  DocumentMagnifyingGlassIcon,
  BookmarkIcon,
} from "react-native-heroicons/outline";

import FeaturedRow from './FeaturedRow';
import Categories from './Categories';
import sanityClient from "./sanity";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState=([])

  useLayoutEffect(() => {

    navigation.setOptions({

      headerShown: false,
    })

  }, []);

 useEffect(() => {
  sanityClient
  .fetch(`*[_type == "featured"] {
    ...,
  post[]->{
    ...,
    dish[]->,
    type-> {

    }
    },
  } `)
  .then((data)=> {

    setFeaturedCategories(data);

  });


 },[] );

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


        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />

        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          featuredCategory="discounts"
        />

        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurants tonight!"
          featuredCategory="offers"
        />


      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

