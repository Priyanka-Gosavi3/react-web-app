import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (
      <div className="main-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMh4UE_ualYLfTpqz2bzJdC2FGyKycpXjzZw&s"
          alt="logo"
          className="logo"
        ></img>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contatc Us</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };
  const resObj = [
    {
      type: "restaurant",
      info: {
        resId: 21169937,
        name: "Nook By Grace Coffee Co.",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/7/21169937/b67697f3e72cf2f937dfd731e69578fb_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/7/21169937/b67697f3e72cf2f937dfd731e69578fb_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: false,
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "1,106",
          subtext: "REVIEW",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.4",
              reviewCount: "684",
              reviewTextSmall: "684 Reviews",
              subtext: "684 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.4",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.1",
              reviewCount: "422",
              reviewTextSmall: "422 Reviews",
              subtext: "422 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.1",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹450 for two",
        },
        cfo: {
          text: "₹200 for one",
        },
        locality: {
          name: "Navrangpura, Ahmedabad",
          address:
            "B/6/1, Nilamber Complex, St. Xavier's College Corner, Navrangpura, Ahmedabad",
          localityUrl: "ahmedabad/navrangpura-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/coffee/",
            name: "Coffee",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/continental/",
            name: "Continental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/italian/",
            name: "Italian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/shake/",
            name: "Shake",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/tea/",
            name: "Tea",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹450 for two",
        },
      },
      order: [],
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/nook-by-grace-coffee-co-navrangpura/info",
        clickActionDeeplink: "",
      },
      distance: "1.5 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"9125899","bzone":"0","campaign_id":"18101820","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21169937","isNewAd":"34","ad_position":"10","slider_position":"10","slider_sequence":"10","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":44,\\"boosted_rank\\":10,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.026747\\",\\"cost_for_two_ctr\\":\\"0.038536\\",\\"distance\\":\\"1.2491706609725952\\",\\"organic_ctr\\":\\"0.014256\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"442\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.3892580667260396\\",\\"cost_for_two_ctr\\":\\"0.4336953463507962\\",\\"cost_per_unit\\":\\"0.31920903954802266\\",\\"distance\\":\\"0.9195531389369856\\",\\"organic_ctr\\":\\"0.09131905298759864\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.17224080267558528\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.3835853570004696}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21169937","element_type":"listing","rank":10,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 21505351,
        name: "Peppers By Pepparazzi",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/1/21505351/272cf1230eb71ecd8453693030b9bae0_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/1/21505351/272cf1230eb71ecd8453693030b9bae0_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: false,
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "680",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.5",
              reviewCount: "478",
              reviewTextSmall: "478 Reviews",
              subtext: "478 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.5",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "800",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.1",
              reviewCount: "202",
              reviewTextSmall: "202 Reviews",
              subtext: "202 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.1",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,500 for two",
        },
        cfo: {
          text: "₹600 for one",
        },
        locality: {
          name: "Bodakdev, Ahmedabad",
          address:
            "5, First Floor, Sumel Complex, Near Pakwan Chokdi, S G Highway Road, Bodakdev, Ahmedabad",
          localityUrl: "ahmedabad/bodakdev-restaurants",
        },
        timing: {
          text: "Closes in 5 minutes",
          color: "#ab000d",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/continental/",
            name: "Continental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/japanese/",
            name: "Japanese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/asian/",
            name: "Asian",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,500 for two",
        },
      },
      order: [],
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/peppers-by-pepparazzi-bodakdev/info",
        clickActionDeeplink: "",
      },
      distance: "5.6 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"7951238","bzone":"0","campaign_id":"16923806","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21505351","isNewAd":"34","ad_position":"11","slider_position":"11","slider_sequence":"11","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":32,\\"boosted_rank\\":11,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.034474\\",\\"cost_for_two_ctr\\":\\"0.076648\\",\\"distance\\":\\"5.2042236328125\\",\\"organic_ctr\\":\\"0.04137\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"923\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.5657098490557421\\",\\"cost_for_two_ctr\\":\\"0.862618873445501\\",\\"cost_per_unit\\":\\"0.0855528652138822\\",\\"distance\\":\\"0.34406529459833446\\",\\"organic_ctr\\":\\"0.2650020498103925\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.3733277591973244\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.3835625908013947}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21505351","element_type":"listing","rank":11,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 21439131,
        name: "Niro By Nini's - SBR",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/1/21439131/de12d7a5da0564ff14dca34dc802d6ad_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/1/21439131/de12d7a5da0564ff14dca34dc802d6ad_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/1/21439131/806ab9335b13865765c6cf578506fbca_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.0",
          rating_text: "4.0",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "537",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.1",
              reviewCount: "143",
              reviewTextSmall: "143 Reviews",
              subtext: "143 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.1",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "3.9",
              reviewCount: "394",
              reviewTextSmall: "394 Reviews",
              subtext: "394 Delivery Reviews",
              color: "#E23744",
              ratingV2: "3.9",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "600",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,000 for two",
        },
        cfo: {
          text: "₹400 for one",
        },
        locality: {
          name: "Bodakdev, Ahmedabad",
          address:
            "201/202, Shreeya Atlanta, Sindhu Bhavan Road, Bodakdev, Ahmedabad",
          localityUrl: "ahmedabad/bodakdev-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/cafes/",
            name: "Cafe",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/coffee/",
            name: "Coffee",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/sandwich/",
            name: "Sandwich",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/burger/",
            name: "Burger",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/sushi/",
            name: "Sushi",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/pizza/",
            name: "Pizza",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/pasta/",
            name: "Pasta",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,000 for two",
        },
      },
      order: [],
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/niro-by-ninis-sbr-bodakdev/info",
        clickActionDeeplink: "",
      },
      distance: "6.9 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"9160295","bzone":"0","campaign_id":"18136265","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21439131","isNewAd":"34","ad_position":"12","slider_position":"12","slider_sequence":"12","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":124,\\"boosted_rank\\":12,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.047644\\",\\"cost_for_two_ctr\\":\\"0.074182\\",\\"distance\\":\\"6.5161027908325195\\",\\"organic_ctr\\":\\"0.125733\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"85\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.8664565778356283\\",\\"cost_for_two_ctr\\":\\"0.8348657925834224\\",\\"cost_per_unit\\":\\"0.3426150121065375\\",\\"distance\\":\\"0.15317771001801195\\",\\"organic_ctr\\":\\"0.8054025315158349\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.022993311036789296\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.3742308187462427}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21439131","element_type":"listing","rank":12,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 18588579,
        name: "Ristretto - Behind The Rods",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/chains/9/18588579/f46901fa3b9f4f1da8ba6112f4149d40_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/chains/9/18588579/f46901fa3b9f4f1da8ba6112f4149d40_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/chains/9/18588579/7bdf97eb6628d402f34effbf1616e24e_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "4,172",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.2",
              reviewCount: "2,114",
              reviewTextSmall: "2,114 Reviews",
              subtext: "2,114 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.2",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.3",
              reviewCount: "2,058",
              reviewTextSmall: "2,058 Reviews",
              subtext: "2,058 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.3",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹500 for two",
        },
        cfo: {
          text: "₹200 for one",
        },
        locality: {
          name: "Navrangpura, Ahmedabad",
          address:
            "A-1, Ground Floor, Maharaja Palace, University Road, Near Vijay Cross Roads, Navrangpura, Ahmedabad",
          localityUrl: "ahmedabad/navrangpura-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/continental/",
            name: "Continental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/lebanese/",
            name: "Lebanese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/italian/",
            name: "Italian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/fast-food/",
            name: "Fast Food",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹500 for two",
        },
      },
      order: [],
      gold: {
        instant: 10,
        welcome_offer: false,
        gold_offer: false,
        text: "Flat",
        offerValue: "10% OFF",
        isGoldIcon: false,
      },
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/ristretto-behind-the-rods-navrangpura/info",
        clickActionDeeplink: "",
      },
      distance: "1.8 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"8992597","bzone":"0","campaign_id":"17968410","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18588579","isNewAd":"34","ad_position":"13","slider_position":"13","slider_sequence":"13","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":170,\\"boosted_rank\\":13,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.027943\\",\\"cost_for_two_ctr\\":\\"0.03864\\",\\"distance\\":\\"1.4666686058044434\\",\\"organic_ctr\\":\\"0.014176\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"37\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.416569614761024\\",\\"cost_for_two_ctr\\":\\"0.4348657925834224\\",\\"cost_per_unit\\":\\"0.2619047619047619\\",\\"distance\\":\\"0.8879056681418881\\",\\"organic_ctr\\":\\"0.09080660038946398\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.002926421404682274\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.3690698769335268}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18588579","element_type":"listing","rank":13,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 18335583,
        name: "Brick Kitchen - Five Petals",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/3/18335583/62b65e3f4a527e10de189e94cd910665_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/3/18335583/62b65e3f4a527e10de189e94cd910665_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/chains/3/18335583/870fcc395f07b78e38c9f97567c319e9_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "5,091",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.4",
              reviewCount: "2,204",
              reviewTextSmall: "2,204 Reviews",
              subtext: "2,204 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.4",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.2",
              reviewCount: "2,887",
              reviewTextSmall: "2,887 Reviews",
              subtext: "2,887 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.2",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,400 for two",
        },
        cfo: {
          text: "₹600 for one",
        },
        locality: {
          name: "Ghatlodia, Ahmedabad",
          address:
            "217/1, Riddhi Siddhi Arcade, Near Nalanda, Ghatlodia, Ahmedabad",
          localityUrl: "ahmedabad/ghatlodia-restaurants",
        },
        timing: {
          text: "Closes in 5 minutes",
          color: "#ab000d",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/continental/",
            name: "Continental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/oriental/",
            name: "Oriental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/salad/",
            name: "Salad",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,400 for two",
        },
      },
      order: [],
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/brick-kitchen-five-petals-ghatlodia/info",
        clickActionDeeplink: "",
      },
      distance: "4.2 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"8994404","bzone":"0","campaign_id":"17970217","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"18335583","isNewAd":"34","ad_position":"14","slider_position":"14","slider_sequence":"14","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":76,\\"boosted_rank\\":14,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.022069\\",\\"cost_for_two_ctr\\":\\"0.055838\\",\\"distance\\":\\"3.9407269954681396\\",\\"organic_ctr\\":\\"0.007311\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"643\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.2824324632915439\\",\\"cost_for_two_ctr\\":\\"0.62841708401328\\",\\"cost_per_unit\\":\\"0.2857142857142857\\",\\"distance\\":\\"0.5279128843352119\\",\\"organic_ctr\\":\\"0.046831761812032385\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.25627090301003347\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.36838569865946835}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18335583","element_type":"listing","rank":14,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 19952203,
        name: "Eat Punjab",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/3/19952203/252bf5a7bca14d9008c47ffd4c9706e1_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/3/19952203/252bf5a7bca14d9008c47ffd4c9706e1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/chains/4/110484/3f31528324e1209f325c3d79c6e0d713_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.3",
          rating_text: "4.3",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "13.1K",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.3",
              reviewCount: "941",
              reviewTextSmall: "941 Reviews",
              subtext: "941 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.3",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.3",
              reviewCount: "12.1K",
              reviewTextSmall: "12.1K Reviews",
              subtext: "12.1K Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.3",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,200 for two",
        },
        cfo: {
          text: "₹500 for one",
        },
        locality: {
          name: "Gurukul, Ahmedabad",
          address:
            "102, First Floor, Shilp Square B, Drive In Road, Opposite Himalaya Mall, Gurukul, Ahmedabad",
          localityUrl: "ahmedabad/gurukul-restaurants",
        },
        timing: {
          text: "Closes in 35 minutes",
          color: "#e5521f",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjkyXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/awadhi/",
            name: "Awadhi",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTU3XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/lucknowi/",
            name: "Lucknowi",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,200 for two",
        },
      },
      order: [],
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/eat-punjab-gurukul/info",
        clickActionDeeplink: "",
      },
      distance: "3.8 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"9126523","bzone":"0","campaign_id":"18102450","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"19952203","isNewAd":"34","ad_position":"15","slider_position":"15","slider_sequence":"15","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":82,\\"boosted_rank\\":15,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.035638\\",\\"cost_for_two_ctr\\":\\"0.052632\\",\\"distance\\":\\"3.370676279067993\\",\\"organic_ctr\\":\\"0.074609\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"316\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.5922906533305932\\",\\"cost_for_two_ctr\\":\\"0.5923358280344381\\",\\"cost_per_unit\\":\\"0.25141242937853114\\",\\"distance\\":\\"0.6108592469454225\\",\\"organic_ctr\\":\\"0.47791969867787226\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.11956521739130435\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"featured\\",\\"total_score\\":0.3672012533963581}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19952203","element_type":"listing","rank":15,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 21219996,
        name: "1980 - A Royal Culinary Experience",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/6/21219996/e495a5fa833649642806f1147a108c78_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/6/21219996/e495a5fa833649642806f1147a108c78_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: false,
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.2",
          rating_text: "4.2",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "977",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.2",
              reviewCount: "977",
              reviewTextSmall: "977 Reviews",
              subtext: "977 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.2",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "",
              reviewCount: "0",
              reviewTextSmall: "0 Reviews",
              subtext: "Does not offer Delivery",
              color: "",
              ratingV2: "-",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "100",
              },
              textColorV2: {
                type: "green",
                tint: "500",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,600 for two",
        },
        cfo: {
          text: "₹650 for one",
        },
        locality: {
          name: "Bodakdev, Ahmedabad",
          address:
            "18th Floor, Sankalp Square 3B, Sindhu Bhavan Road, Bodakdev, Ahmedabad",
          localityUrl: "ahmedabad/bodakdev-restaurants",
        },
        timing: {
          text: "Closes in 5 minutes",
          color: "#ab000d",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/health-food/",
            name: "Healthy Food",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/salad/",
            name: "Salad",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/street-food/",
            name: "Street Food",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,600 for two",
        },
      },
      order: [],
      gold: {
        instant: 10,
        welcome_offer: false,
        gold_offer: false,
        text: "Flat",
        offerValue: "10% OFF",
        isGoldIcon: false,
      },
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/1980-a-royal-culinary-experience-bodakdev/info",
        clickActionDeeplink: "",
      },
      distance: "8.7 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"9093261","bzone":"0","campaign_id":"18069169","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"21219996","isNewAd":"34","ad_position":"16","slider_position":"16","slider_sequence":"16","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":19,\\"boosted_rank\\":16,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.047693\\",\\"cost_for_two_ctr\\":\\"0.079795\\",\\"distance\\":\\"8.316436767578125\\",\\"organic_ctr\\":\\"0.012269\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"78\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.8675755292183326\\",\\"cost_for_two_ctr\\":\\"1\\",\\"cost_per_unit\\":\\"0.6659604519774012\\",\\"distance\\":\\"0.1748503072391286\\",\\"organic_ctr\\":\\"0.07859101158142873\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.014712063892391762\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.48486412777449955}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21219996","element_type":"listing","rank":16,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 20510161,
        name: "Banjara - Gourmet Dining",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/1/20510161/17f0122c01f08d0df871c7fbe02c1db4_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/1/20510161/17f0122c01f08d0df871c7fbe02c1db4_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/1/20510161/338f01c25300b00f6d65323a5bb2c531_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.0",
          rating_text: "4.0",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "1,226",
          subtext: "REVIEW",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.1",
              reviewCount: "1,178",
              reviewTextSmall: "1,178 Reviews",
              subtext: "1,178 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.1",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "3.8",
              reviewCount: "48",
              reviewTextSmall: "48 Reviews",
              subtext: "48 Delivery Reviews",
              color: "#E23744",
              ratingV2: "3.8",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "600",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹2,500 for two",
        },
        cfo: {
          text: "₹1,000 for one",
        },
        locality: {
          name: "Bodakdev, Ahmedabad",
          address:
            "PRL Colony, Opposite Baabul Bagh Party Plot, Sindhu Bhawan Road, Bodakdev, Ahmedabad",
          localityUrl: "ahmedabad/bodakdev-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/continental/",
            name: "Continental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/oriental/",
            name: "Oriental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/italian/",
            name: "Italian",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹2,500 for two",
        },
      },
      order: [],
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/banjara-gourmet-dining-bodakdev/info",
        clickActionDeeplink: "",
      },
      distance: "6.9 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20510161","element_type":"listing","rank":17}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 20816697,
        name: "Foo Palladium Ahmedabad",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/7/20816697/7e537f0c5bde3842904dabb96b6c08c5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/7/20816697/ff9d4008b97f4b5e89ab4964dbcf7878_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.5",
          rating_text: "4.5",
          rating_subtitle: "Excellent",
          rating_color: "3F7E00",
          votes: "2,132",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.5",
              reviewCount: "1,391",
              reviewTextSmall: "1,391 Reviews",
              subtext: "1,391 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.5",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "800",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.4",
              reviewCount: "741",
              reviewTextSmall: "741 Reviews",
              subtext: "741 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.4",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹2,500 for two",
        },
        cfo: {
          text: "₹1,000 for one",
        },
        locality: {
          name: "Thaltej, Ahmedabad",
          address:
            "4th Floor, Palladium Mall, Municipal Corporation, Thaltej, Ahmedabad",
          localityUrl: "ahmedabad/thaltej-restaurants",
        },
        timing: {
          text: "",
          color: "",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/sushi/",
            name: "Sushi",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/asian/",
            name: "Asian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/japanese/",
            name: "Japanese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹2,500 for two",
        },
      },
      order: [],
      gold: [],
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/foo-palladium-ahmedabad-thaltej/info",
        clickActionDeeplink: "",
      },
      distance: "4.9 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"9126511","bzone":"0","campaign_id":"18102438","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"20816697","isNewAd":"34","ad_position":"18","slider_position":"18","slider_sequence":"18","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":25,\\"boosted_rank\\":18,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.027999\\",\\"cost_for_two_ctr\\":\\"0.042736\\",\\"distance\\":\\"4.549280643463135\\",\\"organic_ctr\\":\\"0.014156\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"2422\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.4178484163412574\\",\\"cost_for_two_ctr\\":\\"0.5355724042859829\\",\\"cost_per_unit\\":\\"1\\",\\"distance\\":\\"0.5827782651894924\\",\\"organic_ctr\\":\\"0.09067848723993031\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"1\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.4540059990430112}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20816697","element_type":"listing","rank":18,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 19335424,
        name: "Three Quarter Indian",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/4/19335424/5016d9bcb5c67e82755f790634603e8f_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/4/19335424/5016d9bcb5c67e82755f790634603e8f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: false,
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.2",
          rating_text: "4.2",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "4,517",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.1",
              reviewCount: "4,287",
              reviewTextSmall: "4,287 Reviews",
              subtext: "4,287 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.1",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.2",
              reviewCount: "230",
              reviewTextSmall: "230 Reviews",
              subtext: "230 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.2",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,200 for two",
        },
        cfo: {
          text: "₹500 for one",
        },
        locality: {
          name: "Satellite, Ahmedabad",
          address:
            "Unit B-1101, Floor 11, Vivan Square, B Wing, Jodhpur Cross Roads, Satellite, Ahmedabad",
          localityUrl: "ahmedabad/satellite-restaurants",
        },
        timing: {
          text: "Closes in 5 minutes",
          color: "#ab000d",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/continental/",
            name: "Continental",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/italian/",
            name: "Italian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/chinese/",
            name: "Chinese",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,200 for two",
        },
      },
      order: [],
      gold: {
        instant: 10,
        welcome_offer: false,
        gold_offer: false,
        text: "Flat",
        offerValue: "10% OFF",
        isGoldIcon: false,
      },
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/three-quarter-indian-satellite/info",
        clickActionDeeplink: "",
      },
      distance: "4.5 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19335424","element_type":"listing","rank":19}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 110282,
        name: "Mirch Masala",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/2/110282/f80a38e6a32e5a976423cd1903437999_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/2/110282/f80a38e6a32e5a976423cd1903437999_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/2/110282/d68847923aa064ad0522fe97374ae1ec_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "4.2",
          rating_text: "4.2",
          rating_subtitle: "Very Good",
          rating_color: "5BA829",
          votes: "4,609",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "4.2",
              reviewCount: "931",
              reviewTextSmall: "931 Reviews",
              subtext: "931 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "4.2",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.1",
              reviewCount: "3,678",
              reviewTextSmall: "3,678 Reviews",
              subtext: "3,678 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.1",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,000 for two",
        },
        cfo: {
          text: "₹400 for one",
        },
        locality: {
          name: "Satellite, Ahmedabad",
          address:
            "Ground Floor, Sachet 4, Near Prerna Tirth Derasar, Satellite, Ahmedabad",
          localityUrl: "ahmedabad/satellite-restaurants",
        },
        timing: {
          text: "Opens at 7pm",
          color: "#ab000d",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/mughlai/",
            name: "Mughlai",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/biryani/",
            name: "Biryani",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/desserts/",
            name: "Desserts",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            url: "https://www.zomato.com/ahmedabad/restaurants/beverages/",
            name: "Beverages",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,000 for two",
        },
      },
      order: [],
      gold: {
        instant: 15,
        welcome_offer: false,
        gold_offer: false,
        text: "Flat",
        offerValue: "15% OFF",
        isGoldIcon: false,
      },
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/mirch-masala-satellite/info",
        clickActionDeeplink: "",
      },
      distance: "5.6 km",
      isPromoted: true,
      promotedText: "Promoted",
      trackingData: [
        {
          table_name: "jadtracking",
          payload:
            '{"banner_id":"9125698","bzone":"0","campaign_id":"18101619","category_id":"1","location_type":"city","location_id":"11","display_page":"dineout_home","entity_type":"RESTAURANT","entity_id":"110282","isNewAd":"34","ad_position":"20","slider_position":"20","slider_sequence":"20","creative_id":"0","collection_id":"0","data":"{\\"type\\":\\"boost\\",\\"original_rank\\":67,\\"boosted_rank\\":20,\\"ordering_parameter_value\\":{\\"ads_ctr\\":\\"0.032629\\",\\"cost_for_two_ctr\\":\\"0.057822\\",\\"distance\\":\\"5.241061687469482\\",\\"organic_ctr\\":\\"0.041738\\",\\"popularity_score\\":\\"0\\",\\"popularity_score_source\\":\\"default\\",\\"target_left\\":\\"356\\"},\\"ordering_parameter_normalised_value\\":{\\"ads_ctr\\":\\"0.5235779041355529\\",\\"cost_for_two_ctr\\":\\"0.7246318691647345\\",\\"cost_per_unit\\":\\"0.6235875706214689\\",\\"distance\\":\\"0.5078684872740427\\",\\"organic_ctr\\":\\"0.26735933176181204\\",\\"popularity_score\\":\\"0\\",\\"target_left\\":\\"0.13156788566624633\\"},\\"search_id\\":\\"f516fee0-e917-4e58-abd7-23c49a0683e9\\",\\"section_name\\":\\"more\\",\\"total_score\\":0.44873298816698104}","subzone_id":"0"}',
          event_names: {
            tap: '{"action":"click"}',
            impression: '{"action":"impression"}',
            served: '{"action":"serve"}',
          },
        },
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"110282","element_type":"listing","rank":20,"metadata":{"is_ad":"true"}}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
    {
      type: "restaurant",
      info: {
        resId: 21606796,
        name: "Ishtaa - Truly South Indian",
        image: {
          url: "https://b.zmtcdn.com/data/pictures/6/21606796/f785cf66121b1d168572202cad398c0f_featured_v2.jpg",
          urlWithParams:
            "https://b.zmtcdn.com/data/pictures/6/21606796/f785cf66121b1d168572202cad398c0f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A",
        },
        o2FeaturedImage: {
          url: "https://b.zmtcdn.com/data/pictures/6/21606796/c337995d29a3a054068df95ebea4889b_o2_featured_v2.jpg",
        },
        rating: {
          has_fake_reviews: 0,
          aggregate_rating: "3.9",
          rating_text: "3.9",
          rating_subtitle: "Good",
          rating_color: "9ACD32",
          votes: "299",
          subtext: "REVIEWS",
          is_new: false,
        },
        ratingNew: {
          newlyOpenedObj: null,
          suspiciousReviewObj: null,
          ratings: {
            DINING: {
              rating_type: "DINING",
              rating: "3.7",
              reviewCount: "288",
              reviewTextSmall: "288 Reviews",
              subtext: "288 Dining Reviews",
              color: "#1C1C1C",
              ratingV2: "3.7",
              subtitle: "DINING",
              sideSubTitle: "Dining Ratings",
              bgColorV2: {
                type: "green",
                tint: "500",
              },
              newOnDining: false,
            },
            DELIVERY: {
              rating_type: "DELIVERY",
              rating: "4.0",
              reviewCount: "11",
              reviewTextSmall: "11 Reviews",
              subtext: "11 Delivery Reviews",
              color: "#E23744",
              ratingV2: "4.0",
              subtitle: "DELIVERY",
              sideSubTitle: "Delivery Ratings",
              bgColorV2: {
                type: "green",
                tint: "700",
              },
              newOnDelivery: false,
            },
          },
        },
        cft: {
          text: "₹1,000 for two",
        },
        cfo: {
          text: "₹400 for one",
        },
        locality: {
          name: "Bodakdev, Ahmedabad",
          address: "Ground Floor, Sun Orbit, PRL Colony, Bodakdev, Ahmedabad",
          localityUrl: "ahmedabad/bodakdev-restaurants",
        },
        timing: {
          text: "Closes in 35 minutes",
          color: "#e5521f",
        },
        cuisine: [
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/south-indian/",
            name: "South Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/north-indian/",
            name: "North Indian",
          },
          {
            deeplink:
              "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            url: "https://www.zomato.com/ahmedabad/restaurants/chinese/",
            name: "Chinese",
          },
        ],
        should_ban_ugc: false,
        costText: {
          text: "₹1,000 for two",
        },
      },
      order: [],
      gold: {
        instant: 10,
        welcome_offer: false,
        gold_offer: false,
        text: "Flat",
        offerValue: "10% OFF",
        isGoldIcon: false,
      },
      takeaway: [],
      cardAction: {
        text: "",
        clickUrl: "/ahmedabad/ishtaa-truly-south-indian-bodakdev/info",
        clickActionDeeplink: "",
      },
      distance: "6.6 km",
      isPromoted: false,
      promotedText: "",
      trackingData: [
        {
          table_name: "zsearch_events_log",
          payload:
            '{"search_id":"f516fee0-e917-4e58-abd7-23c49a0683e9","location_type":"delivery_cell","location_id":"4133887237286789120","page_type":"dineout","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21606796","element_type":"listing","rank":21}',
          event_names: {
            tap: '{"action":"tap"}',
            impression: '{"action":"impression"}',
          },
        },
      ],
      allCTA: [],
      promoOffer: "",
      checkBulkOffers: false,
      bulkOffers: [],
      isDisabled: false,
      bottomContainers: [],
    },
  ];
  const BodyComponent = () => {
    return (
      <div className="card-body-container">
        {/* <RestaurantCard resData={resObj}></RestaurantCard> */}
        {resObj.map((res) => (
          <RestaurantCard key={res.info.resId} resData={res}></RestaurantCard>
        ))}
      </div>
    );
  };
  
  const RestaurantCard = ({ resData }) => {
    const { name } = resData?.info;
    const { rating } = resData?.info?.ratingNew?.ratings?.DINING;
    const { url } = resData?.info.image;
    const { text } = resData?.info?.cft;
    const cuisines = resData?.info?.cuisine.map((c) => c.name).join(", ");
  
    return (
      <div className="res-card">
        <img src={url} alt="img" />
        <h5>{name}</h5>
        <h5>{cuisines}</h5>
        <h5>{rating}</h5>
        <h5>{text}</h5>
      </div>
    );
  };

  const AppLayoutComponent = () => {
    return (
      <div className="app">
        <HeaderComponent></HeaderComponent>
        <BodyComponent></BodyComponent>
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayoutComponent />);