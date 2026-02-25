# AngularApp1 – User Profile Dashboard

## 📌 Project Overview

This project is a simple User Profile Dashboard built using Angular (Standalone Components) and TypeScript.  

It demonstrates component-based architecture, data binding, component interaction, and strong typing using TypeScript interfaces.

---

## 🚀 Features

- Display user profile information (name, age, profile picture)
- Online/Offline status toggle
- Editable user bio section
- Dark mode toggle
- Additional fields (email and role)
- Component-based styling
- Smooth UI animation effects

---

## 🧱 Application Structure

The application consists of three main components:

### 1️⃣ UserCardComponent
Displays:
- Name
- Age
- Profile picture
- Email
- Role

Uses `@Input()` to receive user data from parent component.

---

### 2️⃣ UserStatusComponent
Displays:
- Online/Offline status
- Toggle button

Uses:
- `@Input()` to receive status
- `@Output()` with `EventEmitter` to notify parent when status changes

---

### 3️⃣ UserBioComponent
Displays:
- User bio
- Edit mode with textarea

Uses:
- Two-way binding (`ngModel`)
- `@Output()` to send updated bio to parent component

---

## 🔁 Component Interaction

The parent component (`App`) manages the user state.

- Data flows down using `@Input()`
- Events flow up using `@Output()` and `EventEmitter`

This demonstrates Angular component communication.

---

## 🧠 TypeScript Usage

A strongly typed interface (`User`) is used to model user data:

```ts
export interface User {
  name: string;
  age: number;
  profilePicture: string;
  bio: string;
  isOnline: boolean;
  email: string;
  role: string;
}
