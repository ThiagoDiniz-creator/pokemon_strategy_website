import {
  Avatar,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlusIcon from "../plus-icon/plus-icon.component";
import SearchBox from "../search-box/search-box.component";
import { generateRandomIdentifier, getShortList } from "../../utils/pokemonList";
import CardList from "../card-list/card-list.component";
import { useEffect } from "react";
import MinusIcon from "../minus-icon/minus-icon.component";
import "./advanced-pokemon-selector.styles.css";

const AdvancedPokemonSelector = ({ addPokemon, limit, pokemonList, title }) => {
  const list = pokemonList ? pokemonList : getShortList();
  const [filteredList, setFilteredList] = useState(list);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [isVisible, setVisibility] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredList(
      list.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return isVisible && filteredList !== undefined ? (
    <Dialog fullWidth open={isVisible} maxWidth="lg">
      <DialogContent>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "fit-content",
            width: "100%",
          }}
        >
          <Typography variant="h4">
            {title ? title : "Choose your Pokemon"}
          </Typography>

          <MinusIcon
            style={{
              height: "fit-content",
            }}
            handleClick={() => setVisibility(false)}
          />
        </Container>
        <Container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Container sx={{ width: "100%" }}>
            <SearchBox
              handleChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </Container>
          <CardList
            pokemonList={filteredList}
            limit={5}
            style={{ height: "fit-content" }}
            handleClick={(clickedPokemon) => {
              if (selectedPokemons.length < limit) {
                clickedPokemon.randomIdentifier = generateRandomIdentifier();
                setSelectedPokemons([...selectedPokemons, {...clickedPokemon}]);
              }
            }}
          />
        </Container>
      </DialogContent>
      <DialogActions>
        <Container disableGutters sx={{ display: "flex" }}>
          <Stack
            sx={{
              border: "1px solid #c0c0c0",
              flexGrow: 1,
              height: "12vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "4px",
              borderRadius: "12px",
              flexDirection: "row",
            }}
          >
            {selectedPokemons.map((pokemonIterator, idx) => (
              <Avatar
                onClick={() => {
                  const index = selectedPokemons.findIndex((p) => p.randomIdentifier === pokemonIterator.randomIdentifier);
                  if(index !== -1){
                    const arrayRef = [...selectedPokemons];
                    arrayRef.splice(index, 1);
                    setSelectedPokemons(arrayRef);
                  }
                }}
                sx={{
                  width: "96px",
                  height: "fit-content",
                  border: "1px solid #c0c0c0",
                }}
                src={pokemonIterator.sprite}
                key={"KEY_" + pokemonIterator.sprite + idx}
              />
            ))}
          </Stack>
          <Button
            sx={{ marginLeft: "8px" }}
            variant="contained"
            color="error"
            onClick={() => setSelectedPokemons([])}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              selectedPokemons.map((p) => addPokemon(p.id));
              setSelectedPokemons([]);
              setVisibility(false);
            }}
          >
            Confirm
          </Button>
        </Container>
      </DialogActions>
    </Dialog>
  ) : (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <Container
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
                }}
      >
        <PlusIcon
          style={{ width: "50px", color: "green", margin: "auto" }}
          handleClick={() => setVisibility(true)}
        />
      </Container>
    </Grow>
  );
};

export default AdvancedPokemonSelector;
