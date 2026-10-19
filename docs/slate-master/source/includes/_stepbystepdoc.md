# IVEN Step By Step Platform Documentation

## Space Management

### User Management

### Register

If you do not have you can create quickly.
![register](/images/platform/register.png)

### Login

Enter your email and password
![login](/images/platform/login.png)

### Space Create

A space is the first step to start an IOT solution. By creating a space, a user can be space owner to manage space settings. In IVEN platform, space creator will be invite other users to work at same space in the future.

![space](/images/platform/createspace.png)

Click “create space” and enter your space.

![space](/images/platform/spaces.png)

## Step by Step Device Management

### Device Registration

An IoT lifecycle starts with device registration. User must create a device in IVEN platform by providing following informations

Creating Single Device

![device](/images/platform/createsingledevice.png)

**Device Information**

* Device Name

* Description

* Unique Identifier: Mac address or serial no

* Device Property: Properties define the fields and data types of the Device’s state. These are used to properly visualize and validate the various sensor or other data this Device reports. For example a Device with a temperature sensor might have an property with the data type "Number" and the name "temperature".

* Device Tags: Tags provide a way to organize your Devices. Tags are defined as key-value pairs. In other parts of the platform, like visualizations, you can query Devices by their tags.

![device](/images/platform/deviceinformation.png)

**Register**

Select a Secret Key

Generating New Secret Key

Using Existing Secret Key


### Secret Key Creation
If you do not have any secretkey, you have to create a secret key.

![secret](/images/platform/registerdevice.png)

After click “Generate a new Secret Key” button

![secret](/images/platform/createsecretkey.png)

Enter Secret Key name value

![secret](/images/platform/getsecretkey.png)

After copying and/or downloading your secret, click “I’ve got my Secret Key” and close the window.

Now you can register a device with the generated secret key.

Click the device and register device with the generated secret key.

![secret](/images/platform/selectsecretkey.png)

Select your secret key and continue registering your device.

### Bulk Device Registration

Bulk Device registration is use for collective device register operation.

As a pre-requisite, we must have a device template for Bulk Device Registration.

### Device Template Creation

![template](/images/platform/templateinmenu.png)

If you didn’t create a device template before, create your first template.

Provide information(properties and tags) for the template like creating a new device, however without unique identifier.

![template](/images/platform/templatevalues.png)
![template](/images/platform/templatevalue.png)

After finishing click “Create New Template”.

![template](/images/platform/alltemplates.png)

Note: If you want to create more templates, you will simply use this page and click “Create New Template” button for new templates.

Also you can use templates for “Create Single Device” and “Create Bulk Devices” operations.

If you choose “Create Single Device” option with the created template, than you will provide Unique Identifier for the device and a Device Name. Also you can add new property or tag for the device.

![device](/images/platform/createsingledevice.png)

If you choose “Create Bulk Devices” you have to provide a .CSV file which includes device IDs of the devices.

![device](/images/platform/csvfile.png)

When you upload .CSV file you will look this page and display contains that will be create device number.

If your space does not have any Secret Key, firstly you have to generate a new key.
        
![device](/images/platform/csvloaded.png)

Secret Key is a pre-requisite for bulk device registration. If you do not have a secret key, than you have to create one in order to continue you registration.

In this page you will see template details for bulk device registration.

After controlling the template, click “Start Bulk Creation & Registration” and you will be directed to Operational Logs page.

![task](/images/platform/bulktasks.png)

In task detail you will see all the necessary information about the operation.

![task](/images/platform/taskdetails.png)

* While devices are in creation process. Task Status will be In Progress

* When creation process is complete. Task Status will be Completed

* When creation process is complete. Result column will switch from Not Completed to Completed.

### Device Connection

After registering your Device to IVEN Platform successfully, now you can connect to with your device IVEN Platform.

We can test with Mqttbox program. [Download MQTTBOX](http://workswithweb.com/mqttbox.html)

First create a mqtt client.

![mqttbox](/images/platform/mqttbox.png)

Copy client id and mqtt host from IVEN platform.

![mqttbox](/images/platform/devicetest.png)

Enter clientid and mqtt host link to mqttbox.

Fill the provided field to MqqtBox as following:

* IVEN mqtt host link : mqtt://mqtt.qa.ivenplatform.com (port 1883)

* Select protocol : mqtt/tcp

* Append timestamp to MQTT client id?  : No

* Enter username and password.

* And  enter Connect Reconnect period        : 10000000

![mqttbox](/images/platform/mqttclient.png)

After Save..

![mqttbox](/images/platform/mqttconnected.png)

![mqttbox](/images/platform/connectiondone.png)

Congratulations! You have successfully connected your Device to IVEN Platform!

### Device Activation

Now you can test sending data from MQTT Box to the platform

* Subscribe to **"act"** topic to activate its topics:
* Publish a JSON object with **"evt"** topic to test sending data:

![mqttbox](/images/platform/actsub.png)

![mqttbox](/images/platform/actdone.png)

After subscribe topic Activation Status is done

![mqttbox](/images/platform/evtpublish.png)

With evt event publish an empty JSON object for testing. After publishing an empty JSON object Data Received process is done.

![mqttbox](/images/platform/icon.png)

![mqttbox](/images/platform/evtdone.png)

After data received we can see device topic items with description.

![mqttbox](/images/platform/takemedevices.png)

Now we can go detailed device page with clicking "Take me to Device's page”.

![platform](/images/platform/devicedetail.png)

Lets publish data and check device last state,for example temperature=24 ;

![platform](/images/platform/publishdata.png)

### View Single Device Detail

![platform](/images/platform/devicedetailwithnum.png)

* **Device information**

Device information section shows us name, description, ID, unique Identifier and tags.

* **Device last state**

Device last state section shows us device shadow. Device shadow is the virtual twin of the physical device. Device shadow is used for storing physical device's last state and retrieving last state along with updated property statistics. So, IVEN Platform can request device's last state and property statistics whenever it is necessary. When device status is offline, device last state update commands are kept on device shadow to actuate physical device later.

For historic data of the device, click “See Historical Data” and add a date for filtering.

* **Device logs**

In device logs section we can add filter and see device logs.

###Device Test Mode

Devices will publish to following topic for testing connectivity.The topic is v1/test.If the test mode is turned on, the transmitted data will not affect the device last state.Test mode button is under the device logs section.

## Firmwares

###Create Firmware

We need to create a firmware for sending device or devices firmware updates from firmware tab.

For the first time;

![firmware](/images/platform/firmwares.png)

If you have a firmware;

![firmware](/images/platform/firmwarelist.png)

We need to enter a firmware name and metadata to create a firmware.

![firmware](/images/platform/firmwarevalues.png)

![firmware](/images/platform/allfirmwares.png)

Click the created firmware and create new firmware version.

![firmware](/images/platform/firmwaredetail.png)

Enter the firmware version name or number or link.













