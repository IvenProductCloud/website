# Concepts

## Account

Account is the highest management layer of IVEN Platform. Every user must have have an account in order to enable operations in the platform.

## Space

Space is the name of the  management layer which contains devices who somehow have a connection between each other in IVEN Platform.

## Device

Device is the thing which is defined in the IVEN Platform, produces data and has a physical existence. 

### Device Template

It is the template that contains properties and variables of devices that are planned to be added in the platform. Multiple and/or single devices can be added to the platform using device templates.

### Advanced Function

Advance functions are functions that are defined under device templates, which are aiming to transform, decode and enrich real time device data.

### Secret Key

Secret Key is the security sector standard for device-cloud connectivity.

## Registration of Device

### Registration to IVEN

Registration is defining the properties of a device in the IVEN Platform.

### Connection to IVEN

Connection is the connectivity of the registered device with the MQTT Broker. 

### Activation of Device

Activation is the state of the registered and connected device which is able to send and receive data.

## Device Connectivity

### Cloud-to-Device

Cloud-to-Device connectivity is sending data from the cloud to the device via MQTT Broker.

**Firmware Definition**

Firmware Definition is defining the firmware and the version info on the IVEN Platform and making the firmware ready for deployment to activated devices.

**Firmware Deployment**

Firmware Deployment is deploying device firmwares to the correlated devices from the IVEN Platform.

**Command**

Command is sending data from the cloud to the device aiming to trigger defined actions on the device.

### Device-to-Cloud

**Publish Data**

Publish Data is sending data from the device via MQTT Broker to the platform.

## Real Time Data Display

Real Time Data Display(Device Shadow) is the methodolgy for showing real time data of the device which is physically existing. This is simply a virtual copy of the physical device.

## Real Time Rule Engine

Real Time Rule Engine is the structure which enables users to define rules on the real time device data in order to take actions for the business need. 
