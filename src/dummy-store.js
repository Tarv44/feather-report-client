const categories = [
    "Knives",
    "Blenders",
    "Toasters"
]

const features = {
    "Knives": [
        {
            message: `8-inch`,
            id: 0
        },
        {
            message: "Ergonomic Handle",
            id: 1
        },
        {
            message: "Carbon Stainless Steel",
            id: 2
        },
        {
            message: "Waved Pattern",
            id: 4
        },
        {
            message: "Pakkawood Handle",
            id: 5
        },
        {
            message: "7-inch",
            id: 6
        },
        {
            message: "Black",
            id: 7
        },
        {
            message: "5-inch",
            id: 8
        },
        {
            message: "Lifetime Warranty",
            id: 9
        },
        {
            message: "Santoprene Handle",
            id: 10
        },
        {
            message: "Titanium Plated",
            id: 11
        },
        {
            message: "Comes with Sharpener",
            id: 12
        },
        {
            message: "Fiery Color",
            id: 13
        },
    ],
    "Blenders": [
        {
            message: "700 Watts",
            id: 14
        },
        {
            message: "Multi-Function",
            id: 15
        },
        {
            message: "Black",
            id: 16
        },
        {
            message: "48 oz",
            id: 17
        },
        {
            message: "Glass Jar",
            id: 18
        },
        {
            message: "Plastic Jar",
            id: 19
        },
        {
            message: "1000 Watts",
            id: 20
        },
        {
            message: "72 oz",
            id: 21
        },
        {
            message: "550 Watts",
            id: 22
        },
        {
            message: "Dishwasher Safe",
            id: 23
        },
        {
            message: "1200 Watt",
            id: 24
        },
        {
            message: "24 oz",
            id: 25
        },
        {
            message: "1450 Watts",
            id: 26
        },
        {
            message: "8 Blades",
            id: 27
        },
        {
            message: "6 Blades",
            id: 28
        },
        {
            message: "1800 Watt",
            id: 29
        },
        {
            message: "Built-In Timer",
            id: 30
        },
        {
            message: "Comes with Food Processor",
            id: 31
        },
        {
            message: "Comes with extra to-go cups",
            id: 32
        }
    ],
    "Toasters": []
}

const products = [
    {
        title: `Nutri Ninja Personal and Countertop Blender`,
        price: 159.99,
        brand: `Ninja`,
        category: `Blenders`,
        link: `https://www.amazon.com/Ninja-Personal-Countertop-1200-Watt-BL642/dp/B00NGV4E1G/ref=sr_1_41?dchild=1&keywords=blender&qid=1615071550&sr=8-41`,
        description: `The Nutri Ninja | Ninja Blender Duo with Auto-iQ has 1200 watts of professional power and performance. The XL 72 oz. (64 oz. max liquid capacity) Pitcher features Total Crushing Technology to crush through ice and frozen ingredients in seconds to create creamy frozen drinks.`,
        features: [15, 16, 19, 21, 24, 32, 30]
    },
    {
        title: `Oster Precise Blend 300 Blender`,
        price: 54.99,
        brand: `Oster`,
        category: `Blenders`,
        link: `https://www.amazon.com/Oster-16-Speed-Blender-Glass-006878/dp/B001ASMGNU/ref=sr_1_21?dchild=1&keywords=blender&qid=1615071148&sr=8-21`,
        description: `Perfect for smoothie making and prep work, the Precise Blend 300 is powerful and versatile to help create deliciously appetizing and flavorful meals.`,
        features: [14, 15, 18, 31]
    },
    {
        title: `OMMO Blender`,
        price: 119.00,
        brand: `OMMO`,
        category: `Blenders`,
        link: `https://www.amazon.com/OMMO-Professional-Countertop-Smoothie-Smoothies/dp/B08LKK4JZW/ref=sr_1_22_sspa?dchild=1&keywords=blender&qid=1615067295&sr=8-22-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV0tGV1ZGQjhKNUQ1JmVuY3J5cHRlZElkPUEwMzA3NjMxMjVGOEVBRFNMWTA3QSZlbmNyeXB0ZWRBZElkPUEwMjc0MzkwMllEVlZTUkcwQlhKRyZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=`,
        description: `OMMO 1800w countertop blender has the power to crush through whole fruits, vegetables, and ice in seconds. Powerful nutrient and vitamin extraction provide great tasting, nutritious beverages.`,
        features: [15, 16, 19, 28, 29, 30, 21]
    },
    {
        title: `BLACK+DECKER Countertop Blender`,
        price: 22.44,
        brand: `BLACK+DECKER`,
        category: `Blenders`,
        link: `https://www.amazon.com/BLACK-DECKER-Countertop-10-Speed-BL2010BG/dp/B00OW16ZR0/ref=sr_1_5?dchild=1&keywords=blender&qid=1615067295&sr=8-5`,
        description: `The BLACK+DECKER 10-Speed Blender is a kitchen classic. With 10 speeds and a pulse control, operation is simple and efficient. The durable glass 6-cup jar is easy to pour from and holds several servings of your favorite soups, smoothies, frozen mixers, and more! Plus, cleanup is a breeze thanks to the dishwasher-safe removable parts.`,
        features: [15, 16, 17, 18, 22, 23, 28]
    },
    {
        title: `High Speed Blender`,
        price: 99.99,
        brand: `Homgeek`,
        category: `Blenders`,
        link: `https://www.amazon.com/1450-Watt-Professional-Countertop-Adjustable-Multifunctional/dp/B08DNM6RKV/ref=sr_1_19?dchild=1&keywords=blender&qid=1615067295&sr=8-19&th=1`,
        description: `This homgeek blender provides you with enough strength and precise textures, which can break more than 90% of the cell wall from the ingredients to extract nutrients and vitamins from food to the greatest extent. This is the best kitchen blender for you and an excellent gift choice.`,
        features: [15, 16, 21, 27, 19]
    },
    {
        title: `Oster Blender Pro`,
        price: 62.99,
        brand: `Oster`,
        category: `Blenders`,
        link: `https://www.amazon.com/Oster-Blender-24-Ounce-Smoothie-Brushed/dp/B00XHXN54K/ref=sr_1_13?dchild=1&keywords=blender&qid=1615067295&sr=8-13`,
        description: `Blending just got better with the Oster Pro 1200 Plus. You can make everything fresh and delicious with this blender's versatility and performance.`,
        features: [15, 18, 23, 24, 25, 28]
    },
    {
        title: `Ninja Professional Countertop Blender`,
        price: 89.99,
        brand: `Ninja`,
        category: `Blenders`,
        link: `https://www.amazon.com/Ninja-Professional-Countertop-Technology-BL610/dp/B00NGV4506/ref=sr_1_4?dchild=1&keywords=blender&qid=1615067295&sr=8-4`,
        description: `The Ninja professional blender 1000 features a sleek design and outstanding performance with 1000 watts of professional power. Ninja total crushing blades gives you perfect ice crushing, blending, pureeing, and controlled processing.`,
        features: [15, 16, 19, 20, 21, 28]
    },
    {
        title: `Hamilton Beach Power Elite Blender`,
        price: 29.99,
        brand: `Hamilton Beach`,
        category: `Blenders`,
        link: `https://www.amazon.com/Hamilton-Beach-Functions-Dishwasher-58148A/dp/B00EI7DPI0/ref=sr_1_3?dchild=1&keywords=blender&qid=1615066872&sr=8-3`,
        description: `All the power you need to: Mix, puree, device, crush ice, and more - with only 4 simple buttons. 700-Watt of peak blending power.`,
        features: [14, 15, 16, 17, 18, 23]
    },
    {
        title: `Paudin Chef Knife`,
        price: 28.99,
        brand: `Paudin`,
        category: `Knives`,
        link: `https://www.amazon.com/Chef-Knife-Stainless-Ergonomic-Restaurant/dp/B07BK4YVB3/ref=sr_1_5?dchild=1&keywords=chef+knife&qid=1615059192&sr=8-5`,
        description: `This professional 8'' chef knife can easily handle your daily kitchen tasks of chopping, slicing, mincing and dicing of fruits, vegetables, and several meat varieties. It truly is the all-around cooking knife.`,
        features: [0, 1, 2, 4]
    },
    {
        title: `imarku Chef Knife`,
        price: 39.99,
        brand: `imarku`,
        category: `Knives`,
        link: `https://www.amazon.com/Imarku-Kitchen-Stainless-Ergonomic-Equipment/dp/B01DDBJF12/ref=sr_1_5?dchild=1&keywords=chef+knife&qid=1615059974&sr=8-5`,
        description: `The Imarku 8-inch gyutou knife is designed for professionals who include chefs, culinary experts, food caterers as well as an ordinary person.`,
        features: [0, 1, 2, 5]
    },
    {
        title: `Cutluxe Santoku Knife`,
        price: 36.99,
        brand: `Cutluxe`,
        category: `Knives`,
        link: `https://www.amazon.com/dp/B07L8QTX4C?pd_rd_i=B07L8QTX4C&pd_rd_w=fhK94&pf_rd_p=51cf0d17-50cf-4c89-b1a7-606703cfac11&pd_rd_wg=3kiAB&pf_rd_r=DF1Y3FR38JV20WQXJ7M2&pd_rd_r=64dd8e5e-3b84-4b07-8607-a7cec9e287ad`,
        description: `No knife set is complete without a santoku knife, but an ordinary knife wasn’t going to cut it for Cutluxe. With a perfectionist’s eye, we’ve developed a flawlessly balanced knife that uses leading materials.`,
        features: [1, 2, 5, 6, 7]
    },
    {
        title: `Mercer Culinary Utility Knife`,
        price: 22.00,
        brand: `Mercer Culinary`,
        category: `Knives`,
        link: `https://www.amazon.com/Mercer-Culinary-Genesis-Forged-Utility/dp/B000IBSNM8/ref=sxin_10?ascsubtag=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&creativeASIN=B000IBSNM8&cv_ct_cx=Kitchen+Knife&cv_ct_id=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=Kitchen+Knife&linkCode=oas&pd_rd_i=B000IBSNM8&pd_rd_r=a861f2e5-2dcb-42c5-b3ae-46b8ce89ca75&pd_rd_w=lzWa4&pd_rd_wg=UZHSK&pf_rd_p=35b32c02-1b41-4e49-9b89-0297af2446e1&pf_rd_r=RWC5Z4V132T2WMP17352&qid=1615060712&sr=1-1-64f3a41a-73ca-403a-923c-8152c45485fe&tag=scrippsonsite-20`,
        description: `The sort of knife that goes to work numerous times a day, this Genesis 5-inch utility knife is perfect for slicing sandwiches, cutting up apples, and trimming hard cheeses.`,
        features: [8, 2, 9, 10]
    },
    {
        title: `TUO Kitchen Utility Knife`,
        price: 22.95,
        brand: `TUO`,
        category: `Knives`,
        link: `https://www.amazon.com/TUO-Cutlery-Utility-Knife-Pakkawood/dp/B01GL50U70/ref=sxin_10?ascsubtag=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&creativeASIN=B01GL50U70&cv_ct_cx=Kitchen+Knife&cv_ct_id=amzn1.osa.7abf8191-1ee3-4a88-b387-2b3f7648e92d.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=Kitchen+Knife&linkCode=oas&pd_rd_i=B01GL50U70&pd_rd_r=a861f2e5-2dcb-42c5-b3ae-46b8ce89ca75&pd_rd_w=lzWa4&pd_rd_wg=UZHSK&pf_rd_p=35b32c02-1b41-4e49-9b89-0297af2446e1&pf_rd_r=RWC5Z4V132T2WMP17352&qid=1615060712&sr=1-4-64f3a41a-73ca-403a-923c-8152c45485fe&tag=scrippsonsite-20`,
        description: `The Fiery Phoenix Series small kitchen knives are masters of precision as they are suitable to peel an apple, supreme an orange, core a jalapeno, dice garlic or shallots, cut strawberries and some other small kitchen tasks.`,
        features: [8, 2, 5, 1, 13]
    },
    {
        title: `MOSFiATA Titanium Plated Knife`,
        price: 42.99,
        brand: `MOSFiATA`,
        category: `Knives`,
        link: `https://www.amazon.com/MOSFiATA-Titanium-Sharpener-Stainless-EN1-4116/dp/B085ZWV5R7/ref=sr_1_21?dchild=1&keywords=Kitchen+Knife&qid=1615060712&sr=8-21`,
        description: `MOSFiATA Titanium Plated Knife is made of high-quality German stainless steel, that resists rust, corrosion, and discoloration. The razor-sharp edge is easy to maintain and makes cutting or chopping a breeze.`,
        features: [0, 7, 1, 11, 12]
    },
    {
        title: `Nakiri Japanese Vegetable Knife`,
        price: 37.89,
        brand: `KYOKU`,
        category: `Knives`,
        link: `https://www.amazon.com/KYOKU-Japanese-Vegetable-Knife-Sheath/dp/B07BK53GZN/ref=sr_1_18_sspa?dchild=1&keywords=Kitchen+Knife&qid=1615060712&sr=8-18-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFCV0ZVODMwNzJKUVQmZW5jcnlwdGVkSWQ9QTA2NjMzMTkyNzcxUjlSUU5ZMDVGJmVuY3J5cHRlZEFkSWQ9QTA3NjQwNDIxMFUwMThNSFJZUEEzJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==`,
        description: `Combines the features of a chef's knife with the versatility of a vegetable cleaver. They differ from other knives in their shape, as Nakiris are characterized by their flat profiles and squared off tips. This profile makes these knives ideal for push cutting and chopping but awkward for rock cutting.`,
        features: [1, 2, 5, 6, 7, 9]
    },
    {
        title: `Little Cook Santoku Knife`,
        price: 8.59,
        brand: `Little Cook`,
        category: `Knives`,
        link: `https://www.amazon.com/Little-Santoku-Kitchen-ergonomic-included/dp/B08RN5F8RN/ref=sr_1_57?dchild=1&keywords=Kitchen+Knife&qid=1615066151&sr=8-57`,
        description: `The Little Cook 7-inch santoku knife is Made for professionals who include chefs, culinary experts, food caterers as well as an ordinary person. It is a multipurpose chef's knife that is ideal for various tasks which include cutting, chopping, dicing and slicing vegetables, fruits, fish, meat and other products.`,
        features: [1, 2, 6, 7]
    },
]

