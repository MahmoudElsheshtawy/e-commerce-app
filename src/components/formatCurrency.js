// import { useDebugValue } from "react";

const curncyformater = new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})
const formatCurrency = (number)=>{
    return curncyformater.format(number)

}

export default formatCurrency;