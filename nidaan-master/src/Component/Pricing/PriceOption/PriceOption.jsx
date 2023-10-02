import React, { useState } from "react";
import BlueDiamond from "../../../Assets/baseDiamond.png";
import YellowDiamond from "../../../Assets/premiumDiamond.png";
import greenTick from "../../../Assets/greenTick.png";
import recomendedBg from "../../../Assets/premiumSmallBg.svg";
import "./PriceOption.css";
import axios from "axios";

const PriceOption = () => {
  const freeToken = 7;
  const discount = 15;
  const plans = {
    "1cr": 5,
    "10cr": 20,
    "50cr": 40,
    "75cr": 75,
    "100cr": 200,
    "200cr": 375,
    "500cr": 499,
  };
  const monthPrice = 999;
  const yearPrice = 9999;

  const [monthlyPlan, setMonthlyPlan] = useState(true);

  const [cost, setCost] = useState(499);

  function planSelected(e) {
    const credit = e.target.value;
    setCost(plans[credit]);
  }

  const planSwitch = document.getElementById("toggleDisk");

  function togglePlan() {
    if (monthlyPlan) {
      planSwitch.classList.add("yearly");
    } else {
      planSwitch.classList.remove("yearly");
    }
    setMonthlyPlan(!monthlyPlan);
  }

  const purchasef = async () => {
    const response = await axios.post("https://nidaanbackend.onrender.com/payment");
    window.location=response.data.url
  };
  return (
    <div className="planContainer">
      <h1 className="planHeading">Choose Your Plan</h1>
      <p className="token">
        <span className="tokenRem">{`${freeToken} Free `}</span>tokens
        remaining! No contact
        <br /> or card required
      </p>

      <div className="planCardContainer">
        <div className="basePlanContainer planCard">
          <div className="basePlanHeader">
            <img src={BlueDiamond} alt="diamond" />
            <div className="basePlanHeading">
              <h2 className="cardHeading">Pay as you go</h2>
              <p className="cardFeature">
                <span className="tokenRem">07</span> type tokens
              </p>
            </div>
          </div>

          <hr className="hr1 hr" />

          <div className="basicPlanContainer" onChange={planSelected}>
            <div className="basicPlanOptions">
              <input
                type="radio"
                name="basicPlan"
                className="radioBtn"
                id="basicPlan1"
                value="1cr"
              />
              <label htmlFor="basicPlan1">
                <span className="credit">1 Credit</span>

                <span className="basicPlanPrice">&#8377; 5</span>
              </label>
            </div>
            <div className="basicPlanOptions">
              <input
                type="radio"
                name="basicPlan"
                className="radioBtn"
                id="basicPlan2"
                value="10cr"
              />
              <label htmlFor="basicPlan2">
                <span className="credit">10 Credit</span>

                <span className="basicPlanPrice">&#8377; 20</span>
              </label>
            </div>
            <div className="basicPlanOptions">
              <input
                type="radio"
                name="basicPlan"
                className="radioBtn"
                id="basicPlan3"
                value="50cr"
              />
              <label htmlFor="basicPlan3">
                <span className="credit">50 Credit</span>

                <span className="basicPlanPrice">&#8377; 40</span>
              </label>
            </div>
            <div className="basicPlanOptions">
              <input
                type="radio"
                name="basicPlan"
                className="radioBtn"
                id="basicPlan4"
                value="75cr"
              />
              <label htmlFor="basicPlan4">
                <span className="credit">75 Credit</span>
                <span className="basicPlanPrice">&#8377; 75</span>
              </label>
            </div>
            <div className="basicPlanOptions">
              <input
                type="radio"
                name="basicPlan"
                className="radioBtn"
                id="basicPlan5"
                value="100cr"
              />
              <label htmlFor="basicPlan5">
                <span className="credit">100 Credit</span>
                <span className="basicPlanPrice">&#8377; 200</span>
              </label>
            </div>
            <div className="basicPlanOptions">
              <input
                type="radio"
                name="basicPlan"
                className="radioBtn"
                id="basicPlan6"
                value="200cr"
              />
              <label htmlFor="basicPlan6">
                <span className="credit">200 Credit</span>
                <span className="basicPlanPrice">&#8377; 375</span>
              </label>
            </div>
            <div className="basicPlanOptions">
              <input
                type="radio"
                name="basicPlan"
                className="radioBtn"
                id="basicPlan7"
                value="500cr"
                defaultChecked
              />
              <label htmlFor="basicPlan7">
                <span className="credit">500 Credit</span>
                <span className="basicPlanPrice">&#8377; 499</span>
              </label>
            </div>
          </div>

          <p className="gstLine">
            ₹ {cost} one time payment. Price incl. GST, if applicable
          </p>

          <hr className="hr2 hr" />

          <button className="purchaseBtn" onClick={purchasef}>
            Purchase Now
          </button>
        </div>

        <div className="premiumPlanContainer planCard">
          <div className="basePlanHeader">
            <img src={YellowDiamond} alt="diamond" />
            <div className="basePlanHeading">
              <h2 className="premiunCardHeading cardHeading">Premium</h2>
              <p className="premiumCardService cardFeature token">
                <span className="serviceNumber">07</span> services
              </p>
            </div>
            <div className="premiumPriceContainer">
              <h2>&#8377; {monthlyPlan ? monthPrice : yearPrice}</h2>
              <p className="cardFeature token">
                {monthlyPlan ? "Per Month" : "Per Year"}
              </p>
            </div>
          </div>

          <hr className="hr1 hr" />

          <div
            className="basicPlanContainer"
            id="premiumServiceContainer"
            onChange={planSelected}
          >
            <div className="basicPlanOptions serviceContainer">
              <img src={greenTick} alt="tick" />
              <p className="service">
                Unlimited chat <span className="fadeService">with Neo</span>
              </p>
            </div>
            <div className="basicPlanOptions serviceContainer">
              <img src={greenTick} alt="tick" />
              <p className="service">
                <span className="fadeService">Chat</span> history
              </p>
            </div>
            <div className="basicPlanOptions serviceContainer">
              <img src={greenTick} alt="tick" />
              <p className="service">
                Always available<span className="fadeService"> for you</span>
              </p>
            </div>
            <div className="basicPlanOptions serviceContainer">
              <img src={greenTick} alt="tick" />
              <p className="service">
                Faster<span className="fadeService"> Response speed</span>
              </p>
            </div>
            <div className="basicPlanOptions serviceContainer">
              <img src={greenTick} alt="tick" />
              <p className="service">
                Early Access{" "}
                <span className="fadeService">to new features</span>
              </p>
            </div>
            <div className="basicPlanOptions serviceContainer">
              <img src={greenTick} alt="tick" />
              <p className="service">
                <span className="fadeService">Become a</span> Beta User
              </p>
            </div>
            <div className="basicPlanOptions serviceContainer">
              <img src={greenTick} alt="tick" />
              <p className="service">
                <span className="fadeService">Standard</span> Customer Care
              </p>
            </div>
          </div>

          <div className="togglePremiumPlanContainer">
            <div className="monthlyPlan">Monthly</div>
            <div className="toggleBtn" id="toggleBtn" onClick={togglePlan}>
              <div className="toggleDisk" id="toggleDisk"></div>
            </div>
            <div className="yearlyPlan">
              Yearly
              <span className="discount">-{discount}% off</span>
            </div>
          </div>

          <hr className="premiumHr2 hr2 hr" />

          <button className="purchaseBtn premiumPurchaseBtn">
            Purchase Now
          </button>
        </div>

        <div className="recomendedBar">✦ Recommended</div>
      </div>
    </div>
  );
};

export default PriceOption;
