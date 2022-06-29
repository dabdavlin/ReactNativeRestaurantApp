import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'BearerLlgukgIbEX_9FvjnmaN6USFNzB21GJwMnCbc8qYZAN2JeY-B2utuwfaMhXIxgZV8G0N8R29cN8u-yL9_BjK0xcEqhbY5bX90dkdaYsDQtgIMmYMcZMm-AVjkm-65YnYx'
  }
});