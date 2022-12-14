export default interface FormComponentsProps {
  setErrorState: (error: string) => void
  setIsLoadedState: (isLoaded: boolean) => void
  setSuccessMsgState: (successMsg: string) => void
}
