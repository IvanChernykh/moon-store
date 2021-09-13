const initialState = {
    collections: [
        {
            id: 1,
            linkUrl: '/shop/mens',
            title: "Men's",
            imageUrl: 'https://i.pinimg.com/564x/56/53/77/56537710ec884b1d3dbe9408bf52cc0c.jpg',
        },
        {
            id: 2,
            linkUrl: '/shop/womens',
            title: "Women's",
            imageUrl: 'https://i.pinimg.com/564x/1e/64/bb/1e64bb1f1b3098389907da6e2a73a9b9.jpg',
        },
        {
            id: 3,
            linkUrl: '/shop/jeans',
            title: "Jeans",
            imageUrl: 'https://i.pinimg.com/564x/77/72/9a/77729aed3abaf478dfbfa962dbf5e45c.jpg',
        },
        {
            id: 4,
            linkUrl: '/shop/hats',
            title: "Hats",
            imageUrl: 'https://i.ibb.co/S7Mm4bq/blue-jeans-cap.jpg',
        },
        {
            id: 5,
            linkUrl: '/shop/tshirts',
            title: "T-shirts",
            imageUrl: 'https://i.ibb.co/MkK7G18/red-t-shirt.jpg',
        },
    ]
}

function collectionsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default collectionsReducer