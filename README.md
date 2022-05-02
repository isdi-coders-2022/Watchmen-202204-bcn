## Capa de Datos

### Collections:

- Datos reactivos:

  - Nombre de las Colecciones: (basadas en el Fetch de la API por un, propriedad "principalOrFirstMaker")
  - Descripción de la Coleccion: tendra un texto
    que se alimentará de otro fetch, ahora pillando el ID de la primera obra del Fetch de la colección, y el texto utilizará el objeto "principalMakers",
    y dentro de este las propriedades: "name","roles", "placeOfBirth", "dateOfBirth".

- Modificaciones a esos datos:

  - Una funcion que recibirá estos datos y los cambiaran de acuerdo con el fetch pre-determinado.

### Paintings:

- Datos reactivos:

  - Nombre para cada obra de arte (title) y su imagen (url)

- Modificaciones a esos datos:

  - Una funcion que recibirá estos datos y los pintaran para cada componente Painting.

  ### Details:

  Datos reactivos:

  - Nombre para cada obra de arte (title), su año (presentingDate), el nombre del artista (principalMakers: name), la descripcion de la obra (plaqueDescriptionEnglish), su medio (physicalMedium), sus dimensiones (subTitle), su classificacion (objectTypes), su linea de credito (acquisition: creditLine) y su imagen (url)
  - Un boton que "Add Item" que añade las painting en My Collection.

- Modificaciones a esos datos:

  - Una funcion que recibirá estos datos y los pintaran para cada componente Painting.
  - Una función que lleve la painting selecionada por ID a nuestra API local.

  ### My Collection

  Datos reactivos:

  - Borrar el iten por ID enviado a nuestra API local
  - Abrir una página de formulário para editar cualquier uno de los itens de detalles de la obra (Nombre para cada obra de arte (title), su año (presentingDate), el nombre del artista (principalMakers: name), la descripcion de la obra (plaqueDescriptionEnglish), su medio (physicalMedium), sus dimensiones (subTitle), su classificacion (objectTypes), su linea de credito (acquisition: creditLine) y su imagen (url)).
  - Un boton que renderize la pagina del Formulario para añadir una painting propria.
  - Filtro por medio (physicalMedium), clasificacion (objectTypes) o año (presentingDate).

  Modificaciones a esos datos:

  - Una funcion que borre del API el elemento selecionado
  - Una funcion que renderize la pagina del Formulario para cambiar solo este objecto selecionado.
  - Una funcion que renderize la pagina del Formulario para enviar una paiting customizada.
  - Una funcion que organize y renderiza la pagina con los objetos de acuerdo con su filtro

  ### Upload your Art

  Datos reactivos:

- Objeto que recibirá un input datos del usuário creando un objecto con estas informaciones:
  obra (Nombre para cada obra de arte (title), su año (presentingDate), el nombre del artista (principalMakers: name), la descripcion de la obra (plaqueDescriptionEnglish), su medio (physicalMedium), sus dimensiones (subTitle), su classificacion (objectTypes), su linea de credito (acquisition: creditLine) y su imagen (url)).

Modificaciones a esos datos:

- Al se enviar este formulário, con uan función se creará dentro de la API el objecto, guardandolá a My Collections.

### Edit your Art

Datos reactivos:

- Editará un objecto selecionado que cambiará estos dados del objecto:
  obra (Nombre para cada obra de arte (title), su año (presentingDate), el nombre del artista (principalMakers: name), la descripcion de la obra (plaqueDescriptionEnglish), su medio (physicalMedium), sus dimensiones (subTitle), su classificacion (objectTypes), su linea de credito (acquisition: creditLine) y su imagen (url)).

Modificaciones a esos datos:

- Al se enviar este formulário, con una función se editará dentro de la API el objecto selecionado, donde los dados seran substituidos por los nuevos dados.




# Lista de Componentes

## App Component

Responsibilities:

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

Responsibilities:

- Crear el HTML del component Header que renderize un Nav, un IMG y un UL con 4 LI's.

## Info Component

Responsibilities:

- Crear el HTML del component Info que renderiza un element H2 y un element P.

## Button Component

Responsibilities:

- Crear el JSX del Component Button que renderiza un element button con un texto recibido.

## Icon Button Component

Responsibilities:

- Crear el HTML del Component Icon Button que renderiza un element icon.

## List Component

Responsibilities:

- Crear el HTML del component List que renderize un UL, un LI, una IMG y un component BUTTON.

## Painting Component

Responsibilities:

- Crear el HTML del component Painting que renderize una IMG y un P.

## Form Component

Responsibilities:

- Crear el HTML del Component Form que renderize un H3, text, un FORM, un LABEL y un INPUT.
