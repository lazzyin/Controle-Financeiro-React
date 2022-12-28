import React,{useState} from 'react'
import './Form.css';
import Grid from '../Grid/Grid';

const Form = ({handleAdd,transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID=()=>{
        Math.round(Math.random()*1000)
    }

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo")
            return;
        }
        
        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("")
    }

    

  return (
      <>
      <div className="form-container">
          <div className="form-input-content">
              <label>Descrição</label>
              <input
                className="form-input" value={desc}
                onChange={(e) => setDesc(e.target.value)} />
          </div>
          
          <div className="form-input-content">
              <label>Valor</label>
              <input className="form-input"               value={amount}
                type="number"
                onChange={(e) => setAmount(e.target.value)} />
           </div>

          
              <div className="form-radio-group">
                  <input className="form-input"
                      type="radio"
                      id="rIncome"
                      defaultChecked
                      name="group1"
                      onChange={() => setExpense(!isExpense)} />
                  <label htmlFor='rIncome'>Entrada</label>
                  <input className="form-input"
                      type="radio"
                      id="rExpense"
                      name="group1"
                      onChange={() => setExpense(!isExpense)} />
                  <label htmlFor='rExpense'>Saida</label>
              </div>
              
          
          <button className="form-button" onClick={handleSave}>Adicionar</button>
          </div>
          <Grid items={transactionsList} setItems={setTransactionsList} />
      </>
  )
}

export default Form