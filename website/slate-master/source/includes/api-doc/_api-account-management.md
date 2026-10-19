# API Documentation 

## Account Management API

The API to login and edit profile information inside the platform.

### POST : Register

> Create Account 

```json
{
  "email":"test@mail.com",
  "password":"S1fre8char",
  "firstName":"test",
  "lastName":"test",
  "company":"ivenOptional",
  "telephone":"5554443322"
}
```

> Expected Response (200) 

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiVXNlciIsInN1YiI6Ijk3NjY3MzQ3LWI3YzctNGY1Ni1iNDZmLWMyZTAzMmYzMDhlNyIsImV4cCI6MTU0MDIwMDEwNH0.DDll23ZeMta_L4VMx37sIiKMWJOS2lejYQ1Qi-0QYPc",
    "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiVXNlciIsInN1YiI6Ijk3NjY3MzQ3LWI3YzctNGY1Ni1iNDZmLWMyZTAzMmYzMDhlNyIsImV4cCI6MTU0MDI4NjIwNH0.8rYID3UhFUfLIalmSzbR7vA1OKc3Tisy-kht-e2RhsE",
    "fullName": "iven test"
}
```

> Already Existing Account Response (409)

```json
{
    "httpStatus":409,
    "errorCode":"080010",
    "domain":"AUTH",
    "devMessage":"Check provided email, Already exists exception",
    "userMessage":"User with provided email already taken",
    "time":1542008550161
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://ivenplatform.com/api/auth/register`

#### Request Parameters

parameter | description
----------|-------------
**`email`** | for login operation use a valid mail address (required)
**`password`** | for login operaion use a valid password. Password can least 8 character and number or word parameters are acceptable, special characters are unacceptable. (required)
**`firstName`** | account owner's name (required)
**`lastName`** | account owner's surname (required)
**`company`** | acoount owner's company (optinal)
**`telephone`** | account owner's telephone (optional)

#### Response Parameters

parameter | description
----------|-------------
**`accessToken`** | header parameter to authorize user to IVEN Platform 
**`refreshToken`** | header parameter to authorize user to IVEN Platform
**`fullName`** | account owner's name


### POST : Login

> Login

```json
{
  "email":"testaccount@mail.com",
  "password":"S1fre8char"
}
```

> Expected Response (200)

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiVXNlciIsInN1YiI6Ijk3NjY3MzQ3LWI3YzctNGY1Ni1iNDZmLWMyZTAzMmYzMDhlNyIsImV4cCI6MTU0MDIwMDE2Mn0.ITwmCrDPXSRv9gfHgE3rTCA1nMVcfjvPvyBUsj1-Dl4",
    "refreshToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiVXNlciIsInN1YiI6Ijk3NjY3MzQ3LWI3YzctNGY1Ni1iNDZmLWMyZTAzMmYzMDhlNyIsImV4cCI6MTU0MDI4NjI2Mn0.MGnQBCOWqESUxjBfYE31yyuHB_6BSoc582PURiKLwx0",
    "fullName": "iven test"
}
```

> Not Existing Account Response (401)

```json
{
    "httpStatus":401,
    "errorCode":"080003",
    "domain":"AUTH",
    "devMessage":"Check provided credentials, Unauthorized",
    "userMessage":"User not found",
    "time":1542008165839
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://ivenplatform.com/api/auth/login`

#### Request Parameters

parameter | description
----------|-------------
**`email`** | registered user mail address
**`password`** | user password

#### Response Parameters

parameter | description
----------|-------------
**`accessToken`** | header parameter to authorize user to IVEN Platform 
**`refreshToken`** | header parameter to authorize user to IVEN Platform
**`fullName`** | account owner's name

### POST : Logout

> Logout

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    "done": true
}
```

> Expired Token (401)

```json
{
    "httpStatus":401,
    "errorCode":"023",
    "domain":"AUTH",
    "devMessage":"Token is expired",
    "userMessage":null,
    "time":null
}
```

> Already Logout (401)

```json
{
    "httpStatus":401,
    "errorCode":"080026",
    "domain":"AUTH",
    "devMessage":"This user has no available token",
    "userMessage":"This user has no available token",
    "time":1542008450595
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://ivenplatform.com/api/auth/logout`

#### Header Parameters

parameter | description
----------|-------------
Authorization | Bearer `refreshToken`

#### Request Parameters

An empty json

#### Response Parameters

parameter | description
----------|-------------
**`done`** | boolean result of operation