---
title: Alarm System
summary: Customer-defined alarms on incoming weather data, with email and push notifications.
order: 2
thumbnail: /alarms-screenshot.png
media:
  - src: /alarms-condition.png
    alt: Alarm condition editor set to trigger when temperature is at or below 50 °F, with the clear condition shown below
  - src: /alarms-screenshot.png
    alt: Triggered alarm email for "Cold temp" at a weather station, showing the reading, threshold, time, notes, and links to the dashboard
tags: []
---

This is a configurable alarm system that monitors weather data as it's ingested.

Customers define their own alarm conditions, and every incoming reading is evaluated against these conditions in real time. When a condition is met, an alarm opens and notifications go out by **email** and to mobile users via **push**. Reminders follow while the alarm stays active, and a final notification is sent when it clears.

I would place this project in the moderate+ complexity category. A number of factors contributed to its complexity. However, after a few iterations, the final product is simple, for what it is, and works well.
