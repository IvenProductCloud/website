## Firmware Management API

The API to send and manage firmware actions between device and the cloud.

### POST : Create Firmware

> Create Firmware

```json
{
  "name": "test-firmware",
  "description":"firmware-description",
  "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea"
}
```

> Expected Response (200)

```json
{
    "firmwareId": "72fd00f4-4790-4bb6-a1f0-341769d1a831"
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

`POST http://api.ivenplatform.com/firmwares`

<aside class="notice">
This operation doing with HTTP connection!
</aside>

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Request Parameters

parameter | description
----------|-------------
**`name`** | specific firmware name 
**`description`** | firmware description for additional information
**`spaceId`** | space id that will be create firmware (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`firmwareId`** | IVEN Platform give an unique id for firmware (UUID)

### GET : Firmware Details

> Expected Response (200)

```json
{
    "firmware": {
        "id": "72fd00f4-4790-4bb6-a1f0-341769d1a831",
        "metadata": {
            "name": "test-firmware",
            "description": "firmware-description",
            "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
            "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
            "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
            "createdAt": 1540213769835,
            "updatedAt": 1540213769835
        },
        "versions": []
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

`GET http://api.ivenplatform.com/firmwares/<firmwareId>`

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
**`firmwareId`** | firmwareId that want to see details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`id`** | gives firmware's id
**`name`** | gives firmware's name
**`description`** | gives firmware's description
**`spaceId`** | gives firmware's space id (UUID)
**`createdBy`** | who created the firmware 
**`updatedBy`** | who last updated the firmware
**`createdAt`** | when created the firmware
**`updatedAt`** | when last updated the firmware

### GET : List Firmwares

> Expected Response (200)

```json
{
    "firmwareItems": {
        "items": [
            {
                "id": "72fd00f4-4790-4bb6-a1f0-341769d1a831",
                "name": "test-firmware",
                "description": "firmware-description",
                "createdAt": 1540213770022,
                "updatedAt": 1540213770022
            },
            {
                "id": "96822364-3de0-4640-bd09-d462909b893f",
                "name": "test-firmware-2",
                "description": "fw-description",
                "createdAt": 1540214475018,
                "updatedAt": 1540214475018
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 2,
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

`GET http://api.ivenplatform.com/firmwares?spaceId=<spaceId>&pageNo=<pageNo>&pageSize=<pageSize>&sort=<sort>&sortType=<sortType>`

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
**`spaceId`** | spaceId that want to see firmware details (UUID) (Required)
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ) - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`firmwareItems/items`** | list of created firmwares
**`id`** | gives found firmware id (UUID)
**`name`** | gives found firmware name 
**`description`** | gives firmware description
**`createdAt`** | who create the firmware
**`updatedAt`** | who last update the firmware

### GET : --List My Firmwares

> Expected Response (200)

```json
{
    "firmwareItems": {
        "items": [
            {
                "id": "72fd00f4-4790-4bb6-a1f0-341769d1a831",
                "name": "test-firmware",
                "description": "firmware-description",
                "createdAt": 1540213770022,
                "updatedAt": 1540213770022
            },
            {
                "id": "96822364-3de0-4640-bd09-d462909b893f",
                "name": "test-firmware-2",
                "description": "fw-description",
                "createdAt": 1540214475018,
                "updatedAt": 1540214475018
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 2,
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

`GET http://api.ivenplatform.com/firmwares/me?pageNo=<pageNo>?pageSize=<pageSize>?sort=<sort>?sortType=<sortType>`

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
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ) - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`firmwareItems/items`** | list of created firmwares
**`id`** | gives found firmware id (UUID)
**`name`** | gives found firmware name 
**`description`** | gives firmware description
**`createdAt`** | who create the firmware
**`updatedAt`** | who last update the firmware

### PATCH : --Update Firmware Metadata

> Update Firmware Request

```json
{
  "name": "test-firmware",
  "description":"fw-description-new",
  "updatedById": "bc3e01ca-12cd-439e-a799-98ee64d453a2"
}
```

> Expected Response (200)

```json
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

`PATCH http://api.ivenplatform.com/firmwares/<firmwareId>`

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
**`firmwareId`** | firmwareId that want to update details (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`name`** | want to change to new firmware name
**`description`** | want to change to firmware description
**`updatedBy`** | who updated the firmware metadata

#### Response Parameters

parameter | description
----------|-------------
**``** | 


### POST : Add Firmware Version

> Add Firmware Version 

```json
{
    "link": "http://www.link.com/v1-0",
}
```

> Expected Response (200)

```json
{
    "version": "v1-0",
    "link": "http://www.link.com/v1-0",
    "type": "link"
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

`POST http://api.ivenplatform.com/firmwares?type=<upload_type>&name=<firmware_name>`

upload types |
-------------|
FILE |
ZIP | 
RAR | 


<aside class="notice">
This operation doing with HTTP connection!
</aside>

<aside class="notice">
If space member will give a link to firmware, member have to use request body with `link` paramater. Space member will give a file to upload (ZIP or RAR), have to declare this on url and give an empty body
</aside>

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameter

parameter | description
----------|-------------
**`type`** | will describe file type
**`name`** | will give firmare name (should be unique)

#### Request Parameters

parameter | description
----------|-------------
**`link`** | uploaded file url for download version

#### Response Parameters

parameter | description
----------|-------------
**`version`** | added firmware version name
**`link`** | given url on body
**`type`** | which type has given

### GET : List Firmware Versions

> Expected Response (200)

```json
{
    "versionListItem": [
        {
            "version": "v1-0",
            "link": "http://www.link.com/v1-0",
            "createdAt": 1540216266093
        },
        {
            "version": "v1-1",
            "link": "http://www.link.com/v1-1",
            "createdAt": 1540216389088
        },
        {
            "version": "v1-2",
            "link": "http://www.link.com/v1-2",
            "createdAt": 1540216398087
        }
    ]
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

`GET http://api.ivenplatform.com/firmwares/<firmwareId>/versions`

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
**`firmwareId`** | firmwareId that want to see details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`version`** | firmware version
**`link`** | firmware version link
**`createdAt`** | when created firmware

### GET : --List Space Firmware Versions

> Expected Response (200)

```json

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

`GET http://api.ivenplatform.com/firmwares/versions?spaceId=<spaceId>&pageNo=<pageNo>&pageSize=<pageSize>&sort=<sort>&sortType=<sortType>`

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
**`spaceId`** | spaceId that want to see firmware version details (UUID) (Required)
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ) - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`version`** | firmware version
**`link`** | firmware version link
**`createdAt`** | when created firmware

### GET : Firmware with Version

> Expected Response (200)

```json
{
    "name": "test-firmware",
    "version": {
        "name": "v1-0",
        "link": "http://www.link.com/v1-0",
        "additionalParams": null
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

`GET http://api.ivenplatform.com/firmwares/<firmwareId>/versions/<version_name>`

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
**`firmwareId`** | firmwareId that want to see details (UUID)
**`version_name`** | will show specific firmware version details 

#### Response Parameters

parameter | description
----------|-------------
**`name`** | given firmware name
**`version/name`** | given firmware version name on given url
**`version/link`** | given firmware version link on given body
**`version/additionalParams`** |

### DELETE : --Delete Firmware Versions

> Delete Firmware Version Request

```json
{
	"version":""
}
```

> Expected Response (200)

```json

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

`DELETE http://api.ivenplatform.com/firmwares/<firmwareId>/versions`

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
**`firmwareId`** | firmwareId that want to delete (UUID)

#### Response Parameters

parameter | description
----------|-------------
**``** | 

### GET : --Download Firmware Version File

> Expected Response (200)

```json

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

`GET http://api.ivenplatform.com/firmwares/<firmwareId>/versions/<version_name>/download`

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
**`firmwareId`** | want to download firmware file (UUID)
**`version_name`** | will download specific firmware version 

#### Response Parameters

parameter | description
----------|-------------
**``** | 