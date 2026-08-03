<!--
DRAFT — redraft of src/pages/_privacy.md. Not live. Changes vs the live page:
- Removed the iCloud Sync bullet (iCloud sync was removed from the app); replaced with account-based sync.
- Added a new "Sync Accounts" section (section 4) describing the optional email + 8-digit code sign-in, what is stored on our servers (email address, synced study data, device names, hashed session tokens, storage-usage counters), and in-app Delete Account behavior (verified against the worker: deletes all synced blobs, sessions, devices, usage records, OTP codes, and the account row). Later sections renumbered (old 4-11 are now 5-12).
- Corrected the ESV API key claim: keys are stored on-device, BUT if you sign in to sync, app settings — which include API keys — sync through our servers to your other devices (verified in the app: apiConfigs live in the synced `preferences` table; App.tsx even reloads keys after sync). The old "never transmitted to our servers" wording was no longer true.
- Section 1.2: ASV is the bundled translation; NASB 2020/1995 are free in-app downloads served from our servers (biblemarker.app via Cloudflare); noted the download log (module name, timestamp, country — not tied to an account).
- Sections 2, 5 (old 4): removed "we do not operate servers that receive or store user data" and qualified "we do not collect/transmit" claims with the optional sync exception; named Cloudflare (hosting) and Postmark (sign-in emails) as processors.
- Section 6 (old 5): added Delete Account and sign-out to Your Rights.
- Sections 9-10 (old 8-9, CCPA/GDPR): updated to reflect that sync-account holders can exercise deletion via Delete Account or by contacting us.
- Section 12 (old 11): noted NASB 1995 alongside NASB 2020, that NASB is licensed from The Lockman Foundation and downloaded from our servers, and that the bundled ASV is public domain.
- No analytics/tracking claims were weakened: the app still has no analytics, no ads, no tracking, and works fully offline without an account.
- Bumped "Last updated" to August 2026 (set the real date when publishing).
-->

---
title: Privacy Policy
description: Privacy Policy for BibleMarker.
---

*Last updated: August 2026*

Kevin Spears ("we," "our," or "us") operates the BibleMarker application and website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use BibleMarker.

## 1. Information We Collect

### 1.1 Information You Provide

BibleMarker operates primarily offline and stores data locally on your device. No account is required to use the app. We may collect the following information:

- **User Content:** All annotations, highlights, notes, keywords, studies, and other content you create in the app are stored locally on your device using SQLite. If you sign in to the optional sync feature, this content is also stored on our servers so it can be synchronized across your devices (see Section 4).
- **Email Address (optional):** If you create a sync account, we collect the email address you sign in with. We use it only to send sign-in codes and to identify your account. We do not use it for marketing.
- **ESV API Key:** If you choose to use the ESV translation, you must provide your own API key obtained directly from Crossway. Kevin Spears does not provide API keys. Your ESV API key is stored on your device. If you sign in to sync, your app settings — which include any API keys you have entered — are included in the data synchronized through our servers to your other devices. We do not use your API keys for any purpose other than storing and syncing them for you.

### 1.2 Automatically Collected Information

- **Bible Text:** The ASV translation is included with the app and read locally. The NASB 2020 and NASB 1995 translations are free in-app downloads served from our servers (biblemarker.app, via Cloudflare). We log successful module downloads (module name, timestamp, and country) for the annual reporting required by our license with The Lockman Foundation; these logs are not tied to a sync account. Other SWORD module files are read locally from your device.
- **ESV Caching:** If you use the ESV API, fetched chapters may be cached locally on your device for offline access. Requests go directly from your device to Crossway's servers using your own API key.
- **Usage Data:** The app stores local usage preferences and settings on your device. We do not collect analytics, advertising identifiers, or usage tracking.

### 1.3 Third-Party Services

The app optionally integrates with one third-party Bible API service:

- **ESV API (Crossway):** Provides the ESV (English Standard Version) translation. Requires your own API key obtained directly from Crossway. Subject to their terms and privacy policy, including noncommercial use requirements. Requests are made directly from your device to Crossway's servers using your own key.

We do not intercept, store, or have access to any API requests made from your device to Crossway. You are responsible for complying with the terms of service of any API provider you use.

We also use two service providers to operate the optional sync feature: Cloudflare (hosting and storage for our sync servers) and Postmark (delivery of sign-in code emails). They process data on our behalf and do not use it for their own purposes.

## 2. How We Use Your Information

The app operates fully offline by default and stores data locally:

- All your annotations, notes, and study data remain on your device unless you sign in to sync
- If you sign in to sync, your study data and settings are stored on our servers solely to synchronize them across your devices — we do not read, mine, sell, or share them
- Your email address is used only to send sign-in codes and identify your sync account
- API keys you provide are stored on your device (and synced with your other devices if you sign in) and are only used to make direct API calls from your device to Bible translation services

## 3. Data Storage and Security

- **Local Storage:** All user data (annotations, notes, keywords, studies, API keys) is stored locally on your device in a SQLite database.
- **Sync (optional):** If you sign in to the optional sync feature, your study data and settings are also stored on our servers. See Section 4 for details.
- **Backup & Export:** You can export your data as backup files (JSON) or study exports (Markdown) saved to your device's Documents folder. On iOS, these files are accessible via the Files app. Exported files remain on your device and are not transmitted to any server.
- **Security:** While we implement reasonable security measures, no method of electronic storage is 100% secure. You are responsible for maintaining the security of your device.

## 4. Sync Accounts

Sync is optional. The app is fully functional offline without an account.

- **Sign-in:** You sign in with your email address and an 8-digit one-time code we email to you. There are no passwords, and we never store your password. Codes are single-use, expire after 10 minutes, and are stored only as cryptographic hashes.
- **What we store:** When you use sync, our servers store your email address, your synced study data (studies, key word markings and annotations, notes, and observations such as lists, people, places, and time expressions), your app settings, the names and platforms of your signed-in devices, hashed session tokens (we store only a hash, never the token itself), and a count of how much sync storage your account uses.
- **Where it is stored:** Sync data is stored on our servers, which run on Cloudflare infrastructure. Each account's data is isolated to that account and is transmitted over HTTPS.
- **Sign out:** Signing out revokes that device's session on our servers and removes the session token from the device.
- **Delete Account:** You can permanently delete your sync account at any time from within the app. This deletes all of your synced study data, your device registrations, all sessions, usage records, and your account record (including your email address) from our servers. Your local data on each device is not affected.

## 5. Data Sharing and Disclosure

We do not sell, trade, or otherwise transfer your information to third parties:

- Without sync, all data is stored locally on your device and we do not have access to it
- With sync, your data is stored on our servers only to provide synchronization, and is shared only with the service providers that host and operate the service (Cloudflare) and deliver sign-in emails (Postmark), acting on our behalf
- We do not read, sell, or share your study data with anyone

If you use the ESV API, your requests are made directly from your device to Crossway's servers, and they may collect information according to their own privacy policy.

## 6. Your Rights and Choices

- **Access Your Data:** All your data is stored on your device and accessible within the app.
- **Delete Your Data:** You can delete all app data by uninstalling the app, which will remove all locally stored data. You can also clear specific annotations or studies within the app. If you use sync, you can permanently delete all server-side data with Delete Account in the app's settings.
- **Sign Out:** You can sign out of sync at any time; the app continues to work fully offline.
- **API Key Management:** You can add, modify, or remove Bible API keys at any time through the app settings.

## 7. Children's Privacy

Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.

## 8. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.

## 9. California Privacy Rights

If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to request deletion of your personal information. If you do not use sync, all data is stored locally on your device and we hold no personal information about you. If you use sync, you can delete everything we hold about you at any time using Delete Account in the app, or by contacting us.

## 10. GDPR Rights (European Users)

If you are a resident of the European Economic Area (EEA), you have certain data protection rights, including the rights of access, rectification, erasure, and portability. If you do not use sync, we do not process your personal data on our servers, and your rights are exercised through your control over the data on your device. If you use sync, we process your email address and synced study data to provide the service (performance of a contract); you can erase this data at any time using Delete Account in the app, export your data from the app, or contact us to exercise your rights.

## 11. Contact Us

If you have any questions about this Privacy Policy, please contact us:

- Website: [spearssoftware.com](https://spearssoftware.com)
- Support: See our [Support](/support/) page

## 12. Bible Translation Copyright

Bible translations used in this app are subject to their respective copyrights and terms of use:

- **NASB 2020 and NASB 1995 (New American Standard Bible®):** Copyright © 1960, 1971, 1977, 1995, 2020 by The Lockman Foundation. All rights reserved. Used under license from The Lockman Foundation and distributed as free in-app downloads from our servers.
- **ASV (American Standard Version):** Public domain. Included with the app.
- **ESV (English Standard Version):** © 2001 by Crossway. Used by permission. All rights reserved. ESV text may not be used for commercial purposes without permission.
- **Other translations:** Subject to their respective copyright holders' terms and conditions.

This app complies with the terms of use for all Bible translations it includes, including ESV API requirements for noncommercial use and copyright attribution.
