import Header from "../components/Header";
import {useDeleteUserMutation, useFetchAdminUsersQuery} from "../store";
import {Link} from "react-router-dom";
import React from "react";

function AdminUsersPage() {
    // const { data: users, error: errorUsers, isLoading: isLoadingUsers } = useFetchAdminUsersQuery()
    const { data: users, error: errorUsers } = useFetchAdminUsersQuery()
    const [ deleteUser ] = useDeleteUserMutation()

    const handleDeleteUser = (event) => {
        const text = "Skutečně chcete uživatele odstranit včetně všech jeho objednávek?\nTato akce je nevratná!"
        if (window.confirm(text) === true) {
            deleteUser(event.target.dataset.id)
        }
    }

    const content = () => {
        if (errorUsers && errorUsers.status === 401) {
            return (
                <h2 style={{textAlign: "center"}}>
                    PŘIHLAŠTE SE ADMINSKÝM ÚČTEM
                    <Link to={"/login"}> &gt;&gt;ZDE&lt;&lt;</Link>
                </h2>
            )
        } else if (errorUsers) {
            return (
                <h2 style={{textAlign: "center"}}>
                    VYSKYTLA SE CHYBA
                </h2>
            )
        }

        const renderedUsers = users &&
            [...users.data]
                .sort((a, b) => b.id - a.id)
                .map((user) => {
                return (
                    <li key={user.id}>
                        <div className="left">
                            <span>{user.name}</span>
                            <span>{user.email}</span>
                            <button data-id={user.id} className="delete" onClick={handleDeleteUser}>SMAZAT</button>
                        </div>
                        <div className="right">
                            <span>VYTVOŘEN: {user.created}</span>
                            <span>ROLE: '{user.role}'</span>
                            <span>ID: {user.id}</span>
                        </div>
                    </li>
                )
            })

        return (
            <>
                <h2>UŽIVATELÉ</h2>
                <ul id="users-list">
                    {renderedUsers}
                </ul>
            </>

        )
    }

    return (
        <>
            <Header title="UŽIVATELÉ - ADMIN"></Header>
            <main className="admin-users">
                {content()}
            </main>
        </>
    )
}

export default AdminUsersPage;
