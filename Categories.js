import { View, Text, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

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



const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(
      `
    
    *[_type == "category"]
    
    
    `
    )
      .then((data) => {
        console.log("categories print")
        console.log(data)
        setCategories(data);
      });

  }, []);


  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}

        horizontal
        showsHorizontalScrollIndicator={false}

      > 
      
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}

        />

      ))}

      </ScrollView>
    </View>
  );
};

export default Categories;