import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useParams } from 'react-router-dom';
import { useGetMobileDetail } from "../../../hooks/mobilesHook";


const BreadCrumb = () => {
  //TODO: this should be refactored to use a state in the root component and providing the paths and the data from the article in display.
  const location = useLocation();
  const { mobileId } = useParams();
  const { data = {} } = useGetMobileDetail(mobileId);
  const { brand = '', model = '' } = data;
  const { pathname } = location;
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" >
          Home
        </Link>
        {pathname !== '/' && <Typography color="text.primary">{`${brand} - ${model}`}</Typography>}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
