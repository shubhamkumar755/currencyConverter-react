import React, {useId} from 'react'

function InputBox({label,amount,onAmountChange,
    onCurrencyChange,currencyOptions=[],
    selectCurrency="usd",amountDisable=false,
    currencyDisable=false,
    className = ""
}) 
{
    const amountInputId=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                {label}
            </label>
            <input id={amountInputId}
            className='outline-none w-full bg-transparent py-1.5'
            type="number" placeholder='Amount' 
            disabled={amountDisable} value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/> 
        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">
                Currency Type</p>
            <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
             value={selectCurrency}
             onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
             disabled={currencyDisable}>
                
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}

            </select>
        </div>
    </div>
  )
}

export default InputBox

/* 
NOTES

- put "&&" in line 19 and 27 as first it checks that the prop is passed by the user or not then it calls the function if the user has passed it inorder to prevent errors

- using map in line 30, we are looping through currency options arr in order to add options in the select input

- useId is a React Hook used to generate a unique ID for accessibility purposes — especially helpful for associating labels with inputs.
- useId() is used to safely and automatically generate a unique ID so your label is properly linked to its input — it's best practice for accessibility. 

*/