---
title: "Reference: Connector Pinouts and Cable Signal Mappings"
description: "neoVI PI Reference: Connector Pinouts and Cable Signal Mappings"
keywords: ["neoVI PI", "Open Raspberry PI", "Reference: Connector Pinouts and Cable Signal Mappings"]
sidebar_position: 10
sidebar_label: "Reference: Connector Pinouts and Cable Signal Mappings"
---

# Reference: Connector Pinouts and Cable Signal Mappings

## 8. Reference: Connector Pinouts and Cable Signal Mappings

<div class="text--center">

<figure>

![pinout](./assets/pinout.jpg "pinout")
<figcaption></figcaption>
</figure>
</div>

#### Flexible Internal Expansion: Take Advantage of GPIO Headers

These open-ended pins can be used for a variety of purposes, most commonly, to collect input such as sensors or interface to other tools or writing your own scripts. There are three different headers for interconnection between four components:

* RP2040 corresponds to the embedded RPi Pico
* CM 4 corresponds to the signals from RPi CM 4 signals
* DB 9 corresponds to the signals on the DB9 Connector
* DB 26 corresponds to signals on the DB 26 connector

**RPi CM4 Pinout (PiHat Compatible)**

<div class="text--center">

<figure>

![pinout-details](./assets/pinout-details.png "pinout-details")
<figcaption></figcaption>
</figure>
</div>

**RP2040/Pi Pico Pinout (Matches Pi Pico)**

<div class="text--center">

<figure>

![RP2040-Pi-Pico-Pinout](./assets/RP2040Pi-Pico-Pinout.jpg "RP2040-Pi-Pico-Pinout")
<figcaption></figcaption>
</figure>
</div>

**Miscellaneous Pinout**

<div class="text--center">

<figure>

![miscellaneous-pinout](./assets/miscellaneous-pinout.jpg "miscellaneous-pinout")
<figcaption></figcaption>
</figure>
</div>

**The pinout for our neoVI PI DB26 connector follows a specific arrangement of pins and their corresponding functions.**

| Description | DB26 PIN |
|-------------|----------|
| CAN/FD4_L   | 2        |
| CAN/FD1_L   | 4        |
| CAN/FD2_L   | 6        |
| CAN/FD3_L   | 7        |
| GND         | 10       |
| CAN/FD4_H   | 12       |
| CAN/FD1_H   | 14       |
| CAN/FD2_H   | 16       |
| CAN/FD3_H   | 17       |
| VBAT        | 19       |
