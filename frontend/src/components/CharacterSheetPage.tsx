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
    talents: {
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
    },
    skills: {
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
    },
    knowledges: {
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
  },
};

type SheetState = typeof initialSheet;

export type Description = typeof initialSheet.description;
export type DescriptionKey = keyof Description;

export type Attributes = typeof initialSheet.attributes;
export type Attribute = keyof Attributes;

const { talents } = initialSheet.abilities;
export type Talent = keyof typeof talents;
export const TALENTS: Talent[] = Object.keys(talents).sort() as Talent[];

const { skills } = initialSheet.abilities;
export type Skill = keyof typeof skills;
export const SKILLS: Skill[] = Object.keys(skills).sort() as Skill[];

const { knowledges } = initialSheet.abilities;
export type Knowledge = keyof typeof knowledges;
export const KNOWLEDGES: Knowledge[] = Object.keys(knowledges).sort() as Knowledge[];

export type AbilityKind = keyof typeof initialSheet.abilities;
export type Ability = Talent | Skill | Knowledge;

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

  render() {
    return (
      <div>
        <Sheet
          {...this.state}
          changeDescription={this.changeDescription}
          updateAttribute={this.updateAttribute}
        />
      </div>
    );
  }
}

export default CharacterSheetPage;
