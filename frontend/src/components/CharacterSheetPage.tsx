import React, { Component } from "react";
import Sheet from "./Sheet";

const initialSheet = {
  description: {
    name: "",
    player: "",
    chronicle: "",
    nature: "",
    demeanor: "",
    clan: "",
    generation: "",
    haven: "",
    sire: "",
    concept: "",
  },

  attributes: {
    strength: 0,
    dexterity: 0,
    stamina: 0,
    charisma: 0,
    manipulation: 0,
    appearance: 0,
    perception: 0,
    intelligence: 0,
    wits: 0,
  },

  abilities: {
    alertness: 0,
    athletics: 0,
    awareness: 0,
    brawl: 0,
    empathy: 0,
    expression: 0,
    intimidation: 0,
    leadership: 0,
    streetwise: 0,
    subterfuge: 0,
    animalken: 0,
    crafts: 0,
    drive: 0,
    etiquette: 0,
    firearms: 0,
    larceny: 0,
    melee: 0,
    performance: 0,
    stealth: 0,
    survival: 0,
    academics: 0,
    computer: 0,
    finance: 0,
    investigation: 0,
    law: 0,
    medicine: 0,
    occult: 0,
    politics: 0,
    science: 0,
    technology: 0,
  },

  disciplines: {
    disciplineOne: 0,
    disciplineTwo: 0,
    disciplineThree: 0,
    disciplineFour: 0,
    disciplineFive: 0,
    disciplineSix: 0,
  },

  backgrounds: {
    backgroundOne: 0,
    backgroundTwo: 0,
    backgroundThree: 0,
    backgroundFour: 0,
    backgroundFive: 0,
    backgroundSix: 0,
  },

  virtues: {
    conscienceConviction: 0,
    selfControlInstinct: 0,
    courage: 0,
  },

  humanities: {
    humanity: 0,
  },

  bloodpools: {
    bloodpool: 0,
  },

  willpowers: {
    willpower: 0,
    willpowerChx: 0,
  },
};

type SheetState = typeof initialSheet;

export type Description = typeof initialSheet.description;
export type DescriptionKey = keyof Description;

export type Humanities = typeof initialSheet.humanities;
export type Humanity = keyof Humanities;

export type Willpowers = typeof initialSheet.willpowers;
export type Willpower = keyof Willpowers;

export type Bloodpools = typeof initialSheet.bloodpools;
export type Bloodpool = keyof Bloodpools;

export type Attributes = typeof initialSheet.attributes;
export type Attribute = keyof Attributes;

// const { talents } = initialSheet.abilities;
// export type Talent = keyof typeof talents;
// export const TALENTS: Talent[] = Object.keys(talents).sort() as Talent[];

// const { skills } = initialSheet.abilities;
// export type Skill = keyof typeof skills;
// export const SKILLS: Skill[] = Object.keys(skills).sort() as Skill[];

// const { knowledges } = initialSheet.abilities;
// export type Knowledge = keyof typeof knowledges;
// export const KNOWLEDGES: Knowledge[] = Object.keys(
//   knowledges
// ).sort() as Knowledge[];

export type Abilities = typeof initialSheet.abilities;
export type Ability = keyof Abilities;

export type Disciplines = typeof initialSheet.disciplines;
export type Discipline = keyof Disciplines;

export type Backgrounds = typeof initialSheet.backgrounds;
export type Background = keyof Backgrounds;

export type Virtues = typeof initialSheet.virtues;
export type Virtue = keyof Virtues;

class CharacterSheetPage extends Component<{}, SheetState> {
  state = initialSheet;

  changeDescription = (prop: DescriptionKey, newValue: string) => {
    const description = this.state.description;
    const newDescription = { ...description, [prop]: newValue };
    this.setState({
      description: newDescription,
    });
  };

  updateAttribute = (attr: Attribute, newValue: number) => {
    const attributes = this.state.attributes;
    const newAttributes = { ...attributes, [attr]: newValue };
    this.setState({
      attributes: newAttributes,
    });
  };

  updateAbility = (ab: Ability, newValue: number) => {
    const abilities = this.state.abilities;
    const newAbilities = { ...abilities, [ab]: newValue };
    this.setState({
      abilities: newAbilities,
    });
  };

  updateBackground = (back: Background, newValue: number) => {
    const backgrounds = this.state.backgrounds;
    const newBackgrounds = { ...backgrounds, [back]: newValue };
    this.setState({
      backgrounds: newBackgrounds,
    });
  };

  updateDiscipline = (disc: Discipline, newValue: number) => {
    const disciplines = this.state.disciplines;
    const newDisciplines = { ...disciplines, [disc]: newValue };
    this.setState({
      disciplines: newDisciplines,
    });
  };

  updateVirtue = (vir: Virtue, newValue: number) => {
    const virtues = this.state.virtues;
    const newVirtues = { ...virtues, [vir]: newValue };
    this.setState({
      virtues: newVirtues,
    });
  };

  updateHumanities = (hum: Humanity, newValue: number) => {
    const humanities = this.state.humanities;
    const newHumanities = { ...humanities, [hum]: newValue };
    this.setState({
      humanities: newHumanities,
    });
  };

  updateBloodpools = (blood: Bloodpool, newValue: number) => {
    const bloodpools = this.state.bloodpools;
    const newBloodpools = { ...bloodpools, [blood]: newValue };
    this.setState({
      bloodpools: newBloodpools,
    });
  };

  updateWillpowers = (hum: Willpower, newValue: number) => {
    const willpowers = this.state.willpowers;
    const newWillpowers = { ...willpowers, [hum]: newValue };
    this.setState({
      willpowers: newWillpowers,
    });
  };

  render() {
    return (
      <div>
        <Sheet
          {...this.state}
          changeDescription={this.changeDescription}
          updateAttribute={this.updateAttribute}
          updateAbility={this.updateAbility}
          updateDiscipline={this.updateDiscipline}
          updateBackground={this.updateBackground}
          updateVirtue={this.updateVirtue}
          updateHumanities={this.updateHumanities}
          updateBloodpools={this.updateBloodpools}
          updateWillpowers={this.updateWillpowers}
        />
      </div>
    );
  }
}

export default CharacterSheetPage;
