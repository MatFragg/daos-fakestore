# Guía de Documentación para Exámenes – TypeScript

## 🟡 Reglas de Oro

| Situación                  | ¿Qué debes incluir?                           |
|---------------------------|-----------------------------------------------|
| Al inicio de todo archivo | `@summary` y `@author`                        |
| Antes de una clase        | `@summary`                                    |
| Antes de un método        | `@summary`, `@param`, `@returns`              |
| En modelos (constructores)| `@param` en cada parámetro del constructor    |

---

## 🧾 Recomendaciones

- Usa lenguaje simple y directo.
- Comenta solo lo que tú hiciste (evita comentarios de cosas autogeneradas).

---

## 📦 Ejemplo de Modelo Documentado

```ts
/**
 * @summary Modelo que representa una universidad.
 * @author
 */
export class University {
  /**
   * @param name Nombre de la universidad
   * @param country País donde se ubica
   * @param countryCode Código del país
   * @param domain Dominio web principal
   * @param webPage URL de la página web oficial
   */
  constructor(
    public name: string,
    public country: string,
    public countryCode: string,
    public domain: string,
    public webPage: string
  ) {}
}

## Example
/**
 * @summary Componente que muestra una tarjeta con datos de la universidad.
 * @author
 */
export class UniversityCardComponent {
  /**
   * @summary Recibe los datos de la universidad como entrada.
   */
  @Input() university!: University;

  /**
   * @summary Construye la URL del logo a partir del dominio de la universidad.
   * @returns URL del logo como string
   */
  getLogoUrl(): string {
    return `https://logo.clearbit.com/${this.university.domain}`;
  }
}
