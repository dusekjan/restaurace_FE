import Header from "../components/Header";
import {
    useFetchAdminOrdersQuery,
    useFetchAdminDetailOrderQuery,
    useChangeStatusMutation
} from "../store";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import OrderList from "../components/OrderList";
import {skipToken} from "@reduxjs/toolkit/query";
import {FaUser} from "react-icons/fa";
import OpenClose from "../components/OpenClose";

function AdminOrdersPage() {
    const navigate = useNavigate()

    const { data: orders, error: errorOrders, isLoading: isLoadingOrders } = useFetchAdminOrdersQuery()
    const [orderDetailsId, setOrderDetailsId] = useState(null)
    const { data: orderDetails } = useFetchAdminDetailOrderQuery(orderDetailsId || skipToken)
    const [ changeStatus ] = useChangeStatusMutation()



    const handleToggleDetail = (orderId) => {
        if (!orderDetailsId) {
            setOrderDetailsId(orderId)
        } else if (orderDetails && orderDetails.data.id === orderId) {
            setOrderDetailsId(null)
        } else {
            setOrderDetailsId(orderId)
        }
    }

    const handleChangeStatus = (status, orderId) => {
        changeStatus({status, id: orderId})
    }

    const content = () => {
        if (errorOrders && errorOrders.status === 401) {
            return (
                <h2 style={{textAlign: "center"}}>
                    PŘIHLAŠTE SE ADMINSKÝM ÚČTEM
                    <Link to={"/login"}> &gt;&gt;ZDE&lt;&lt;</Link>
                </h2>
            )
        } else if (errorOrders) {
            return (
                <h2 style={{textAlign: "center"}}>
                    VYSKYTLA SE CHYBA
                </h2>
            )
        }

        if (isLoadingOrders) {
            return <h2>NAČÍTÁM DATA...</h2>
        }
        if (orders) {
            let details = orderDetailsId && orderDetails ? orderDetails.data : null

            return (
                <>
                    <h2>OBJEDNÁVKY</h2>
                    <OrderList
                        listId="admin-orders-list"
                        orders={orders.data}
                        orderDetails={details}
                        handleToggleDetail={handleToggleDetail}
                        handleChangeStatus={handleChangeStatus}
                    />
                </>)
        }
    }

    const adminUsersButton = <button className="users-management" onClick={() => navigate("/admin/users")}>
                                {<><FaUser />SPRAVOVAT UŽIVATELE</>}
                            </button>
    return (
        <>
            <Header title="OBJEDNÁVKY - ADMIN"></Header>
            <main className="admin-orders">
                { !errorOrders && adminUsersButton }
                { !errorOrders && <OpenClose /> }
                { content() }
            </main>
        </>
    )
}

export default AdminOrdersPage;