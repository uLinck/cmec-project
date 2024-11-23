export type TRoutes = {
  name: string
  value: string
}

export type TRoutesCalendario = {
  categoria: string
  subMenus: TRoutes[]
}

const routesColab: TRoutes[] = [
  {
    name: "Instituição",
    value: "instituicao"
  },
  {
    name: "Cooperativa",
    value: "cooperativa"
  }
]

const routesCalendario: TRoutesCalendario[] = [
  {
    categoria: "infantil",
    subMenus: [
      {
        name: "Pré 5",
        value: "pre-quinto"
      }
    ]
  },
  {
    categoria: "fundamental",
    subMenus: [
      {
        name: "1° ano",
        value: "primeiro-ano"
      },
      {
        name: "2° ano",
        value: "segundo-ano"
      },
      {
        name: "3° ano",
        value: "terceiro-ano"
      },
      {
        name: "4° ano",
        value: "quarto-ano"
      },
      {
        name: "5° ano",
        value: "quinto-ano"
      },
      {
        name: "6° ano",
        value: "sexto-ano"
      }
    ]
  },
  {
    categoria: "médio",
    subMenus: [
      {
        name: "1° ano médio",
        value: "primeiro-ano-medio"
      },
      {
        name: "2° ano médio",
        value: "segundo-ano-medio"
      },
      {
        name: "3° ano médio",
        value: "terceiro-ano-medio"
      }
    ]
  }
]

export { routesColab, routesCalendario }
