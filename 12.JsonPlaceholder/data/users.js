const UsersData = [
    {
        "id": 1,
        "name": "John Doe",
        "username": "johndoe",
        "email": "johndoe@example.com",
        "address": {
            "street": "123 Main St",
            "city": "New York",
            "zipcode": "10001"
        },
        "phone": "123-456-7890",
        "website": "johndoe.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "username": "janesmith",
        "email": "janesmith@example.com",
        "address": {
            "street": "456 Elm St",
            "city": "Los Angeles",
            "zipcode": "90001"
        },
        "phone": "987-654-3210",
        "website": "janesmith.com"
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "username": "michaelj",
        "email": "michaelj@example.com",
        "address": {
            "street": "789 Oak St",
            "city": "Chicago",
            "zipcode": "60601"
        },
        "phone": "555-123-4567",
        "website": "michaeljohnson.com"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "username": "emilyd",
        "email": "emilyd@example.com",
        "address": {
            "street": "101 Pine St",
            "city": "Houston",
            "zipcode": "77001"
        },
        "phone": "444-567-8901",
        "website": "emilydavis.com"
    },
    {
        "id": 5,
        "name": "David Brown",
        "username": "davidb",
        "email": "davidb@example.com",
        "address": {
            "street": "222 Cedar St",
            "city": "San Francisco",
            "zipcode": "94101"
        },
        "phone": "333-789-0123",
        "website": "davidbrown.com"
    },
    {
        "id": 6,
        "name": "Jessica Wilson",
        "username": "jessicaw",
        "email": "jessicaw@example.com",
        "address": {
            "street": "333 Birch St",
            "city": "Seattle",
            "zipcode": "98101"
        },
        "phone": "222-345-6789",
        "website": "jessicawilson.com"
    },
    {
        "id": 7,
        "name": "Robert Martinez",
        "username": "robertm",
        "email": "robertm@example.com",
        "address": {
            "street": "444 Maple St",
            "city": "Denver",
            "zipcode": "80201"
        },
        "phone": "111-456-7890",
        "website": "robertmartinez.com"
    },
    {
        "id": 8,
        "name": "Sarah Lee",
        "username": "sarahlee",
        "email": "sarahlee@example.com",
        "address": {
            "street": "555 Redwood St",
            "city": "Boston",
            "zipcode": "02101"
        },
        "phone": "999-234-5678",
        "website": "sarahlee.com"
    },
    {
        "id": 9,
        "name": "William Anderson",
        "username": "williamand",
        "email": "williamand@example.com",
        "address": {
            "street": "666 Spruce St",
            "city": "Atlanta",
            "zipcode": "30301"
        },
        "phone": "888-345-6789",
        "website": "williamanderson.com"
    },
    {
        "id": 10,
        "name": "Olivia Thomas",
        "username": "oliviat",
        "email": "oliviat@example.com",
        "address": {
            "street": "777 Palm St",
            "city": "Miami",
            "zipcode": "33101"
        },
        "phone": "777-456-7890",
        "website": "oliviathomas.com"
    },
    {
        "id": 11,
        "name": "Daniel White",
        "username": "danielw",
        "email": "danielw@example.com",
        "address": {
            "street": "888 Aspen St",
            "city": "Dallas",
            "zipcode": "75201"
        },
        "phone": "666-567-8901",
        "website": "danielwhite.com"
    },
    {
        "id": 12,
        "name": "Sophia Harris",
        "username": "sophiah",
        "email": "sophiah@example.com",
        "address": {
            "street": "999 Walnut St",
            "city": "Phoenix",
            "zipcode": "85001"
        },
        "phone": "555-678-9012",
        "website": "sophiaharris.com"
    },
    {
        "id": 13,
        "name": "Liam Carter",
        "username": "liamc",
        "email": "liamc@example.com",
        "address": {
            "street": "456 Ocean Ave",
            "city": "San Diego",
            "zipcode": "92101"
        },
        "phone": "111-234-5678",
        "website": "liamcarter.com"
    },
    {
        "id": 14,
        "name": "Isabella Roberts",
        "username": "isabellar",
        "email": "isabellar@example.com",
        "address": {
            "street": "789 Pinecone Rd",
            "city": "Austin",
            "zipcode": "73301"
        },
        "phone": "222-345-6789",
        "website": "isabellaroberts.com"
    },
    {
        "id": 15,
        "name": "Noah King",
        "username": "noahk",
        "email": "noahk@example.com",
        "address": {
            "street": "101 Harbor Blvd",
            "city": "Tampa",
            "zipcode": "33601"
        },
        "phone": "333-456-7890",
        "website": "noahking.com"
    },
    {
        "id": 16,
        "name": "Mia Scott",
        "username": "mias",
        "email": "mias@example.com",
        "address": {
            "street": "222 Sunset Dr",
            "city": "Nashville",
            "zipcode": "37201"
        },
        "phone": "444-567-8901",
        "website": "miascott.com"
    },
    {
        "id": 17,
        "name": "James Hall",
        "username": "jamesh",
        "email": "jamesh@example.com",
        "address": {
            "street": "333 Cherry Ln",
            "city": "Portland",
            "zipcode": "97201"
        },
        "phone": "555-678-9012",
        "website": "jameshall.com"
    },
    {
        "id": 18,
        "name": "Emma Adams",
        "username": "emmaa",
        "email": "emmaa@example.com",
        "address": {
            "street": "444 Brook St",
            "city": "Minneapolis",
            "zipcode": "55401"
        },
        "phone": "666-789-0123",
        "website": "emmaadams.com"
    },
    {
        "id": 19,
        "name": "Benjamin Nelson",
        "username": "benjaminn",
        "email": "benjaminn@example.com",
        "address": {
            "street": "555 Valley Rd",
            "city": "Charlotte",
            "zipcode": "28201"
        },
        "phone": "777-890-1234",
        "website": "benjaminnelson.com"
    },
    {
        "id": 20,
        "name": "Ava Wright",
        "username": "avaw",
        "email": "avaw@example.com",
        "address": {
            "street": "666 Summit Ave",
            "city": "Indianapolis",
            "zipcode": "46201"
        },
        "phone": "888-901-2345",
        "website": "avawright.com"
    },
    {
        "id": 21,
        "name": "Lucas Perez",
        "username": "lucasp",
        "email": "lucasp@example.com",
        "address": {
            "street": "777 Cypress St",
            "city": "Columbus",
            "zipcode": "43201"
        },
        "phone": "999-012-3456",
        "website": "lucasperez.com"
    },
    {
        "id": 22,
        "name": "Charlotte Harris",
        "username": "charlotteh",
        "email": "charlotteh@example.com",
        "address": {
            "street": "888 Sycamore Rd",
            "city": "San Antonio",
            "zipcode": "78201"
        },
        "phone": "123-234-3456",
        "website": "charlotteharris.com"
    },
    {
        "id": 23,
        "name": "Elijah Lewis",
        "username": "elijahl",
        "email": "elijahl@example.com",
        "address": {
            "street": "999 Timber Ln",
            "city": "Jacksonville",
            "zipcode": "32201"
        },
        "phone": "234-345-4567",
        "website": "elijahlewis.com"
    },
    {
        "id": 24,
        "name": "Harper Walker",
        "username": "harperw",
        "email": "harperw@example.com",
        "address": {
            "street": "1010 Meadow Dr",
            "city": "Louisville",
            "zipcode": "40201"
        },
        "phone": "345-456-5678",
        "website": "harperwalker.com"
    },
    {
        "id": 25,
        "name": "Henry Young",
        "username": "henryy",
        "email": "henryy@example.com",
        "address": {
            "street": "1111 Birch Ave",
            "city": "Baltimore",
            "zipcode": "21201"
        },
        "phone": "456-567-6789",
        "website": "henryyoung.com"
    },
    {
        "id": 26,
        "name": "Evelyn Allen",
        "username": "evelyna",
        "email": "evelyna@example.com",
        "address": {
            "street": "1212 River Rd",
            "city": "Oklahoma City",
            "zipcode": "73101"
        },
        "phone": "567-678-7890",
        "website": "evelynallen.com"
    },
    {
        "id": 27,
        "name": "Alexander Hernandez",
        "username": "alexh",
        "email": "alexh@example.com",
        "address": {
            "street": "1313 Lakeview St",
            "city": "Memphis",
            "zipcode": "38101"
        },
        "phone": "678-789-8901",
        "website": "alexhernandez.com"
    },
    {
        "id": 28,
        "name": "Sofia King",
        "username": "sofiak",
        "email": "sofiak@example.com",
        "address": {
            "street": "1414 High St",
            "city": "Las Vegas",
            "zipcode": "89101"
        },
        "phone": "789-890-9012",
        "website": "sofiaking.com"
    },
    {
        "id": 29,
        "name": "Jackson Green",
        "username": "jacksong",
        "email": "jacksong@example.com",
        "address": {
            "street": "1515 Low St",
            "city": "Detroit",
            "zipcode": "48201"
        },
        "phone": "890-901-0123",
        "website": "jacksongreen.com"
    },
    {
        "id": 30,
        "name": "Amelia Baker",
        "username": "ameliab",
        "email": "ameliab@example.com",
        "address": {
            "street": "1616 Field Rd",
            "city": "Kansas City",
            "zipcode": "64101"
        },
        "phone": "901-012-1234",
        "website": "ameliabaker.com"
    },
    {
        "id": 31,
        "name": "Sebastian Torres",
        "username": "sebastiant",
        "email": "sebastiant@example.com",
        "address": {
            "street": "1717 Hilltop Ave",
            "city": "Milwaukee",
            "zipcode": "53201"
        },
        "phone": "012-123-2345",
        "website": "sebastiantorres.com"
    }

]

export default UsersData;