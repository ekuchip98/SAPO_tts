import { useParams } from "react-router-dom";

const DashBoard = (props) => {
    const {name} = useParams();
    return ( 
        <div>
            Xin chào {name}
        </div>
     );
}
 
export default DashBoard;