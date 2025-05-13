import React, { useContext } from "react";

import { PlayerContext } from "../../../context/PlayerContext";

export default function HomeViewModel() {
  const { players: players, getPlayer: getPlayers } = useContext(PlayerContext);

  return {
    players,
  };
}
