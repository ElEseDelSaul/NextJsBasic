import Router from 'next/router';

const Users = props => {
    //console.log(props.users)
    return (
        <ul className="list-group">
            {
                props.users.map(user => (
                    <li
                        key={user.id}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center m-2"
                        onClick={(e) => { Router.push(`/users/[id]`,`/users/${user.id}`) }}
                    >
                        <div>
                            <h5>{user.first_name} {user.last_name}</h5>
                            <p>Email: {user.email}</p>
                        </div>
                        <img
                            src={user.avatar}
                            alt={user.first_name + user.last_name}
                            style={{ borderRadius: "50%", border: "solid" }}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default Users;