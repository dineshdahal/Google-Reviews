import { useState, useEffect, createContext, useContext } from "react";
import { getReviews } from "./api/reviews";

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {


    const [reviews,setReviews]=useState([])

    useEffect(() => {
        const reviewdata = async () => {
          const daata = await getReviews()
          setReviews(daata)
        }

        if(reviews.length<1){
          reviewdata()
        }
  },[])

    const initialReviews = [
        {
            "id": 1,
            "name": "Parbat Limbu",
            "star": 3,
            "description": "I feel fortunate to have had the opportunity to work with such a remarkable team. Their dedication, ...",
            "date": "2 weeks ago",
            "imageLink": "https://lh3.googleusercontent.com/a/ACg8ocLkG-otiG9fV5UM92LycPHRSN2cOhWb7wUd_LWwvAAG=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/102478938955506277141/reviews?hl=en-US"
        },
        {
            "id": 2,
            "name": "narayan adhikari",
            "star": 5,
            "description": "it's a good place for anyone who is seeking to make a better career in the IT industry.",
            "date": "11 months ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjWH0I7fmtse-e5F9b9OrOzlXXnwZDZ2ONSEfGVmCceL8uA=w36-h36-p-rp-mo-ba3-br100",
            "profileLink": "https://www.google.com/maps/contrib/108510247475082871635/reviews?hl=en-US"
        },
        {
            "id": 3,
            "name": "karan qode",
            "star": 5,
            "description": "Great working place ....",
            "date": "4 months ago",
            "imageLink": "https://lh3.googleusercontent.com/a/ACg8ocJP7mafmDb6-5q4XMJLKjC24IdzA0rSGf5W5PuS_Fpr=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/111258144748950123699/reviews?hl=en-US"
        },
        {
            "id": 4,
            "name": "thakur prabhash",
            "star": 5,
            "description": "Awesome bunch of internet geeks under a roof.\nBest software service with an outstanding project mana...",
            "date": "5 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjVgQZSI8ahCvsDkJWJUmHlBvJH0XJ1VG2xeIN2Q8Th9yw=w36-h36-p-rp-mo-ba4-br100",
            "profileLink": "https://www.google.com/maps/contrib/103780367869194334473/reviews?hl=en-US"
        },
        {
            "id": 5,
            "name": "Prashant Sharma",
            "star": 5,
            "description": "Great working place with full of hard working Geeks.",
            "date": "3 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjUs4fTreYtQRoOkzJ-BEzrLpcVGjssWKvdM94O4FQNZxTI=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/107601998642938853974/reviews?hl=en-US"
        },
        {
            "id": 6,
            "name": "Bjai Neupane",
            "star": 5,
            "description": "Just go there and you will love ❤?that place. …",
            "date": "3 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjUHgzczP8h102TBXOJa0SVh1OZRwt8FDMERfhm8ndlrgdk=w36-h36-p-rp-mo-ba2-br100",
            "profileLink": "https://www.google.com/maps/contrib/114212497594929606367/reviews?hl=en-US"
        },
        {
            "id": 7,
            "name": "Decent Prabhash",
            "star": 5,
            "description": "Best web development company in Nepal",
            "date": "6 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjVY7zt3dZCgsPcX0q5obII4NPBmssJEvxZXGE3f2PfpDA=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/109502539875968666144/reviews?hl=en-US"
        },
        {
            "id": 8,
            "name": "Kunwar Chandra Pal",
            "star": 5,
            "description": "Great Working Place!",
            "date": "a year ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjUgD5cgVN2fyJZE5UP4_Pn6NQAZ0-iOLmqBjOyzopbefnJa=w36-h36-p-rp-mo-ba4-br100",
            "profileLink": "https://www.google.com/maps/contrib/109236543751286474338/reviews?hl=en-US"
        },
        {
            "id": 9,
            "name": "Subash Khatri",
            "star": 5,
            "description": "Once I worked here.",
            "date": "a year ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjUu3iZz5hJurD9iHurIL-0aJuz3mFGhjH9beb5_Lq1lBJ1p=w36-h36-p-rp-mo-ba3-br100",
            "profileLink": "https://www.google.com/maps/contrib/100024676204225767009/reviews?hl=en-US"
        },
        {
            "id": 10,
            "name": "Rabi Ghimire",
            "star": 5,
            "description": "Workplace",
            "date": "3 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjWUObI3U1bwnBcgTECp4KXtdkAkZbKMMosYlsEBvKKCXQI=w36-h36-p-rp-mo-ba3-br100",
            "profileLink": "https://www.google.com/maps/contrib/102711586715136386484/reviews?hl=en-US"
        },
        {
            "id": 11,
            "name": "Yubaraj Pokhrel",
            "star": 4,
            "description": "",
            "date": "5 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a/ACg8ocLF-irKcWRXk88gEUY4cMv3XIG8H1kuJDeC6fGVKlpk=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/107119796562079118482/reviews?hl=en-US"
        },
        {
            "id": 12,
            "name": "Kunwar Chandra Pal",
            "star": 5,
            "description": "",
            "date": "5 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjWERv0GwbNnPRVdxxUyNOYtcIPHzYZyjuPvEpp8WQj2RDc=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/108481649736291692402/reviews?hl=en-US"
        },
        {
            "id": 13,
            "name": "Binaya Chaudhary",
            "star": 5,
            "description": "",
            "date": "a week ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjVpjP4tOyt3yk0GV6S9n3WJTAAJihEin2N-um3QCAb9zqU=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/112180671144570788061/reviews?hl=en-US"
        },
        {
            "id": 14,
            "name": "Ajay Pyatha",
            "star": 5,
            "description": "",
            "date": "2 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjUUf5ZETGrtyWxh-B1HBX7WE-Qmoo_UmMC_d_eOueJ8BDQ=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/116527484093004879028/reviews?hl=en-US"
        },
        {
            "id": 15,
            "name": "Navneet Kumar Saini",
            "star": 5,
            "description": "",
            "date": "5 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjXrw_BaqqjuhI4mK-YgLC8fA1u6sW7T7gvdcOvrxrnKaBI=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/107951998966737387735/reviews?hl=en-US"
        },
        {
            "id": 16,
            "name": "Sujan Gainju",
            "star": 5,
            "description": "",
            "date": "4 years ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjXZwSOzxuQkwPi7XOgkVoqmQ-XVH3p7xCetmTCgkYanj0U=w36-h36-p-rp-mo-ba2-br100",
            "profileLink": "https://www.google.com/maps/contrib/116200922879480599722/reviews?hl=en-US"
        },
        {
            "id": 17,
            "name": "Bikin Qode",
            "star": 5,
            "description": "",
            "date": "4 months ago",
            "imageLink": "https://lh3.googleusercontent.com/a/ACg8ocJ7oUlBww7iI9WqdUeQLagSEK-UYzmPOkP5RU9tA-a4=w36-h36-p-rp-mo-br100",
            "profileLink": "https://www.google.com/maps/contrib/117978924742436828826/reviews?hl=en-US"
        },
        {
            "id": 18,
            "name": "Laxmi Tiwari",
            "star": 3,
            "description": "",
            "date": "a year ago",
            "imageLink": "https://lh3.googleusercontent.com/a-/ALV-UjVBJKHAb44CYSfEN4vY5qRnV-UV4KAkQNw-RiZN-lr8kJ8=w36-h36-p-rp-mo-ba4-br100",
            "profileLink": "https://www.google.com/maps/contrib/101571339437075709010/reviews?hl=en-US"
        }
    ]

    return (
        <ReviewsContext.Provider value={{reviews}}>
            {children}
        </ReviewsContext.Provider>
    )
}

export const useReviews = () => {
    return useContext(ReviewsContext)
}