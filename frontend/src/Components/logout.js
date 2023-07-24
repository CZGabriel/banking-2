import { useEffect} from 'react';
import Card from './card';
import { useNavigate } from 'react-router-dom';
import {auth, logOut } from '../utils/fir-login';
import { LoadingPage } from '../utils/tools';

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.currentUser) {
            logOut()
                .then(() => { setTimeout(() => {
                    navigate("/", { replace: true })
                }, 1000);}
                );
            } else {
                navigate('/', {replace: true});
            }
        }, [navigate]);
      
        return (<>  <LoadingPage />
                    <Card
                        bgcolor="primary"
                        txtcolor="white"
                        header="Carolinaz Bank"
                        title="Thanks for using Carolinaz Bank!"
                        text="A friendly bank with an excellent website, but poor services"
                        body={(<div><img src="./bank_logo.png" className="img-fluid" alt="Responsive Site"/></div>)}
                    />
                </>);
      };

export default Logout;