import TeamCard from "@/component/cards/TeamCard";
import TeamCards from "@/component/cards/TeamCards";
import React from "react";

import { team } from "@/constants";

const About = () => {
  return (
    <>
      <div>About</div>
      <div className="w-52">
        <TeamCard index={2} item={team[0]} />
      </div>
    </>
  );
};

export default About;
