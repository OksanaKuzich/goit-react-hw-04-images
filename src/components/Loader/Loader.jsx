import { RotatingLines } from 'react-loader-spinner';
import '../../styles.css';

export const Loader = () => {
  return (
    <div className='loaderWrapper'>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1.75"
        width="96"
        visible={true}
        position='relative'
      />
    </div>
  );
};
