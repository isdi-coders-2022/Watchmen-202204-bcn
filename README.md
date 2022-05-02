# Capa de Datos

### paintingCollection:

- Una Array para cada Collection. Los dados vindran por un fetch basado por autor ("principalOrFirstMaker").
- Dentro de la Array todas las obras de este autor,un objeto para cada obra, organizado por orden de ID, y dentro con sus informaciones relevantes (id, nombre, fecha, etc.)
- Tendrá una propriedade "userSelectedPainting" añadida, donde expresaremos através de un valor booleano si el usuário a marcado este objeto como favorito. Todos seran "false" por defecto.

### userPaintingCollection

- Una Array para la Collection del usuário. Todos los objetos marcados por el usuário marcaran los objetos de la Array paintingCollection en su propriedad "userSelectedPainting" con el valor booleano "true". Si se avalue como "true", se enseñaran en esta Array "userPaintingCollection".
- También los objetos creados por el usuário serán enviados para esta Array.

### paitingToRender

- Una Array con 3 pinturas que serán renderizadas para el usuário.

### renderedPage

- Mostrará la cantidad de pinturas vistas, empezando en el valor 3 y terminando en 15, pues enseñara pinturas de 3 en 3.

# Lista de Componentes

## App Component

Estado:

- A lo estado inicial el componente App renderiza el component Header y el Welcome page.

Responsabilidade:

- Crear el HTML del component App que renderize las paginas Home, Collections, Collection X, Collection Details, My Collections y sus sub elementos:

  Home

  - Image, Info Comp, Button Comp

  Collections

  - Info Comp, List Comp, Card Comp

  Collection X

  - Info Comp > 2 Icon Buttons, List Comp > Card Comp > Button Comp

  Collection Details

  - Details Comp

  My Collections

  - List Comp > Card Comp > Icon Button

## Header Component

Estado:

- A lo estado inicial el componente Header renderiza un logo y un menu de navigación.

Responsabilidade:

- Crear el HTML del component Header que renderize un Nav, un IMG y un UL con 4 LI's.

## Info Component

Estado:

- A lo estado inicial el componente Info renderiza el titulo y un texto.

Responsabilidade:

- Crear el HTML del component Info que renderiza un element H2 y un element P.

## Button Component

Estado:

- A lo estado inicial el componente Button renderiza el texto.

Responsabilidade:

- Crear el JSX del Component Button que renderiza un element button con un texto recibido.

## Icon Button Component

Estado:

- A lo estado inicial el componente Icon Button renderiza un icon y una imagen.

Responsabilidade:

- Crear el HTML del Component Icon Button que renderiza un element icon.

## List Component

Estado:

- A lo estado inicial el componente Icon Button renderiza un listado con un título, una imagen y una boton.

Responsabilidade:

- Crear el HTML del component List que renderize un UL, un LI, una IMG y un component BUTTON.

## Painting Component

Estado:

- A lo estado inicial el componente Painting renderiza una imagen y un texto.

Responsabilidade:

- Crear el HTML del component Painting que renderize una IMG y un P.

## Form Component

Estado:

- A lo estado inicial el componente Form renderiza un formulario.

Responsabilidade:

- Crear el HTML del Component Form que renderize un H3, text, un FORM, un LABEL y un INPUT.

## Details Component

Estado:

- A lo estado inicial el componente Form renderiza un título, el año, el nombre del artista, y el detalle de la obra.

Responsabilidade:

- Crear el HTML del Component Details que renderize un H2, dos P, un H3, un UL, un LI y una IMG.
