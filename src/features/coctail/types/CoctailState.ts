import ICoctail from "./Coctail"

export default interface CoctailState {
  coctails?: {
    drinks: ICoctail[]
  }

  error?: null | string
  isLoading?: boolean
}
