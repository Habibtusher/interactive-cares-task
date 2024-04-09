# interactive-cares-task instructions

Live: https://order-services-six.vercel.app

change .env.example to .env

run "yarn" command in the terminal to install dependencies

run "yarn dev" command to run the project

Endpoints:

    /api/v1/orders (POST)


        {
        "userId": 2,
        "productDetails": [
        {
        "productId": 1,
        "quantity":22
        }
        ],
        "paymentInfo":{
        "transactioId":"QR585QR"
        }
        }

    /api/v1/orders (GET)


    /api/v1/orders/1 (GET BY ID)


    /api/v1/orders/1 (DELETE)


    /api/v1/orders/1 (PATCH)
