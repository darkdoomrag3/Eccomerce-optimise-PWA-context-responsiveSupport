const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://m.media-amazon.com/images/I/81wjXkWKsWL._AC_UY327_QL65_.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://m.media-amazon.com/images/I/61i6jTuCSaL._AC_UY327_QL65_.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://m.media-amazon.com/images/I/812QNDkfDrL._AC_UY327_QL65_.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://m.media-amazon.com/images/I/91hyo7cXibL._AC_UY327_QL65_.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://m.media-amazon.com/images/I/915o2qCAbzL._AC_UY327_QL65_.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://m.media-amazon.com/images/I/71QweR0H1sL._AC_UY327_QL65_.jpg',
          price: 14
        },
       
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: 'https://m.media-amazon.com/images/I/71YXO5rIZKL._AC_UY327_QL65_.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: 'https://m.media-amazon.com/images/I/91gQxZOFAhL._AC_UY327_QL65_.jpg',
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: 'https://m.media-amazon.com/images/I/61hHIBVuEnL._AC_UY327_QL65_.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: 'https://m.media-amazon.com/images/I/61Veo7waHTL._AC_UY327_QL65_.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://m.media-amazon.com/images/I/71LNiCGOqhL._AC_UY327_QL65_.jpg',
          price: 160
        },
        
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: 'https://m.media-amazon.com/images/I/A1gFHIuFg8L._AC_UY327_QL65_.jpg',
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://m.media-amazon.com/images/I/61NTLJotLRL._AC_UY327_QL65_.jpg',
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://m.media-amazon.com/images/I/91Zv5wL+AdL._AC_UY327_QL65_.jpg',
          price: 90
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: 'https://m.media-amazon.com/images/I/71JEH+gdQgL._AC_UY327_QL65_.jpg',
          price: 165
        },
      
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: 'https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY327_QL65_.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: 'https://m.media-amazon.com/images/I/81Q71WtLBlL._AC_UY327_QL65_.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: 'https://m.media-amazon.com/images/I/61PftdE7QrL._AC_UY327_QL65_.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: 'https://m.media-amazon.com/images/I/81o8Tll-5-L._AC_UY327_QL65_.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://m.media-amazon.com/images/I/81QlA9bY4PL._AC_UY327_QL65_.jpg',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://m.media-amazon.com/images/I/51if47n2aPL._AC_UY327_QL65_.jpg',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://m.media-amazon.com/images/I/61-fLGfCtWL._AC_UY327_QL65_.jpg',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: 'https://m.media-amazon.com/images/I/71bRl4ymGDL._AC_UY327_QL65_.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: 'https://m.media-amazon.com/images/I/51B4zvRbRBL._AC_UY327_QL65_.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://m.media-amazon.com/images/I/81hvy0QbcPL._AC_UY327_QL65_.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: 'https://m.media-amazon.com/images/I/51uMBnr431L._AC_UY327_QL65_.jpg',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://m.media-amazon.com/images/I/41OfhZ7qhaL._AC_UY327_QL65_.jpg',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://m.media-amazon.com/images/I/51xN6MrgRlL._AC_UY327_QL65_.jpg',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  