import { useState } from "react";
import { MenuPraias } from "./MenuPraias";

const MenuCidades = ({ cidades }) => {
  const cids = cidades.meuJSON;

  if (cids ?? false) {
    const [subMenu, setSubMenu] = useState({});

    const handleClick = (e) => {
      const clicado = cids.find((m) => m.id === e.target.id);
      console.log(e.target);
      clicado && setSubMenu(clicado);
      clicado === subMenu && setSubMenu({});
    };

    return (
      <ul className="menu-cidades">
        {cids.map((cidade) => {
          return (
            <li
              key={cidade.id}
              id={cidade.id}
              className="botao-menu-cidades"
              onClick={handleClick}
            >
              <span>{cidade.nome}</span>
              {cidade === subMenu && <MenuPraias praias={cidade.praias} />}
            </li>
          );
        })}
      </ul>
    );
  }
};

export default MenuCidades;
