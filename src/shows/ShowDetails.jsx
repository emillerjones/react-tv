import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";


/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  const [selectedEpisode, setSelectedEpisode] = useState();
  if (!show) {
    return (
      <section className="show-details">
        <h2>show Details</h2>
        <p>Select a show buddy!</p>
      </section>
    );
  }

  return (
    <section className="show-details">
      <EpisodeList 
         name = {show.name}
         episodes = {show.episodes}
         selectedEpisode = {selectedEpisode}
         setSelectedEpisode = {setSelectedEpisode}
         />
      <EpisodeDetails episode = {selectedEpisode}/>
    </section>
  );



}
