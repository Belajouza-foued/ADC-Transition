import { useLocation, useNavigate, useParams } from "react-router-dom"


export const crudRouter = (Component) => {
    function ComponentCrudRouter (props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props}
        router = {{
            location, navigate, params
        }}/>
}
return ComponentCrudRouter;
};
export const EmployerCrudRouter = (Component) => {
    function EmployerCrudRouter (props){
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props}
        router = {{
            location, navigate, params
        }}/>
}
return EmployerCrudRouter;
};