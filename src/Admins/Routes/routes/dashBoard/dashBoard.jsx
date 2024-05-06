import { Fragment, useEffect, useState } from "react";
import { useHttpClinet } from "../../../../utils/hooks/http-hook";
import { useContext } from "react";
import { AuthContext } from "../../../../context/auth.context";
import { CartContext } from "../../../../context/cart.context";
import LoadingSpinner from "../../../../component/others/loading-sppiner/loadingSppiner";
import "./dashBoard.css";
const DashBoard = () => {
  const { userId } = useContext(AuthContext);
  const { totalOrder } = useContext(CartContext);
  const orders = totalOrder.length;
  const { sendRequest, isLoading } = useHttpClinet();
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/api/users/${userId}`
        );
        setUserData(responseData.user);
      } catch (err) {}
    };
    fetchUserData();
  }, [sendRequest, userId]);
  const { image, name } = userData;
  let theName = "";
  if (name) {
    theName = name.split(" ");
  }
  return (
    <Fragment>
      {isLoading && <LoadingSpinner overlay />}
      <div className="DashBoard">
        <div className="dashBoard-header">
          <div className="dashBoard-header-part1">
            Hello ,{userData && theName[0]}
          </div>
          <div className="admin-details">
            <div className="admin-details-img-container">
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/${image}`}
                alt={name}
              />
            </div>
            <div className="admin-details-name">
              <h5>{name}</h5>
            </div>
          </div>
        </div>
        <div className="dashBoard-body">
        <div className="dashBoard-orders">
          <div className="dashBoard-orders-header">
            <text>Orders</text>
          </div>
          <div className="dashBoard-orders-element">
            <div className="dashBoard-orders-today">
              <text>Today</text>
              <h1>{orders}</h1>
              <text className="dashBoard-orders-today-bottom">
                {orders} Order Today
              </text>
            </div>
            <div className="dashBoard-orders-thisWeek">
              <text>This Week</text>
              <h1>{orders + 8} </h1>
              <text className="dashBoard-orders-today-bottom">
                {orders + 8} Order This Week
              </text>
            </div>
            <div className="dashBoard-orders-thisMonth">
              <text>This Month</text>
              <h1>{orders + 15}</h1>
              <text className="dashBoard-orders-today-bottom">
                {orders + 15} Order This Month
              </text>
            </div>
          </div>
        </div>
        <div className="dashBoard-orders-totals">
          <div className="dashBoard-orders-header">
            <text>Renvenue</text>
          </div>
          <div className="dashBoard-orders-element-totals">
            <div className="dashBoard-orders-today">
              <text>Today</text>
              <h1>85,785$</h1>
              <text className="dashBoard-orders-today-bottom">
                {orders} Order Today
              </text>
            </div>
            <div className="dashBoard-orders-thisWeek">
              <text>This Week</text>
              <h1>226,650$</h1>
              <text className="dashBoard-orders-today-bottom">
                {orders + 8} Order This Week
              </text>
            </div>
            <div className="dashBoard-orders-thisMonth">
              <text>This Month</text>
              <h1>230,093$</h1>
              <text className="dashBoard-orders-today-bottom">
                {orders + 15} Order This Month
              </text>
            </div>
          </div>
        </div>
      </div>
  
      </div>
    </Fragment>
  );
};
export default DashBoard;

/*

*/
/*

      <div className="dashBoard-body">
          <div className="dashBoard-orders">
            <div className="dashBoard-orders-header">
              <text>Orders</text>
            </div>
            <div className="dashBoard-orders-element">
              <div className="dashBoard-orders-today">
                <text>Today</text>
                <h1>{orders}</h1>
                <text className="dashBoard-orders-today-bottom">
                  {orders} Order Today
                </text>
              </div>
              <div className="dashBoard-orders-thisWeek">
                <text>This Week</text>
                <h1>{orders + 8} </h1>
                <text className="dashBoard-orders-today-bottom">
                  {orders + 8} Order This Week
                </text>
              </div>
              <div className="dashBoard-orders-thisMonth">
                <text>This Month</text>
                <h1>{orders + 15}</h1>
                <text className="dashBoard-orders-today-bottom">
                  {orders + 15} Order This Month
                </text>
              </div>
            </div>
          </div>
          <div className="dashBoard-orders-totals">
            <div className="dashBoard-orders-header">
              <text>Renvenue</text>
            </div>
            <div className="dashBoard-orders-element-totals">
              <div className="dashBoard-orders-today">
                <text>Today</text>
                <h1>85,785$</h1>
                <text className="dashBoard-orders-today-bottom">
                  {orders} Order Today
                </text>
              </div>
              <div className="dashBoard-orders-thisWeek">
                <text>This Week</text>
                <h1>226,650$</h1>
                <text className="dashBoard-orders-today-bottom">
                  {orders + 8} Order This Week
                </text>
              </div>
              <div className="dashBoard-orders-thisMonth">
                <text>This Month</text>
                <h1>230,093$</h1>
                <text className="dashBoard-orders-today-bottom">
                  {orders + 15} Order This Month
                </text>
              </div>
            </div>
          </div>
        </div>
*/