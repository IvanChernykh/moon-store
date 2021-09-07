const SHOP_DATA = {
    mens: {
        title: "Men's",
        linkUrl: '/shop/mens',
        imageUrl: 'https://i.pinimg.com/564x/56/53/77/56537710ec884b1d3dbe9408bf52cc0c.jpg',
        items: [
            {
                id: 1,
                name: 'Grey Over Sized T-shirt',
                price: 40,
                imageUrl: 'https://i.pinimg.com/564x/4d/60/1d/4d601d1c101256f346aaad473a09d7cc.jpg'
            },
            {
                id: 2,
                name: 'Jeans Jacket',
                price: 30,
                imageUrl: 'https://i.pinimg.com/564x/75/f6/4a/75f64a70ac4daf034ece9445e98213fe.jpg'
            },
            {
                id: 3,
                name: 'Pink Plaid Shirt',
                price: 35,
                imageUrl: 'https://i.pinimg.com/564x/57/a0/81/57a081204e0eaca3fd768681d10648d7.jpg'
            },
            {
                id: 4,
                name: 'Grey Plaid Shirt',
                price: 24,
                imageUrl: 'https://i.pinimg.com/564x/e4/86/e2/e486e2c5ab729550d9f3add3c1a034c6.jpg'
            },
            {
                id: 5,
                name: 'Pink T-shirt',
                price: 25,
                imageUrl: 'https://i.pinimg.com/564x/85/ba/86/85ba869492cd985549d8ec67bb5249ca.jpg'
            },
            {
                id: 6,
                name: 'Black Jacket',
                price: 30,
                imageUrl: 'https://i.pinimg.com/564x/e5/55/25/e55525ffd71622b55e6523ce12e5a2a3.jpg'
            },
        ]
    },
    womens: {
        title: "Women's",
        linkUrl: '/shop/womens',
        imageUrl: 'https://i.pinimg.com/564x/1e/64/bb/1e64bb1f1b3098389907da6e2a73a9b9.jpg',
        items: [
            {
                id: 7,
                name: 'Pink Dress',
                price: 40,
                imageUrl: 'https://ivanchernykh.github.io/Posh/img/blog/flaunter-WcX.webp'
            },
            {
                id: 8,
                name: 'Blush Sweater',
                price: 26,
                imageUrl: 'https://i.pinimg.com/564x/58/30/1c/58301c41d263791c3c0fba4c0a13d91d.jpg'
            },
            {
                id: 9,
                name: 'Casual Coat',
                price: 35,
                imageUrl: 'https://i.pinimg.com/564x/47/d4/65/47d465d8d445064981134cc3edd94734.jpg'
            },
            {
                id: 10,
                name: 'Yellow Summer Dress',
                price: 27,
                imageUrl: 'https://i.pinimg.com/564x/66/9a/8d/669a8dacf68097a3586a222fbe01ef31.jpg'
            },
            {
                id: 11,
                name: 'Plaid Skirt',
                price: 30,
                imageUrl: 'https://i.ibb.co/JrV2tn0/plaid-skirt.jpg'
            },
            {
                id: 12,
                name: 'Plaid Jacket Blazer',
                price: 32,
                imageUrl: 'https://i.pinimg.com/564x/07/d5/d0/07d5d0453175f292a52def2a955a576b.jpg'
            },
            {
                id: 13,
                name: 'Black Dot Shirt',
                price: 35,
                imageUrl: 'https://i.pinimg.com/564x/b2/9c/9d/b29c9d2d81f232a4c21505354af400a0.jpg'
            },
            {
                id: 14,
                name: 'Blue T-shirt',
                price: 24,
                imageUrl: 'https://i.pinimg.com/564x/70/9b/d1/709bd17daa48b1d97d0091fb9bfe81bb.jpg'
            },
            {
                id: 15,
                name: 'Powered by plants T-shirt',
                price: 27,
                imageUrl: 'https://i.ibb.co/GHPP9fC/powered-by-plants-t-shirt.jpg'
            },
        ]
    },
    Jeans: {
        title: "Jeans",
        linkUrl: '/shop/jeans',
        imageUrl: 'https://i.pinimg.com/564x/77/72/9a/77729aed3abaf478dfbfa962dbf5e45c.jpg',
        items: [
            {
                id: 16,
                name: 'Light Blue Ripped Jeans',
                price: 25,
                imageUrl: 'https://i.pinimg.com/564x/33/5e/1a/335e1ad6ce2dd395face52c5df01d8e4.jpg'
            },
            {
                id: 17,
                name: 'Blue Jeans',
                price: 21,
                imageUrl: 'https://i.pinimg.com/564x/77/72/9a/77729aed3abaf478dfbfa962dbf5e45c.jpg'
            },
            {
                id: 18,
                name: 'Women Blue Ripped Jeans',
                price: 30,
                imageUrl: 'https://i.ibb.co/bgh9sYb/3868e545e5cdfb627b2ec10c7dfd2c8d.jpg'
            }
        ]
    },
    Hats: {
        title: "Hats",
        linkUrl: '/shop/hats',
        imageUrl: 'https://i.ibb.co/S7Mm4bq/blue-jeans-cap.jpg',
        items: [
            {
                id: 19,
                name: 'Cowboy Hat',
                price: 30,
                imageUrl: 'https://i.ibb.co/7yy1WMV/cowboy-hat.jpg'
            },
            {
                id: 20,
                name: 'Light Blue Cap',
                price: 25,
                imageUrl: 'https://i.ibb.co/2FkqBm4/light-blue-cap.jpg'
            },
            {
                id: 21,
                name: 'Always More Cap',
                price: 27,
                imageUrl: 'https://i.ibb.co/S7Mm4bq/blue-jeans-cap.jpg'
            },
            {
                id: 22,
                name: 'Black Cap Mockup',
                price: 25,
                imageUrl: 'https://i.ibb.co/gvxNbYJ/Black-Cap-Mockup-2.jpg'
            },
            {
                id: 23,
                name: 'Black Cap',
                price: 24,
                imageUrl: 'https://i.ibb.co/FsLq86n/just-black-cap.png'
            }
        ]
    },
    tShirts: {
        title: "T-shirts",
        linkUrl: '/shop/tshirts',
        imageUrl: 'https://i.ibb.co/MkK7G18/red-t-shirt.jpg',
        items: [
            {
                id: 24,
                name: 'Red T-shirt',
                price: 26,
                imageUrl: 'https://i.ibb.co/MkK7G18/red-t-shirt.jpg'
            },
            {
                id: 25,
                name: 'Soul T-shirt',
                price: 31,
                imageUrl: 'https://i.ibb.co/mTGsCMB/soul-t-shirt.jpg'
            },
            {
                id: 26,
                name: 'White T-shirt',
                price: 25,
                imageUrl: 'https://i.ibb.co/ZxcyBvc/white-t-shirt.jpg'
            },
            {
                id: 27,
                name: 'Powered by plants T-shirt',
                price: 27,
                imageUrl: 'https://i.ibb.co/GHPP9fC/powered-by-plants-t-shirt.jpg'
            },
            {
                id: 28,
                name: 'Grey Over Sized T-shirt',
                price: 40,
                imageUrl: 'https://i.pinimg.com/564x/4d/60/1d/4d601d1c101256f346aaad473a09d7cc.jpg'
            }
        ]
    },
}

export default SHOP_DATA