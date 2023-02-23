<h1>API Endpoints</h1>
<h2>Users</h2>
`POST /user/signup`
Create a new user account.

<h4>Request Body</h4>

```
{
  "name": "Sourav Kumar",
  "email": "sourav@example.com",
  "password": "password",
  "mobile": 0000000000
}
```
<h4>Response Body</h4>

```
{
  "_id":
  "name": "Sourav Kumar",
  "email": "sourav@example.com",
  "password": "password",
  "mobile": 0000000000,
  "role": "user",
  "createdAt": 2023-02-17T19:45:03.216+00:00
  "updatedAt": 2023-02-17T19:45:03.216+00:00
}
```

<p>`GET /user`</p>
Get details of all users.

<h4>Response Body</h4>

```
[{
  "_id":
  "name": "Sourav Kumar",
  "email": "sourav@example.com",
  "password": "password",
  "mobile": 0000000000,
  "role": "user",
  "address": "123 Main Rd",
  "createdAt": 2023-02-17T19:45:03.216+00:00
  "updatedAt": 2023-02-17T19:45:03.216+00:00
}]
```

<p>`GET /user/:id`</p>
Get details for specific user.

<h4>Response Body</h4>

```
{
  "_id":
  "name": "Sourav Kumar",
  "email": "sourav@example.com",
  "password": "password",
  "mobile": 0000000000,
  "role": "user",
  "address": "123 Main Rd",
  "createdAt": 2023-02-17T19:45:03.216+00:00
  "updatedAt": 2023-02-17T19:45:03.216+00:00
}
```


<p>`PATCH /user/edit/:id`</p>
Edit details of any users by _Id

<h4>Request Body</h4>

```
{
  "name": "Sourav Rajak",
  "mobile": 1111111111
}
```

<h4>Response Body</h4>

```
{
  "_id":
  "name": "Sourav Rajak",
  "email": "sourav@example.com",
  "password": "password",
  "mobile": 1111111111,
  "role": "user",
  "address": "123 Main Rd",
  "createdAt": 2023-02-17T19:45:03.216+00:00
  "updatedAt": 2023-02-17T19:45:03.216+00:00
}
```

<p>`DELETE /user/delete/:id`</p>
Delete any users by _Id

<h4>Request Body</h4>

```
{
<!--   res.json("User profile deleted successfully")  -->
}
```

<h2>Products</h2>
`GET /products`
Get a list of all available products.

<h4>Response Body</h4>

```
[{
  "_id": 63ed3102821264b62233c6f6,
  "name": "Notch Neck Solid Top",
  "img": "https://img3.junaroad.com/uiproducts/18404006/zoom_0-1655215443.jpg"
  "price": 1799,
  "discPrice": 699,
  "color": "pink",
  "category": "Women",
  "tags": "new arrival",
  "stocks": 10
}]
```

`GET /products/:id`
Get details for a specific product.

<h4>Response Body</h4>

```
{
  "_id": 63ed3102821264b62233c6f6,
  "name": "Notch Neck Solid Top",
  "img": "https://img3.junaroad.com/uiproducts/18404006/zoom_0-1655215443.jpg"
  "price": 1799,
  "discPrice": 699,
  "color": "pink",
  "category": "Women",
  "tags": "new arrival",
  "stocks": 10
}
```
<p>`PATCH /products/:id`</p>
Edit details of any product by _Id

<h4>Request Body</h4>

```
{
  "name": "Updated name",
  "price": 1599,
  "discPrice": 499 
}
```

<h4>Response Body</h4>

```
{
  "_id": 63ed3102821264b62233c6f6,
  "name": "Updated Name",
  "img": "https://img3.junaroad.com/uiproducts/18404006/zoom_0-1655215443.jpg"
  "price": 1599,
  "discPrice": 499,
  "color": "pink",
  "category": "Women",
  "tags": "new arrival",
  "stocks": 10
}
```

<p>`DELETE /products/:id`</p>
Delete any product by _Id

<h4>Request Body</h4>

```
{
<!--   res.json("Product deleted successfully")  -->
}
```

<h2>Cart</h2>
`POST /cart`
Add an item to a user's shopping cart.


<h4>Request Body</h4>

```
{
  "product": "123",
  "quantity": 2
}
```

<h4>Response Body</h4>

```
{
   "_id": 63f202296d63b6c8ed525eda,
   "product": 63ee31730c42bd82c1b3e53a,
   "quantity": 1,
   "user": 63f1411840da1a96cb2582c6,
   "createdAt": 2023-02-19T11:04:09.259+00:00
   "updatedAt": 2023-02-19T11:04:09.259+00:00
}
```

`GET /cart/items`
Get a user's shopping cart.

<h4>Response Body</h4>

```
{
   "_id": 63f202296d63b6c8ed525eda,
   "product": 63ee31730c42bd82c1b3e53a,
   "quantity": 1,
   "user": 63f1411840da1a96cb2582c6,
   "createdAt": 2023-02-19T11:04:09.259+00:00
   "updatedAt": 2023-02-19T11:04:09.259+00:00
}

<h2>Products</h2>
`POST /orders`
Place an order for a user's shopping cart.
