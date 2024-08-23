# Angular VLibras

**Angular VLibras** é uma biblioteca Angular que integra o widget de acessibilidade VLibras em suas aplicações Angular. O VLibras fornece tradução automática de conteúdo digital para a Língua Brasileira de Sinais (Libras), aumentando a acessibilidade para os usuários.

## Instalação

Instale a biblioteca `angular-vlibras` via npm:

```bash
npm install angular-vlibras
```

ou com yarn:

```bash
yarn add angular-vlibras
```

## Uso

Após a instalação, siga os passos abaixo para integrar o widget VLibras em sua aplicação Angular:

### 1. Importe o Componente `AngularVlibras`

No módulo raiz da sua aplicação (geralmente `app.module.ts`), importe o componente `AngularVlibras`:

```typescript
import { Component } from '@angular/core';
import { AngularVlibras } from 'angular-vlibras';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AngularVlibras],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
```

### 2. Use o Componente `<angular-vlibras />`

Adicione o componente `<angular-vlibras />` ao seu template para ativar o widget VLibras:

```html
<angular-vlibras />
```

### Propriedades

O componente aceita as seguintes propriedades de entrada:

- **`position`**: Define a posição do widget VLibras na tela. Os valores possíveis são:
  - `left` (padrão)
  - `right`
  - `top`
  - `bottom`
  - `bottomLeft`
  - `topLeft`
  - `bottomRight`
  - `topRight`
  
  Exemplo:
  ```html
  <angular-vlibras position="right" />
  ```

- **`avatar`**: Especifica o avatar usado no widget VLibras. As opções incluem:
  - `icaro`
  - `hosana`
  - `guga`
  - `random` (padrão)

  Exemplo:
  ```html
  <angular-vlibras avatar="guga" />
  ```

- **`opacity`**: Define a opacidade do widget VLibras. O valor deve ser um número entre `0` e `1`. O valor padrão é `1`.

  Exemplo:
  ```html
  <angular-vlibras opacity="0.8" />
  ```

### Exemplo

Aqui está um exemplo de como configurar o widget VLibras com propriedades personalizadas:

```html
<angular-vlibras 
  position="left" 
  avatar="hosana" 
  opacity="0.9" />
```

Essa configuração posicionará o widget no canto inferior direito da tela, usará o avatar `hosana` e definirá a opacidade como `0.9`.

---
