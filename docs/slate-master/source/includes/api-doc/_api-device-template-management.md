## Device Template Management API

The API to create templates for devices in order to add and manage devices easily.

### POST : Create Template

> Create Template

```json
{
	"name":"device-template-test",
	"description":"template-description",
	"tags": {
		"year":"2018"
		
	},
	"spaceId":"bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
	"propertiesSchema":{
		"$schema":"http://json-schema.org/draft-04/schema#","type":"object",
		"properties": {
           "temp": {
               "type": "number"
           },
           "high_temp": {
               "type": "boolean",
               "function": "temp>81"
           }
       }
	}
}
```

> Expected Response (200)

```json
{
    "templateId": "b1d7b7fc-d832-4686-9103-616faf090b50"
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

`POST http://api.ivenplatform.com/device-templates` 

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
**`name`** | specific template name
**`description`** | template description for content
**`tags`** | device specific tags for grouping devices
**`spaceId`** | space id of template create (UUID)
**`propertiesSchema`** | device properties that send/receive data types to device.

#### Response Parameter

parameter | description
----------|-------------
**`templateId`** | created template id (UUID)

### GET : Template Details

> Expected Response

```json
{
    "template": {
        "id": "b1d7b7fc-d832-4686-9103-616faf090b50",
        "name": "device-template-test",
        "description": "template-description",
        "tags": {
            "year": "2018"
        },
        "propertiesSchema": {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "temp": {
                    "type": "number"
                },
                "high_temp": {
                    "type": "boolean",
                    "function": "temp>81"
                }
            }
        },
        "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
        "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
        "updatedBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
        "createdAt": 1540210787149,
        "updatedAt": 1540210787149
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

`GET http://api.ivenplatform.com/device-templates/<templateId>` 

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
**`templateId`** | templateId that want to see details (UUID)

#### Response Parameter

parameter | description
----------|-------------
**`templateId`** | given template id from IVEN Platform (UUID)
**`name`** | given template name by space member
**`description`** | given template description by space member
**`tags`** | given template tags by space member
**`propertiesSchema`** | given template properties by space member
**`spaceId`** | given space id by space member (UUID)
**`createdBy`** | who create this template
**`updatedBy`** | who last update this template
**`createdAt`** | when created this temlate
**`updatedAt`** | when last updated this template 

### PUT : Update Template

> Update Template

```json
{
  "name": "device-template-test",
    "description": "device-description",
    "propertiesSchema": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
            "temperature": {
                "type": "number"
            },
            "high_temp": {
                "type": "boolean",
                "function": "temperature>80"
            },
            "counter": {
                "type": "number"
            }
        }
    },
    "tags": {
        "year" : "2018",
        "label" : "machine"
    }
}
```

> Expected Response (200)

```json
{
    "template": {
        "id": "b1d7b7fc-d832-4686-9103-616faf090b50",
        "name": "device-template-test",
        "description": "device-description",
        "tags": {
            "year": "2018",
            "label": "machine"
        },
        "propertiesSchema": {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "type": "object",
            "properties": {
                "temperature": {
                    "type": "number"
                },
                "high_temp": {
                    "type": "boolean",
                    "function": "temperature>80"
                },
                "counter": {
                    "type": "number"
                }
            }
        },
        "spaceId": "bc9fae7f-6acc-4f6f-918f-5fe3d5e8a2ea",
        "createdBy": "1eef3a0d-26f0-4ac1-80b7-67cabf9cde85",
        "updatedBy": null,
        "createdAt": 1540212193704,
        "updatedAt": 1540212193704
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

`PUT http://api.ivenplatform.com/device-templates/<templateId>`

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
**`templateId`** | templateId that want to see details (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`name`** | altered name
**`description`** | altered description
**`tags`** | add/change/remove device tag
**`propertiesSchema`** | add/change/remove property

#### Response Parameters

parameter | description
----------|-------------
**`templateId`** | given template id from IVEN Platform (UUID)
**`name`** | given template name by space member
**`description`** | given template description by space member
**`tags`** | given template tags by space member
**`propertiesSchema`** | given template properties by space member
**`spaceId`** | given space id by space member (UUID)
**`createdBy`** | who create this template
**`updatedBy`** | who last update this template
**`createdAt`** | when created this temlate
**`updatedAt`** | when last updated this template 

### GET : Template List At Given Space

> Expected Result (200)

```json
{
    "templates": {
        "items": [
            {
                "templateId": "9fbad838-658f-4afd-a767-0cf8726296bf",
                "name": "test-template",
                "createdAt": 1539608425288
            },
            {
                "templateId": "b1d7b7fc-d832-4686-9103-616faf090b50",
                "name": "device-template-test",
                "createdAt": 1540210789054
            }
        ],
        "page": 1,
        "pageSize": 5,
        "count": 2,
        "first": true,
        "last": true,
        "pageCount": 1,
        "paged": false,
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

`GET http://api.ivenplatform.com/device-templates?spaceId=<spaceId>`

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
**`spaceId`** | spaceId that want to see template details (UUID)

#### Request Parameters

parameter | description
----------|-------------
**`spaceId`** |  (Required)
**`pageNo`** | page number that will be displayed - `type = integer` (Optional)
**`pageSize`** | item count that will be displayed - `type = integer` (Optional)
**`sort`** | which parameter to sort (Ex: ) - `type = string` (Optional)
**`sortType`** | how will be sort items (Ex: ) - `type = string` (Optional)

#### Response Parameters

parameter | description
----------|-------------
**`templates/items`** | gives template list
**`templateId`** | gives found template id's (UUID)
**`name`** | gives found template name's
**`createdAt`** | gives when created template