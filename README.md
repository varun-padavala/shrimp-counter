# 🦐 Shrimp Counter

**Shrimp Counter** is an offline AI-powered Android application designed to help shrimp seed farms quickly estimate and record shrimp counts using a smartphone camera.

The application uses on-device computer vision to detect shrimp in a sample and provide a fast, practical counting workflow. It is designed for farm environments where simplicity, speed, and reliable offline operation are important.

---

# 🚀 Shrimp Counter v2.0.0-beta.1

> 🚧 **Beta / Work in Progress**

Version 2 introduces a redesigned camera-first experience, improved counting controls, visual tray guidance, new navigation, and an **OTA update system for application and AI model updates**.

The core counting workflow is functional, while some areas of the application are still being refined and tested.

## ✨ What's New in v2.0.0-beta.1

### 🎨 Redesigned Counter Screen

* Completely redesigned the main Counter screen.
* Camera-first layout focused on the counting workflow.
* Improved spacing, controls, and visual hierarchy.
* New bottom navigation.
* Refined dark interface with purple accent highlights.
* Improved presentation of counting statistics.

### 🔍 Camera Zoom

* Added a dedicated **1× zoom control**.
* Allows users to adjust the camera framing before capturing.
* Makes positioning the tray easier on different devices.

### 🎯 Tray Position Guide

* Added a visual **tray outline / positioning guide** over the camera preview.
* Helps users place the tray in the recommended capture area.
* Provides clearer visual feedback before capturing.

### 💡 Improved Capture Guidance

The camera now provides clearer instructions while preparing for a capture, including:

* **Position the tray under light**
* **Tap capture when ready**

This makes the capture process easier for users who are using the application for the first time.

### 🔔 OTA Updates

Shrimp Counter v2 introduces an **over-the-air update system** designed to keep the application and its AI capabilities up to date.

#### 📱 App Updates

The application can check for newer versions and notify the user when an update is available.

This allows new application releases and improvements to be delivered without requiring users to manually search for the latest version.

#### 🧠 AI Model Updates

The update system also supports **remote AI model updates**.

This allows the detection model to be improved or replaced independently as the project evolves, making it possible to improve detection performance without requiring a complete application redesign.

Potential model updates can include:

* Improved detection accuracy
* Better performance on new image conditions
* Updated trained models
* Bug fixes
* Model optimizations

> OTA model updates are particularly important for Shrimp Counter because the AI detection model can continue to improve as more real-world samples become available.

### 🔔 Update Notification UI

A new update indicator has been added to the top of the Counter screen.

It provides a simple way to inform users when:

* A new application version is available
* A model update is available
* An update is ready to be installed

The update information is designed to remain visible without interrupting the counting workflow.

### 🕘 Recents

Added a dedicated **Recents** section for accessing previous counting activity.

The Recents experience is still being refined as part of the v2 beta.

### 📊 Improved Statistics

The Counter screen now presents key statistics in a compact layout, including:

* Total counts
* Today's activity
* Saved records
* Recent activity

### 🧭 New Navigation

Version 2 introduces a dedicated bottom navigation system:

| Section        | Purpose                             |
| -------------- | ----------------------------------- |
| **Recents**    | Recent counting sessions            |
| **Records**    | Saved counting records              |
| **Counter**    | Main shrimp counting workflow       |
| **Calculator** | Counting calculations and utilities |
| **Settings**   | Application preferences             |

---

## 🎯 Core Features

### 📷 Camera-Based Counting

Capture a shrimp sample using the device camera and process it using the application's computer vision model.

### 🤖 On-Device AI Detection

Shrimp detection is performed using a machine learning model running on the device.

This allows the core counting workflow to operate without depending on a continuous internet connection.

### 📴 Offline Counting

The primary counting workflow is designed to work **offline**, making Shrimp Counter suitable for environments where reliable internet access may not be available.

### 🎯 Guided Tray Positioning

The tray guide helps users position the sample consistently before capturing an image.

### 🔍 Camera Zoom

Quick zoom controls make it easier to frame the sample correctly.

### 📋 Records

Save counting results for later reference.

### 🕘 Recents

Quickly access recent counting activity.

### 🧮 Calculator

Built-in utilities for working with shrimp-counting measurements.

### ⚙️ Settings

Configure application preferences and available options.

### 🔄 OTA Updates

Keep the application and AI detection model up to date through remote update mechanisms.

---

## 🧠 How It Works

```text
Open Shrimp Counter
        ↓
Position the tray using the guide
        ↓
Adjust zoom / camera position
        ↓
Capture the sample
        ↓
AI detection
        ↓
Shrimp count
        ↓
Save the result
        ↓
View activity in Recents / Records
```

The application is designed around an **offline-first counting workflow**, while OTA functionality allows the application and AI model to receive future improvements.

---

## 🔄 Update Architecture

Shrimp Counter separates the **application** from its **AI detection model**, allowing the model to evolve independently.

```text
                    Shrimp Counter
                          │
             ┌────────────┴────────────┐
             ↓                         ↓
       Application                 AI Model
       Updates                     Updates
             │                         │
             └────────────┬────────────┘
                          ↓
                    Update System
                          ↓
                    User Notification
```

This approach allows future improvements to the detection model without necessarily requiring a completely new application experience.

---

## 🛠️ Technology Stack

### Frontend

* Flutter
* Dart
* Material Design

### Computer Vision / AI

* TensorFlow Lite
* TFLite Flutter
* OpenCV
* On-device object detection

### Camera

* Flutter Camera
* CameraX integration

### Application

* Provider
* Local application state
* Offline-first processing
* OTA update infrastructure

---

## 🚧 Beta Status

**Shrimp Counter v2.0.0-beta.1 is a work in progress.**

The main counting workflow is available, but the application is still undergoing development, testing, and refinement.

Areas that may continue to change include:

* Recents experience
* Detection accuracy
* AI model improvements
* Device compatibility
* Performance
* UI refinements
* OTA update behavior
* Additional settings and features

This release is intended for **testing and feedback** and should not yet be considered the final production release.

---

## 📥 Installation

Download the latest beta APK from the **GitHub Releases** section.

1. Download the latest `.apk`.
2. Open the APK on an Android device.
3. Allow installation from the required source if prompted.
4. Install Shrimp Counter.
5. Open the application and begin counting.

> **Note:** This is a beta build. Installation and behavior may vary between Android devices.

---

## 📌 Version History

### v2.0.0-beta.1

**Current beta release**

* Completely redesigned Counter screen
* New bottom navigation
* Added camera zoom control
* Added tray positioning guide
* Improved capture guidance
* Added Recents
* Improved statistics presentation
* Added OTA application update support
* Added OTA AI model update support
* Added update notification UI
* Refined dark-mode interface
* Improved camera workflow

### v1.0.4

Previous development release focused on layout stabilization, dark-mode refinements, and versioning improvements.

### v1.0.3

Previous release.

### v1.0.2

Previous release.

---

## 🐛 Feedback & Bug Reports

If you encounter a problem while using the beta, please report it through the repository's **Issues** section.

When reporting a bug, include:

* Android device model
* Android version
* Shrimp Counter version
* What you were trying to do
* What happened
* Screenshots or recordings if possible

---

## 📄 License

This project is currently under development.

See the repository for licensing and usage information.

---

**Shrimp Counter**
*Making shrimp seed counting simpler with on-device AI.* 🦐
