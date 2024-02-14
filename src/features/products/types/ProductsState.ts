import IProduct from "./Products"

export default interface ProductState {
  products: IProduct[]
  error?: null | string
  isLoading?: boolean
}
