
import TopHeader from "./TopHeader";

const Layout = (props) => {
    return (
        <>
            <TopHeader />
            { props.children }
        </>
    );
}

export default Layout;