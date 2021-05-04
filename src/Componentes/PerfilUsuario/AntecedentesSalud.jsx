const AntecedentesSalud = () => {
   return (
      <section className="contentApricot">
         <ul className="padding1rem">
            <li className="li">
               <span>Alergias </span>
               <button className="btnAgregar">
                  <i className="ri-add-line"></i>Agregar
               </button>
            </li>
            <li className="li">
               <span>
                  Hábitos y <br /> Estilo de Vida{" "}
               </span>
               <button className="btnAgregar">
                  <i className="ri-add-line"></i>Agregar
               </button>
            </li>
            <li className="li">
               <span>
                  Antecedentes <br /> Patológicos
               </span>
               <button className="btnAgregar">
                  <i className="ri-add-line"></i>Agregar
               </button>
            </li>
            <li className="li">
               <span>
                  Antecedentes <br /> Quirúrgicos
               </span>
               <button className="btnAgregar">
                  <i className="ri-add-line"></i>Agregar
               </button>
            </li>
            <li className="li">
               <span>Vacunas</span>
               <button className="btnAgregar">
                  <i className="ri-add-line"></i>Agregar
               </button>
            </li>
            <li className="li">
               <span>
                  Medicamentos <br /> en uso
               </span>
               <button className="btnAgregar">
                  <i className="ri-add-line"></i>Agregar
               </button>
            </li>
         </ul>
      </section>
   );
};

export default AntecedentesSalud;
