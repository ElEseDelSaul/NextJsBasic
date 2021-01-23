//PARAMETRO DINAMICO
import fetch from 'isomorphic-fetch';
import { useRouter } from 'next/router';
import Container from '../../components/container';


const User = (props) => {
    //console.log(props)

    //Extraer ir del Url
    const router = useRouter();
    const { id } = router.query;

    return (
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3 p-5">
                    <div className="card text-center">
                        <div className="card-header">
                            <img 
                            src={props.user.avatar} 
                            alt={props.user.first_name + props.user.last_name}
                            style={{borderRadius:'50%'}}
                            class/>
                        </div>
                        <div className="card-body">
                            <h3> {props.user.id}. {props.user.first_name} {props.user.last_name}</h3>
                            <p>{props.user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

User.getInitialProps = async (ctx) => {
    //console.log("IDENTIFICADOR: "+ ctx.query.id)
    const { id } = ctx.query;
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const resJSON = await res.json();
    //console.log(resJSON)
    return { user: resJSON.data }
}

export default User;