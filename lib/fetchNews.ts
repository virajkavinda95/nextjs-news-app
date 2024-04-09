import { gql } from "graphql-request"
import getNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | String,
    keywords?: String,
    isDynamic?: boolean
) => {

    const query = gql`
    query MyQuery(
            $access_key: String
            $categories:String
            $keywords:String
        ) {
        myQuery(
            access_key: $access_key
            categories:$categories
            countries: "gb"
            sort: "published_desc"
            keywords:$keywords
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            count
            limit
            offset
            total
          }
        }
      }
      `;

      const res = await fetch("https://aleksandrov.stepzen.net/api/trendsetting-grasshopper/__graphql", {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ?  {revalidate: 0} : {revalidate: 20},
        headers:{
            "Content-Type": "application/json",
            Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables:{
                access_key:process.env.MEDIA_STACK_API_KEY,
                categories:category,
                keywords:keywords
            }
        })
      });

      console.log("Loading data from api", category, keywords)

      const newsResponse = await res.json()

      const news = getNewsByImage(newsResponse?.data?.myQuery)

      return news
}

export default fetchNews;