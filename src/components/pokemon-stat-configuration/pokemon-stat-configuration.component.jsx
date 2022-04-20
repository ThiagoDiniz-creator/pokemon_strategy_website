import React from "react";
import { connect } from "react-redux";

import DescriptionBox from "../description-box/description-box.component";
import { Container, Input, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const PokemonStatConfiguration = () => (
    <DescriptionBox
        isHidden={isHidden}
        lastClick={lastClick}
        title={"Data"}
        subtitle={selectedPokemon ? selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1) : ""}
        children={
            selectedPokemon != false ? (
                <Container>
                    <Container>
                        <Typography>
                            Level
                        </Typography>
                        <Slider defaultValue={5} min={1} max={100} valueLabelDisplay="on" size="small" />
                    </Container>

                    <Container>
                        <Typography sx={{ margin: "auto" }}>
                            Stats and effort points
                        </Typography>
                        {selectedPokemon.stats.map(({ stat, base_stat: baseStat, effort }, idx) => (
                            <Box key={stat.name + selectedPokemon.name} sx={{ display: "flex", justifyContent: "space-around" }}>
                                <Box>
                                    <Typography>
                                        {stat.name.toUpperCase()}
                                    </Typography>
                                    <Input value={recalculateStat(stat.name)} />
                                </Box>
                                <Box sx={{ width: "25%" }}>
                                    <Typography>
                                        Individual Value (IV)
                                    </Typography>
                                    <Slider size="small" defaultValue={1} max={64} min={1} valueLabelDisplay="on" onChange={(event) => {

                                    }} />
                                </Box>
                                <Box sx={{ width: "25%" }}>
                                    <Typography>
                                        Effort Value (IV)
                                    </Typography>
                                    <Slider size="small" defaultValue={1} max={64} min={1} valueLabelDisplay="on" />
                                </Box>
                            </Box>
                        )
                        )
                        }
                    </Container>

                </Container>
            ) : null
        }
    />
)

export default PokemonStatConfiguration;