const categories=[
{
    id: 'rice',
    name:'rice',
    tags:['products','inspiratins','shop'],
    count:147,
    image: require('../assets/wheat.jpg')
},
{
    id: 'wheat',
    name:'wheat',
    tags:['products','inspiratins','shop'],
    count: 16,
    image: require('../assets/wheat.jpg')
},
{
    id: 'tomato',
    name:'tomato',
    tags:['products','inspiratins','shop'],
    count:16,
    image: require('../assets/tomato.jpg')
},

];
const products=[
    {
        id:1,
        name:'',
        description:'',
        tags:['Interior','27m','Ideas'],
        gallery:[
            require('../assets/plants_1.jpg')
        ]
    }

];
const explore=[
    require('../assets/explore_1.jpg')

];
const profile={
    username: "react-ui-kit",
    location: "Europe",
    email: "contact@react-ui-kit.com",
    avatar: require("../assets/avatar.jpg"),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
};
export{
    categories,
    explore,
    products,
    profile,
}