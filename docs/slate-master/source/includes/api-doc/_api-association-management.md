## Association Management API

The API to manage devices via 3rd party applications.

### POST : Create Application

> Request Body

```json
{
	"spaceId":"bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
	"name":"sample-app"
}
```

> Expected Response (200)

```json
{
    "id": "f2a0296f-2250-49db-9c31-8a87fb7da922",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiQXBpIiwic3ViIjoiZjJhMDI5NmYtMjI1MC00OWRiLTljMzEtOGE4N2ZiN2RhOTIyIiwiZXhwIjoxNTcyNTMwODgyfQ.UFe59tP_CpOZLWW9r6WmDbBSSI-remCaRjIU75m_1qM"
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

> Already Associated Device Response (409)

```json
{
    "httpStatus": 409,
    "errorCode": "080051",
    "domain": "AUTH",
    "devMessage": "Provided name is already used for space",
    "userMessage": "Provided name is already used for space",
    "time": 1542014445799
}
```

<aside class="notice">
Start to this operation space must have an at least device
</aside>

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/applications`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### Request Parameters

parameter | description
----------|-------------
**`spaceId`** | which space that will add an application
**`name`** | application name (unique)

#### Response Parameters

parameter | description
----------|-------------
**`id`** | gives an applicationId (UUID)
**`token`** | gives a token that connect to IVEN Platform for application

### GET : Application Details

> Expected Response (200)

```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiQXBpIiwic3ViIjoiZjJhMDI5NmYtMjI1MC00OWRiLTljMzEtOGE4N2ZiN2RhOTIyIiwiZXhwIjoxNTcyNTMwODgyfQ.UFe59tP_CpOZLWW9r6WmDbBSSI-remCaRjIU75m_1qM",
    "name": "sample-app",
    "createdAt": 1540994882170,
    "updatedAt": 1540994882170,
    "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
    "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85"
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
Start to this operation space must have an at least device
</aside>

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`GET http://api.ivenplatform.com/applications/<applicationId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameters

parameter | description
----------|-------------
**`applicationId`** | applicationId that want to see application details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`token`** | gives a token to connect to IVEN PLatform for application
**`name`** | gives application name 
**`createdAt`** | when created the application
**`updatedAt`** | when last updated the application
**`CreatedBy`** | who created the application
**`updatedBy`** | who last updated the application

### PUT : Update Applicaiton

> Request Body

```json
{
	"name":"sample-application"
}
```

> Expected Response (200)

```json
{
    //Empty JSON Body
}
```

> After `Update Application` Control the Application Details

```json
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiQXBpIiwic3ViIjoiZjJhMDI5NmYtMjI1MC00OWRiLTljMzEtOGE4N2ZiN2RhOTIyIiwiZXhwIjoxNTcyNTMwODgyfQ.UFe59tP_CpOZLWW9r6WmDbBSSI-remCaRjIU75m_1qM",
    "name": "sample-application",
    "createdAt": 1540994882170,
    "updatedAt": 1540995296432,
    "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
    "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85"
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
Start to this operation space must have an at least device
</aside>

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`PUT http://api.ivenplatform.com/applications/<applicationId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameters

parameter | description
----------|-------------
**`applicationId`** | applicationId that want to update details

#### Request Parameters

parameter | description
----------|-------------
**`name`** | which application name will be change

### GET : List Applications By Space 

> Expected Response (200)

```json
{
    "applicationTokens": {
        "items": [
            {
                "id": "f2a0296f-2250-49db-9c31-8a87fb7da922",
                "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiQXBpIiwic3ViIjoiZjJhMDI5NmYtMjI1MC00OWRiLTljMzEtOGE4N2ZiN2RhOTIyIiwiZXhwIjoxNTcyNTMwODgyfQ.UFe59tP_CpOZLWW9r6WmDbBSSI-remCaRjIU75m_1qM",
                "name": "sample-application",
                "createdAt": 1540994882170,
                "updatedAt": 1540995296432,
                "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85"
            },
            {
                "id": "1998ac02-f97e-4633-8f24-27c2212c8c1e",
                "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiQXBpIiwic3ViIjoiMTk5OGFjMDItZjk3ZS00NjMzLThmMjQtMjdjMjIxMmM4YzFlIiwiZXhwIjoxNTcyNTMxNjgxfQ.AA8INYxbt17THUtsOe1-Gdyc9JEE8p-iY4DlPxdmfSY",
                "name": "test-app",
                "createdAt": 1540995681380,
                "updatedAt": 1540995681380,
                "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85"
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

<aside class="notice">
Start to this operation space must have an at least device
</aside>

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`GET http://api.ivenplatform.com/applications?spaceId=<spaceId>&pageNo=<pageNo>&pageSize=<pageSize>&sort=<sort>&sortType=<sortType>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameters

parameter | description
----------|-------------
**`spaceId`** | spaceId that want to see application list
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ASC) - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`id`** | gives applicationId
**`token`** | gives token to connect to IVEN Platform for application
**`createdAt`** | when created the application
**`updatedAt`** | when last updated the application
**`createdBy`** | who created the application
**`updatedBy`** | who last updated the application

### DELETE : Delete Application

> Request Body

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    //Empty JSON Body
}
```

> After `Delete Application` Control the Application List

```json
{
    "applicationTokens": {
        "items": [
            {
                "id": "f2a0296f-2250-49db-9c31-8a87fb7da922",
                "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWJUeXBlIjoiQXBpIiwic3ViIjoiZjJhMDI5NmYtMjI1MC00OWRiLTljMzEtOGE4N2ZiN2RhOTIyIiwiZXhwIjoxNTcyNTMwODgyfQ.UFe59tP_CpOZLWW9r6WmDbBSSI-remCaRjIU75m_1qM",
                "name": "sample-application",
                "createdAt": 1540994882170,
                "updatedAt": 1540995296432,
                "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
                "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85"
            }
        ],
        "page": 1,
        "pageSize": 5,
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
Start to this operation space must have an at least device
</aside>

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`DELETE http://api.ivenplatform.com/applications/<applicationId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameters

parameter | description
----------|-------------
**`applicationId`** | applicationId that want to delete 

### POST : Create Association

> Request Body

```json
{
	"deviceUniqueId": "testing-device"
}
```

> Expected Response (200)

```json
{
    "associationId": "6f5d9e10-177d-4ba9-94c8-16e01fa27b1a",
    "deviceName": "testing-device",
    "deviceUniqueId": "testing-device",
    "tags": {
        "year": "2018"
    },
    "connectionStatus": "CONNECTED"
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
Start to this operation space must have an at least device
</aside>

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/associations`

#### Header Parameters

Key | Value
----|------
API-KEY | token that comes from IVEN Platform
API-CLIENT-ID | unique id from third party apps

#### Request Parameters

parameter | description
----------|-------------
**`deviceUniqueId`** | which device will be associate 

#### Response Parameters

parameter | description
----------|-------------
**`associationId`** | gives associationId from IVEN Platform
**`deviceName`** | gives associated device name
**`deviceUniqueId`** | gives associated device unique id
**`tags`** | gives applicable device tags
**`connectionStatus`** | gives associated device connection status

### GET : Association Details

> Expected Response (200)

```json
{
    "associationId": "6f5d9e10-177d-4ba9-94c8-16e01fa27b1a",
    "deviceName": "testing-device",
    "deviceUniqueId": "testing-device",
    "tags": {
        "year": "2018"
    },
    "connectionStatus": "CONNECTED"
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

`GET http://api.ivenplatform.com/associations/<associationId>`

#### Header Parameters

Key | Value
----|------
API-KEY | token that comes from IVEN Platform
API-CLIENT-ID | unique id from third party apps

#### URL Request Parameters

parameter | description
----------|-------------
**`associationId`** | associationId that want to see association details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`associationId`** | gives associationId from IVEN Platform
**`deviceName`** | gives associated device name
**`deviceUniqueId`** | gives associated device unique id
**`tags`** | gives applicable device tags
**`connectionStatus`** | gives associated device connection status

### GET : List Associations

> Expected Response (200)

```json
{
    "associations": {
        "items": [
            {
                "associationId": "6f5d9e10-177d-4ba9-94c8-16e01fa27b1a",
                "deviceName": "testing-device",
                "deviceUniqueId": "testing-device",
                "tags": {
                    "year": "2018"
                },
                "connectionStatus": "CONNECTED"
            },
            {
                "associationId": "e0812704-f244-439c-8680-3572ff64b945",
                "deviceName": "sample-device",
                "deviceUniqueId": "sample-device",
                "tags": {
                    "temp": "2018"
                },
                "connectionStatus": "DISCONNECTED"
            }
        ],
        "page": 1,
        "pageSize": 2,
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

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/associations`

#### Header Parameters

Key | Value
----|------
API-KEY | token that comes from IVEN Platform
API-CLIENT-ID | unique id from third party apps

#### Response Parameters

parameter | description
----------|-------------
**`associationId`** | gives associationId from IVEN Platform
**`deviceName`** | gives associated device name
**`deviceUniqueId`** | gives associated device unique id
**`tags`** | gives applicable device tags
**`connectionStatus`** | gives associated device connection status

### GET : Association's Historic Data

> Expected Response (200)

```json
{
    "metadata": {
        "totalPageCount": 0,
        "totalItemCount": 1,
        "paged": false
    },
    "items": [
        {
            "timestamp": 1540996520318,
            "data": {
                "temp": 45
            }
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

<aside class="notice">
This operation doing with HTTP connection!
</aside>

`POST http://api.ivenplatform.com/associations/<associationId>/historic-data?startDate=<startDate_as_timestamp>`

#### Header Parameters

Key | Value
----|------
API-KEY | token that comes from IVEN Platform
API-CLIENT-ID | unique id from third party apps

#### URL Request Parameters

parameter | description
----------|-------------
**`associationId`** | which association will see
**`startDate`** | interval start (timestamp) (Optional)
**`endDate`** | interval end (timestamp) (Optional)
**`sortType`** | how will sort the result list (Optional)
**`limitDate`** | (Optional)
**`offset`** | (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`totalPageCount`** | gives how many page will be display
**`totalItemCount`** | gives how many times data send to device 
**`paged`** | gives pagination boolean status
**`timestamp`** | gives when data send to device
**`data`** | gives which data send to device


### GET : Association's Last State

> Expected Response (200)

```json
{
    "reported": {
        "temp": {
            "value": 45,
            "timestamp": 1540996520318
        }
    },
    "delta": {
        "temp": {
            "value": null,
            "timestamp": null
        }
    },
    "connectionStatus": "CONNECTED"
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

`GET http://api.ivenplatform.com/associations/<associationId>/last-state`

#### Header Parameters

Key | Value
----|------
API-KEY | token that comes from IVEN Platform
API-CLIENT-ID | unique id from third party apps

#### URL Request Parameters

parameter | description
----------|-------------
**`associationId`** | associationId that want to see association details (UUID)

#### Response Parameters

parameter | description
----------|-------------
**`reported`** | gives association device's last data that reported
**`delta`** |
**`connectionStatus`** | gives associated device connection status


### POST : Send Command to Associated Device

> Request Body

```json
{
	"payload" : {
		"test":45
	}
}
```

> Expected Response (200)

```json
{
    "done": true
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

`POST http://api.ivenplatform.com/associations/<associationId>/send-command`

#### Header Parameters

Key | Value
----|------
API-KEY | token that comes from IVEN Platform
API-CLIENT-ID | unique id from third party apps

#### URL Request Parameters

parameter | description
----------|-------------
**`associationId`** | associationId that want to send command (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`payload`** | data that want to send to device 

#### Response Parameters

parameter | description
----------|-------------
**`done`** | boolean result of operation

### DELETE : Delete Association

> Request Body

```json
{
    //Empty JSON Body
}
```

> Expected Response (200)

```json
{
    //Empty JSON Body
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

`DELETE http://api.ivenplatform.com/associations/<associationId>`

#### Header Parameters

Key | Value
----|------
Content-Type | application/json
Authorization | Bearer `accessToken`

#### URL Request Parameters

parameter | description
----------|-------------
**`associationId`** | associationId that want to delete (UUID)