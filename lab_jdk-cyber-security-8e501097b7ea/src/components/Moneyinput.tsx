import React from "react";

function Moneyinput(props: any) {
    return (
        <div className="input-group">
            <span className="input-group-text">$</span>
            <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
        </div>
    );

}

export default Moneyinput;