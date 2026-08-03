---
title: Privacy Policy
description: Privacy Policy for BibleMarker.
---

*Last updated: June 2026*

Kevin Spears ("we," "our," or "us") operates the BibleMarker application and website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use BibleMarker.

BibleMarker is local-first: your study data is stored on your device and the app works fully offline. Some features are optional and involve our servers — most importantly **account-based cloud sync**, which you must explicitly turn on by creating an account. This policy describes both the local-only experience and what changes when you use those optional features.

## 1. Information We Collect

### 1.1 Information You Provide

- **Email Address (optional, for sync accounts):** If you choose to create a BibleMarker account to sync your study data across devices, we collect your email address. We use a passwordless sign-in: you enter your email, we email you a one-time code, and you enter that code to sign in. Your email is stored on our servers and is associated with your synced data.
- **User Content:** All annotations, highlights, notes, keywords, studies, and other content you create in the app are stored locally on your device using SQLite. **If — and only if — you create an account and enable cloud sync, a copy of this content is uploaded to our servers** so it can be synchronized to your other signed-in devices (see Section 3).
- **ESV API Key:** If you choose to use the ESV translation, you must provide your own API key obtained directly from Crossway. Kevin Spears does not provide API keys. Your ESV API key is stored locally on your device only and is never transmitted to our servers.

### 1.2 Automatically Collected Information

- **Device Identifier, App Version, and Platform:** On launch, the app contacts our configuration service to retrieve feature settings. This request includes a random identifier generated when you first install the app, your app version, and your platform (for example, iOS, Android, macOS). This identifier is a random install ID — not your name, account, email, or any hardware or advertising identifier. It is used to control feature availability and to roll out or disable features. This happens for all users, including those who never create an account.
- **IP Address (server-side):** When your device communicates with our servers (configuration, sign-in, sync, or Bible-module downloads), our hosting provider receives your IP address as a normal part of the network connection. We use it only to operate the service and to protect it from abuse (for example, rate limiting). We do not use it to build a profile of you.
- **Bible Text:** The app reads Bible text from local SWORD module files stored on your device. The NASB module is bundled with the app; additional modules are downloaded on request from our servers.
- **ESV Caching:** If you use the ESV API, fetched chapters may be cached locally on your device for offline access. Requests go directly from your device to Crossway's servers using your own API key.
- **Usage Data:** The app stores usage preferences and settings locally on your device.

### 1.3 Third-Party Services and Service Providers

We rely on the following third parties to operate BibleMarker:

- **Cloudflare:** Hosts our server infrastructure, databases, file storage, and feature-configuration service. Your account email, device identifiers, session tokens (stored only as hashes), and — if you enable sync — your study content are stored on Cloudflare's platform on our behalf.
- **Postmark:** Delivers our sign-in emails. When you request a sign-in code, your email address and the one-time code are sent to Postmark so it can deliver the message.
- **Crossway (ESV API, optional):** Provides the ESV (English Standard Version) translation. Requires your own API key obtained directly from Crossway. Subject to their terms and privacy policy, including noncommercial use requirements. Requests are made directly from your device to Crossway's servers using your own key. We do not intercept, store, or have access to these requests.

You are responsible for complying with the terms of service of any Bible translation provider you use.

## 2. How We Use Your Information

- To store your study data on your device and make the app work offline.
- If you enable cloud sync: to store and synchronize your study content across the devices signed in to your account.
- To sign you in and keep you signed in (via your email and one-time codes).
- To deliver Bible modules you request and to provide the ESV translation if you supply a key.
- To operate, secure, and improve the service, including protecting it from abuse.

We do not sell your personal information, and we do not use your study content for advertising or for training machine-learning models.

## 3. Data Storage and Security

- **Local Storage (default):** All user data (annotations, notes, keywords, studies, API keys, preferences) is stored locally on your device in a SQLite database. The database itself is never placed in any cloud folder.
- **Account-Based Cloud Sync (optional):** If you create an account and enable sync, copies of your study content are uploaded to our servers (hosted on Cloudflare) and associated with your account so they can be synchronized to your other signed-in devices. Data is transmitted over encrypted connections (HTTPS/TLS). Our databases store account metadata — your email, device identifiers, and session tokens (as hashes only) — and your study content is stored as data files keyed to your account.
- **iCloud Sync (optional, Apple devices):** On macOS and iOS, you may instead enable iCloud sync. When enabled, the app writes journal files to your personal iCloud Drive to synchronize study data across your own devices. This data is stored in your personal iCloud account and is not accessible to Kevin Spears.
- **Backup & Export:** You can export your data as backup files (JSON) or study exports (Markdown / PDF) saved to your device's Documents folder. On iOS, these files are accessible via the Files app. Exported files remain on your device unless you choose to share them.
- **Security:** We use encrypted connections and store credentials only as hashes. However, no method of electronic storage or transmission is 100% secure. You are responsible for maintaining the security of your device and your email account.

## 4. Data Retention

- **Local data** remains on your device until you delete it within the app or uninstall the app.
- **Synced account data** is retained on our servers for as long as your account exists. Sign-in codes expire shortly after they are issued, and inactive sign-in sessions expire automatically.
- **Account deletion:** You can delete your account from within the app (Settings → Data). Deleting your account removes your account and your synced content from our servers. Deleting your account does not delete the study data stored locally on your devices.

## 5. Data Sharing and Disclosure

We do not sell, rent, or trade your personal information. We share information only:

- With the service providers listed in Section 1.3, who process data on our behalf to operate the service.
- If required by law, regulation, or valid legal process.
- If you use the ESV API, your requests are made directly from your device to Crossway's servers, and they may collect information according to their own privacy policy.

## 6. Your Rights and Choices

- **Access Your Data:** All your data is accessible within the app on your device.
- **Sync is Optional:** You can use BibleMarker entirely offline without creating an account. Cloud sync is off until you turn it on.
- **Delete Your Data:** You can clear specific annotations or studies within the app, delete all local data by uninstalling the app, and delete your account and synced server data from within the app (Settings → Data).
- **API Key Management:** You can add, modify, or remove Bible API keys at any time through the app settings.

## 7. Children's Privacy

Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.

## 8. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.

## 9. California Privacy Rights

If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to request access to it, and the right to request its deletion. The personal information we may collect is described in Section 1. We do not sell your personal information. To exercise these rights, contact us using the details in Section 11, or use the in-app account deletion feature to remove your synced data.

## 10. GDPR Rights (European Users)

If you are in the European Economic Area (EEA) or the United Kingdom, you have rights under the GDPR, including the rights to access, correct, delete, and port your personal data, and to object to or restrict certain processing. The legal bases on which we process your data are: your consent (for creating an account and enabling sync), the performance of our service to you (to sync and store the data you ask us to), and our legitimate interests (to secure the service and prevent abuse). You can exercise your deletion right directly via in-app account deletion, or contact us using the details below. Your data is processed using our service providers (Section 1.3), which may process data outside your country.

## 11. Contact Us

If you have any questions about this Privacy Policy, please contact us:

- Website: [spearssoftware.com](https://spearssoftware.com)
- Support: See our [Support](/support/) page

## 12. Bible Translation Copyright

Bible translations used in this app are subject to their respective copyrights and terms of use:

- **NASB 2020 (New American Standard Bible®):** Copyright © 1960, 1971, 1977, 1995, 2020 by The Lockman Foundation. All rights reserved. Used under license.
- **ESV (English Standard Version):** © 2001 by Crossway. Used by permission. All rights reserved. ESV text may not be used for commercial purposes without permission.
- **Other translations:** Subject to their respective copyright holders' terms and conditions.

This app complies with the terms of use for all Bible translations it includes, including ESV API requirements for noncommercial use and copyright attribution.
