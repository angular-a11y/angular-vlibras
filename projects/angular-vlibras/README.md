# Angular VLibras

**Angular VLibras** is an Angular library that seamlessly integrates the VLibras accessibility widget into your Angular applications. VLibras provides automatic translation of digital content into Brazilian Sign Language (Libras), enhancing accessibility for users.

## Installation

Install the `angular-vlibras` library via npm:

```bash
npm install angular-vlibras
```

or with yarn:

```bash
yarn add angular-vlibras
```

## Usage

After installation, follow the steps below to integrate the VLibras widget into your Angular application:

### 1. Import the `AngularVlibras`:

In your application's root module (typically `app.module.ts`), import the `AngularVlibras`:

```typescript
import { Component } from '@angular/core';
import { AngularVlibras } from 'angular-vlibras';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularVlibras],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent { }
```

### 2. Use the `<angular-vlibras />` Component:

Add the `<angular-vlibras />` component to your application template to activate the VLibras widget:

```html
<angular-vlibras />
```

This will automatically embed the VLibras widget into your application, making it accessible to users.
