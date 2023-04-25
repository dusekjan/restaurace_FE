import Header from "../components/Header";
import React, {useState} from "react";
import {useChangeStatusMutation, useDeleteUserMutation, useFetchAdminUsersQuery} from "../store";

function AdminUsersPage() {
    const { data: users, error: errorUsers, isLoading: isLoadingUsers } = useFetchAdminUsersQuery()
    const [ deleteUser, results ] = useDeleteUserMutation()

    const handleDeleteUser = (event) => {
        const text = "Skutečně chcete uživatele odstranit včetně všech jeho objednávek?\nTato akce je nevratná!"
        if (window.confirm(text) === true) {
            deleteUser(event.target.dataset.id)
        }
    }

    const content = () => {
        const renderedUsers = users &&
            [...users.data]
                .sort((a, b) => b.id - a.id)
                .map((user) => {
                return (
                    <li key={user.id}>
                        <div className="left">
                            <span>VYTVOŘEN: {user.created}</span>
                            <span>ROLE: '{user.role}'</span>
                            <span>ID: {user.id}</span>
                        </div>
                        <div className="right">
                            <span>{user.name}</span>
                            <span>{user.email}</span>
                            <button data-id={user.id} className="delete" onClick={handleDeleteUser}>SMAZAT</button>
                        </div>
                    </li>
                )
            })

        return (
            <ul id="users-list">
                {renderedUsers}
            </ul>
        )
    }

    return (
        <>
            <Header title="UŽIVATELÉ - ADMIN"></Header>
            <main className="admin-users">
                <h2>UŽIVATELÉ</h2>
                {users && content()}
            </main>
        </>
    )
}

export default AdminUsersPage;
