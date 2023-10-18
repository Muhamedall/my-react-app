import React, { useState, useRef, useEffect } from "react";




export default function Myselect() {
  const [filieres, setFilieres] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const inRef = useRef();
  const [isDuplicate, setIsDuplicate] = useState(false);
   

  useEffect(() => {
    inRef.current.focus();
    inRef.current.value = '';
  }, []);

  async function handleAdd(e) {
    e.preventDefault();
    const newFiliere = inRef.current.value.trim();
    if (newFiliere === '') {
      return;
    }

    if (!filieres.includes(newFiliere)) {
      setFilieres([...filieres, newFiliere]);
      setIsDuplicate(false);
    } else {
      setIsDuplicate(true);
    }

    inRef.current.value = '';
    setIsDisabled(true);

    
  
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    inRef.current.value = inputValue;
    setIsDisabled(inputValue === '');
    setIsDuplicate(false);
  }

  return (
    <div>
      <form>
        <p>Vous avez ajouté {filieres.length} filières</p>
        <input onChange={handleChange} ref={inRef} />
        <button disabled={isDisabled} onClick={handleAdd}>Ajouter</button>
        {isDuplicate ? (
          <p className="text-bg-danger">Le filiere existe déjà, désolé !</p>
        ) : filieres.length ===0 ? (
          <p>Il n'y a pas encore de filière à afficher</p>
        ) : (
          <select className="bloc">
            {filieres.map((fil) => (
              <option key={fil}>{fil}</option>
            ))}
          </select>
        )}
        
      
      </form>
    </div>
  );
}
