import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
 
export default function Loading({ active, children }) {
  return (
    <LoadingOverlay
      active={true}
      spinner={<BounceLoader />}
    >
      {children}
    </LoadingOverlay>
  )
}