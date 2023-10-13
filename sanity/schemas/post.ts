import {Rule} from 'sanity'

// schemas/post.js
export default {
  name: 'post',
  type: 'document',
  title: 'Restaurant',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name 2',
      type: 'string'
    },

    {
      name: 'short_description',
      title: 'Short description',
      type: 'string'
    }, 

    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    },

    {
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    },

    {
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
    },

    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
    },

    {
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars)',
      type: 'number',
    },

    {
      name: 'type',
      title: 'Category',
      type: "reference",
      to: [{ type: "category"}],
    },

    {
      name: 'dish',
      title: 'Dishes',
      type: 'array',
      of: [{ type: "reference", to: [{ type: "dish"}] }],
    },


  ]
}
