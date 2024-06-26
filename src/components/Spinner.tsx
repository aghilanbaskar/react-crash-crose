import PropagateLoader from 'react-spinners/PropagateLoader'

const override = {
    display: 'block',
    margin: '100px auto',
};

interface SpinnerProps {
    loading: boolean;
}
const Spinner: React.FC<SpinnerProps> = ({loading}) => {
  return (
    <>
        <PropagateLoader 
            color="#4338ca"
            loading={loading}
            cssOverride={override}
            size={10}
        />
    </>
  )
}

export default Spinner