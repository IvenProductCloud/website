## Space Management API

The API to create a space for managing the devices and users that somehow has a connection between each other.

### POST : Create Space

> Create Device on IVEN Platform

```json
{
    "name":"test-space"
}
```

> Expected Response (200)

```json
{
    "id": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea"
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/spaces`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Request Parameters

parameter | description
----------|-------------
**`name`** | specific name for describe space name

#### Response Parameters

parameter | description
----------|-------------
**`id`** | given space id by IVEN Platform (UUID)

### GET : Get My Spaces

> Expected Response (200)

```json
{
    "spaces": {
        "items": [
            {
                "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
                "name": "test-space",
                "createdBy": ""
            }
        ],
        "page": 1,
        "pageSize": 1,
        "count": 1,
        "first": true,
        "last": true,
        "paged": false,
        "pageCount": 1,
        "empty": false
    }
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`GET http://api.ivenplatform.com/spaces/me?spaceId=<spaceId>&pageNo=<pageNo>&pageSize=<pageSize>&sort=<sort>&sortType=<sortType>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameters

parameter | description
----------|-------------
**`spaceId`** | which space will create secret (UUID)
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ASC) - `type = string` (Optional)

#### Response Parameter

parameter | description
----------|-------------
**`id`** | given space id from IVEN Platform (UUID)
**`name`** | given space name by space member
**`createdBy`** | who created the space 

### GET : Get Space 

> Expected Response (200)

```json
{
    "id": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
    "name": "test-space",
    "createdBy": ""
}
```

> Logout Account Response / Expired Token Response (401)

```json
{
    "httpStatus": "401",
    "errorCode": "000001",
    "domain": "AUTH",
    "userMessage": "Unathorized, please make sure you have required privileges"
}
```

`GET http://api.ivenplatform.com/spaces/<spaceId>` 

<aside class="notice">
This operation doing with HTTP connection!
</aside>

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`spaceId`** | spaceId that want to see details (UUID)

#### Response Parameter

parameter | description
----------|-------------
**`id`** | given space id from IVEN Platform (UUID)
**`name`** | given space name by space member
**`createdBy`** | who created the space 