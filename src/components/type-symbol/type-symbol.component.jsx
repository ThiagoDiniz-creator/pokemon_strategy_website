import "./type-symbol.styles.css";
import React from "react";

const getTypeImage = (typeName) => {
  typeName = typeName.toLowerCase();

  switch (typeName) {
    case "water":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/2048px-Pok%C3%A9mon_Water_Type_Icon.svg.png`;
    case "fire":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/512px-Pok%C3%A9mon_Fire_Type_Icon.svg.png?20200511092324`;
    case "grass":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/640px-Pok%C3%A9mon_Grass_Type_Icon.svg.png`;
    case "ground":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/640px-Pok%C3%A9mon_Ground_Type_Icon.svg.png`;
    case "rock":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/640px-Pok%C3%A9mon_Rock_Type_Icon.svg.png`;
    case "steel":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/640px-Pok%C3%A9mon_Steel_Type_Icon.svg.png`;
    case "ice":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/640px-Pok%C3%A9mon_Ice_Type_Icon.svg.png`;
    case "electric":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/640px-Pok%C3%A9mon_Electric_Type_Icon.svg.png`;
    case "dragon":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/640px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png`;
    case "ghost":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/640px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png`;
    case "psychic":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/640px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png`;
    case "normal":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/640px-Pok%C3%A9mon_Normal_Type_Icon.svg.png`;
    case "fighting":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/640px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png`;
    case "poison":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/640px-Pok%C3%A9mon_Poison_Type_Icon.svg.png`;
    case "bug":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/640px-Pok%C3%A9mon_Bug_Type_Icon.svg.png`;
    case "flying":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/640px-Pok%C3%A9mon_Flying_Type_Icon.svg.png`;
    case "dark":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/640px-Pok%C3%A9mon_Dark_Type_Icon.svg.png`;
    case "fairy":
      return `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/640px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png`;
    default:
      return "Invalid typename";
  }
};

const TypeSymbol = ({ typeName, showName, imageHeight, typeSymbolContainerHeight }) => {
  const typeSymbolImage = `${getTypeImage(typeName)}`;

  return (
    <div
      className="type-symbol-container"
      key={"type-symbol-container" + typeName}
      style={typeSymbolContainerHeight ? {height: typeSymbolContainerHeight} : undefined}
    >
      <img
        src={typeSymbolImage}
        style={imageHeight ? {height: imageHeight} : undefined}
        className="type-symbol__image"
        alt={typeName + "symbol"}
        key={"type-symbol__image" + typeName}
      />
      {showName ? (
        <span
          className="type-symbol__caption"
          key={"type-symbol__caption" + typeName}
        >
          {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
        </span>
      ) : undefined}
    </div>
  );
};

export default TypeSymbol;
