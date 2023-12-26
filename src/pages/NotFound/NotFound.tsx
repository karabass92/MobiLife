import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 0);
      }, []);

    return (

        <Fragment>
            NotFound
        </Fragment>
    )
}


export default NotFound