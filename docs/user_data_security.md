---
title: User Data Security and Encryption
description: Information about data logging, encryption, and user data protection for compliance with EN 18031-1:2024 and EU RED.
keywords: [neoVI PI, Open Raspberry PI, User Data Security and Encryption information]
sidebar_position: 3
sidebar_label: User Data Security and Encryption
---

# User Data Security and Encryption

## 2. Overview

This device complies with **EN 18031-1:2024** and the **EU Radio Equipment Directive (RED)**. It provides features to protect user data stored on removable SD cards, non-removable SD cards, or internal eMMC memory.

### 2.1 Data Logging

- Data logging is **disabled by default**. No information is stored until enabled via **Vehicle Spy 3**.
- When enabled, data may include sensitive information depending on your configuration.

### 2.2 Data Protection

- Set a **data-protection password** in the configuration software.
- **All logged data is automatically encrypted** when a password is set.
- Encrypted data can only be opened using **ICS decryption software (Extract/Export)** with the correct password.
- If the password is lost, **data cannot be recovered**.

### 2.3 Recommendations

- Always use encryption when storing **sensitive or personal data**.
- These features ensure compliance with **EN 18031-1:2024** and the **EU Radio Equipment Directive (RED)**.

:::warning[Warning]

   **User Responsibility:**  
   If you install your own operating system or application code, you are responsible for ensuring continued **RED compliance**.