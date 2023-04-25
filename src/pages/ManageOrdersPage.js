import Header from "../components/Header";
import { useDispatch, useSelector } from 'react-redux';
import { changeOrders, toggleDetail } from "../store";
import React, { useEffect } from "react";
import { makeRequest } from "../utils/requests";
import useUserContext from "../hooks/use-user-context";
import {Link, useNavigate} from "react-router-dom";
import {FaUser} from "react-icons/fa";

import OrderList from "../components/OrderList";
import { googleLogout } from '@react-oauth/google';

function ManageOrdersPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { orders, orderDetails } = useSelector((state) => {
        return {
            orders: state.userOrders.data,
            orderDetails: state.userOrders.orderDetails
        }
    });
    const { user, fetchUser } = useUserContext()

    useEffect(() => {
        if (!user.id) return
        async function fetchUserOrders() {
            const response = await makeRequest(`/user/orders/`)
            dispatch(changeOrders(await response.data))
        }
        fetchUserOrders()
    }, [user, dispatch])

    const handleToggleDetail = async (orderId) => {
        if (orderId === orderDetails?.id) {
            dispatch(toggleDetail(null))
        } else {
            // fetch na jidlo z objednavky a vlozeni to do dispatch
            const response = await makeRequest(`/order/${orderId}/`)
            if (response.json_status < 300){
                dispatch(toggleDetail(await response.data))
            }
        }
    }

    const handleProfileManagement = () => {
        navigate("/manage/profile")
    }

    const handleLogout = async () => {
        const response = await makeRequest("/auth/logout")
        if (response.json_status < 300){
            googleLogout()
            await fetchUser()
            navigate("/")
        }
    }

    const content = () => {
        if (!user.id) {
            return (
                <h2 style={{textAlign: "center"}}>
                    PRO ZOBRAZENÍ TÉTO STRÁNKY SE MUSÍTE PŘIHLÁSIT
                    <Link to={"/login"}> &gt;&gt;ZDE&lt;&lt;</Link>
                </h2>
            )
        }

        return (
            <>
                <button className="logout" onClick={handleLogout}>ODHLÁSIT SE</button>
                <button className="profile-management" onClick={handleProfileManagement} >{<><FaUser />SPRAVOVAT ÚČET</>}</button>
                <h2>VAŠE OBJEDNÁVKY</h2>
                { orders.length === 0 ?
                    <h3>ZATÍM NEMÁTE ŽÁDNÉ OBJEDNÁVKY</h3> :
                    <OrderList
                        listId="orders-list"
                        orders={orders}
                        orderDetails={orderDetails}
                        handleToggleDetail={handleToggleDetail} /> }
            </>
        )
    }

    return (
        <>
            <Header title="OBJEDNÁVKY"></Header>
            <main className="manage-orders">
                { content() }
            </main>
        </>
    )
}

export default ManageOrdersPage;