import React, { FC, ReactElement } from "react";
import * as _ from "lodash";
import DescriptionField from "./DescriptionField";
import { NATUREDEMEANOR } from "./NatureDemeanor";
import { CLANS } from "./Clans";
import { BACKGROUNDS } from "./Backgrounds";
import { StatButtons } from "./StatButtons";
import { WillButtons } from "./StatButtons";
import { HumButtons } from "./StatButtons";
import { BloodButtons } from "./StatButtons";
import { DISCIPLINES_IMP } from "./Disciplines";
import { DataList } from "./DataList";
import {
  Description,
  DescriptionKey,
  Attribute,
  Attributes,
  Ability,
  Abilities,
  Discipline,
  Disciplines,
  Backgrounds,
  Background,
  Virtue,
  Virtues,
  Humanity,
  Humanities,
  Bloodpool,
  Bloodpools,
  Willpower,
  Willpowers,
  Health,
  Healths,
} from "./CharacterSheetPage";

export interface SheetProps {
  description: Description;
  attributes: Attributes;
  abilities: Abilities;
  disciplines: Disciplines;
  backgrounds: Backgrounds;
  virtues: Virtues;
  humanities: Humanities;
  willpowers: Willpowers;
  bloodpools: Bloodpools;
  healths: Healths;
  changeDescription: (key: DescriptionKey, newVal: string) => void;
  updateAttribute: (attr: Attribute, newVal: number) => void;
  updateAbility: (ab: Ability, newVal: number) => void;
  updateDiscipline: (disc: Discipline, newVal: number) => void;
  updateBackground: (back: Background, newVal: number) => void;
  updateVirtue: (vir: Virtue, newVal: number) => void;
  updateHumanities: (hum: Humanity, newVal: number) => void;
  updateWillpowers: (will: Willpower, newVal: number) => void;
  updateBloodpools: (blood: Bloodpool, newVal: number) => void;
  updateHealths: (health: Health, newVal: number) => void;
}

const PHYSICAL_ATTRS: Attribute[] = ["strength", "dexterity", "stamina"];
const SOCIAL_ATTRS: Attribute[] = ["charisma", "manipulation", "appearance"];
const MENTAL_ATTRS: Attribute[] = ["perception", "intelligence", "wits"];
const TALENT_ABS: Ability[] = [
  "alertness",
  "athletics",
  "awareness",
  "brawl",
  "empathy",
  "expression",
  "intimidation",
  "leadership",
  "streetwise",
  "subterfuge",
];
const SKILLS_ABS: Ability[] = [
  "animalken",
  "crafts",
  "drive",
  "etiquette",
  "firearms",
  "larceny",
  "melee",
  "performance",
  "stealth",
  "survival",
];
const KNOWLEDGES_ABS: Ability[] = [
  "academics",
  "computer",
  "finance",
  "investigation",
  "law",
  "medicine",
  "occult",
  "politics",
  "science",
  "technology",
];
const DISCIPLINES_LIST: Discipline[] = [
  "disciplineOne",
  "disciplineTwo",
  "disciplineThree",
  "disciplineFour",
  "disciplineFive",
  "disciplineSix",
];
const BACKGROUNDS_LIST: Background[] = [
  "backgroundOne",
  "backgroundTwo",
  "backgroundThree",
  "backgroundFour",
  "backgroundFive",
  "backgroundSix",
];
const VIRTUES_LIST: Virtue[] = [
  "conscienceConviction",
  "selfControlInstinct",
  "courage",
];

const HUMANITIES_LIST: Humanity[] = ["humanity"];

const BLOOD_POOL: Bloodpool[] = ["bloodpool"];

const WILLPOWERS: Willpower[] = ["willpower"];

const HEALTHS: Health[] = [
  "bruised",
  "crippled",
  "hurt",
  "incapacitated",
  "injured",
  "mauled",
  "wounded",
];

const Sheet: FC<SheetProps> = props => {
  const attrGroup = (attrs: Attribute[]) => {
    return attrs.map((attr, i) => (
      <AttrField
        key={i}
        attr={attr}
        attributes={props.attributes}
        updateAttribute={props.updateAttribute}
      />
    ));
  };

  const abGroup = (abs: Ability[]) => {
    return abs.map((ab, i) => (
      <AbField
        key={i}
        ab={ab}
        abilities={props.abilities}
        updateAbility={props.updateAbility}
      />
    ));
  };
  const discGroup = (discs: Discipline[]) => {
    return discs.map((disc, i) => (
      <DiscField
        key={i}
        disc={disc}
        disciplines={props.disciplines}
        updateDiscipline={props.updateDiscipline}
      />
    ));
  };
  const backGroup = (backs: Background[]) => {
    return backs.map((back, i) => (
      <BackField
        key={i}
        back={back}
        backgrounds={props.backgrounds}
        updateBackground={props.updateBackground}
      />
    ));
  };

  const virGroup = (virs: Virtue[]) => {
    return virs.map((vir, i) => (
      <VirField
        key={i}
        vir={vir}
        virtues={props.virtues}
        updateVirtue={props.updateVirtue}
      />
    ));
  };

  const humGroup = (hums: Humanity[]) => {
    return hums.map((hum, i) => (
      <HumField
        key={i}
        hum={hum}
        humanities={props.humanities}
        updateHumanities={props.updateHumanities}
      />
    ));
  };

  const bloodGroup = (bloods: Bloodpool[]) => {
    return bloods.map((blood, i) => (
      <BloodField
        key={i}
        blood={blood}
        bloodpools={props.bloodpools}
        updateBloodpools={props.updateBloodpools}
      />
    ));
  };

  const willGroup = (wills: Willpower[]) => {
    return wills.map((will, i) => (
      <WillField
        key={i}
        will={will}
        willpowers={props.willpowers}
        updateWillpowers={props.updateWillpowers}
      />
    ));
  };

  
  TODO: make function, takes number, toggles damage
  const healGroup = (heals: boolean[], toggleDmg: (i: number) => void) => {
    return heals.map((damaged, i) => (
      <input
        type="checkbox"
        key={i}
        checked={damaged}
        onChange={() => toggleDmg(i)}
      />
    ));
  };

  return (
    <>
      <DataList id="natDem" list={NATUREDEMEANOR} />
      <DataList id="clans" list={CLANS} />
      <DataList id={"backgrounds"} list={BACKGROUNDS} />
      <DataList id={"disciplines"} list={DISCIPLINES_IMP} />
      <main>
        <h1>Vampire</h1>
        <h4>Description</h4>
        <div className="description">
          <div className="descLeft">
            <DescriptionField
              label="Name:"
              value={props.description.name}
              updateValue={e => {
                props.changeDescription("name", e.target.value);
              }}
            />
            <DescriptionField
              label="Player:"
              value={props.description.player}
              updateValue={e => {
                props.changeDescription("player", e.target.value);
              }}
            />
            <DescriptionField
              label="Chronicle:"
              value={props.description.chronicle}
              updateValue={e => {
                props.changeDescription("chronicle", e.target.value);
              }}
            />
          </div>

          <div className="descMid">
            <h4>Nature:</h4>
            <input name="nature" list="natDem"></input>
            <h4>Demeanor:</h4>
            <input name="demeanor" list="natDem" />
            <h4>Clans:</h4>
            <input name="clans" list="clans" />
          </div>

          <div className="descRight">
            <DescriptionField
              label="Generation:"
              value={props.description.generation}
              updateValue={e => {
                props.changeDescription("generation", e.target.value);
              }}
            />

            <DescriptionField
              label="Sire:"
              value={props.description.haven}
              updateValue={e => {
                props.changeDescription("sire", e.target.value);
              }}
            />

            <DescriptionField
              label="Concept:"
              value={props.description.concept}
              updateValue={e => {
                props.changeDescription("concept", e.target.value);
              }}
            />
          </div>
        </div>
        <h2>
          <span>Attributes</span>
        </h2>
        <div className="allAtts">
          <div className="attributesLeft">
            <h3 className="attTitle">Physical</h3>
            {attrGroup(PHYSICAL_ATTRS)}
          </div>

          <div className="attributesMid">
            <h3 className="attTitle">Social</h3>
            {attrGroup(SOCIAL_ATTRS)}
          </div>

          <div className="attributesRight">
            <h3 className="attTitle">Mental</h3>
            {attrGroup(MENTAL_ATTRS)}
          </div>
        </div>

        <h2>
          <span>Abilities</span>
        </h2>
        <div className="allAbs">
          <div className="abilitiesLeft">
            <h3>Talents</h3>
            {abGroup(TALENT_ABS)}
          </div>

          <div className="abilitiesMid">
            <h3>Skills</h3>
            {abGroup(SKILLS_ABS)}
          </div>

          <div className="abilitiesRight">
            <h3>Knowledges</h3>
            {abGroup(KNOWLEDGES_ABS)}
          </div>
        </div>
        <h2>
          <span>Advantages</span>
        </h2>
        <div className="allAdv">
          <div className="disciplines">
            <h3>Disciplines</h3>
            {discGroup(DISCIPLINES_LIST)}
          </div>

          <div className="backgrounds">
            <h3>Backgrounds</h3>
            {backGroup(BACKGROUNDS_LIST)}
          </div>

          <div className="virtues">
            <h3>Virtues</h3>
            {virGroup(VIRTUES_LIST)}
          </div>
        </div>

        <div className="sheetBottom">
          <div className="sheetBottomLeft">
            {/* <textarea rows="35" cols="10"></textarea> */}
          </div>
          <div className="sheetBottomMid">
            {humGroup(HUMANITIES_LIST)}
            {willGroup(WILLPOWERS)}
            {bloodGroup(BLOOD_POOL)}
          </div>

          <div className="sheetBottomRight">
            <div className="health">
              <h3>Health</h3>
              {healGroup(HEALTHS)}
            </div>
            <div className="weaknessExperience">
              <h3>Weakness</h3>
              <input type="text" />
              <h3>Experience</h3>
              <input type="number" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sheet;

interface AttrFieldProps {
  attr: Attribute;
  attributes: Attributes;
  updateAttribute: (attr: Attribute, newVal: number) => void;
}

interface AbFieldProps {
  ab: Ability;
  abilities: Abilities;
  updateAbility: (ab: Ability, newVal: number) => void;
}
interface DiscFieldProps {
  disc: Discipline;
  disciplines: Disciplines;
  updateDiscipline: (disc: Discipline, newVal: number) => void;
}
interface BackFieldProps {
  back: Background;
  backgrounds: Backgrounds;
  updateBackground: (back: Background, newVal: number) => void;
}
interface VirFieldProps {
  vir: Virtue;
  virtues: Virtues;
  updateVirtue: (vir: Virtue, newVal: number) => void;
}
interface HumFieldProps {
  hum: Humanity;
  humanities: Humanities;
  updateHumanities: (hum: Humanity, newVal: number) => void;
}

interface WillFieldProps {
  will: Willpower;
  willpowers: Willpowers;
  updateWillpowers: (will: Willpower, newVal: number) => void;
}

interface BloodFieldProps {
  blood: Bloodpool;
  bloodpools: Bloodpools;
  updateBloodpools: (blood: Bloodpool, newVal: number) => void;
}
interface HealFieldProps {
  heal: Health;
  healths: Healths;
  updateHealths: (heal: Health, newVal: number) => void;
}

const AbField: FC<AbFieldProps> = ({ ab, abilities, updateAbility }) => {
  const label = titleCase(ab);
  const value = abilities[ab];
  return (
    <h4>
      {label}
      <StatButtons value={value} update={newVal => updateAbility(ab, newVal)} />
    </h4>
  );
};

const AttrField: FC<AttrFieldProps> = ({
  attr,
  attributes,
  updateAttribute,
}) => {
  const label = titleCase(attr);
  const value = attributes[attr];
  return (
    <h4>
      {label}
      <StatButtons
        value={value}
        update={newVal => updateAttribute(attr, newVal)}
      />
    </h4>
  );
};

const VirField: FC<VirFieldProps> = ({ vir, virtues, updateVirtue }) => {
  const label = titleCase(vir);
  const value = virtues[vir];
  return (
    <h4>
      {label}
      <StatButtons value={value} update={newVal => updateVirtue(vir, newVal)} />
    </h4>
  );
};

const BackField: FC<BackFieldProps> = ({
  back,
  backgrounds,
  updateBackground,
}) => {
  const value = backgrounds[back];
  return (
    <>
      <input list="backgrounds" />
      <StatButtons
        value={value}
        update={newVal => updateBackground(back, newVal)}
      />
    </>
  );
};

const DiscField: FC<DiscFieldProps> = ({
  disc,
  disciplines,
  updateDiscipline,
}) => {
  const value = disciplines[disc];
  return (
    <>
      <input list="disciplines" />
      <StatButtons
        value={value}
        update={newVal => updateDiscipline(disc, newVal)}
      />
    </>
  );
};

const HumField: FC<HumFieldProps> = ({ hum, humanities, updateHumanities }) => {
  const value = humanities[hum];
  const label = titleCase(hum);
  console.log(hum);
  console.log(humanities);
  return (
    <div className="humanity">
      <h3>{label}</h3>
      <HumButtons
        value={value}
        update={newVal => updateHumanities(hum, newVal)}
      />
    </div>
  );
};

const WillField: FC<WillFieldProps> = ({
  will,
  willpowers,
  updateWillpowers,
}) => {
  const value = willpowers["willpower"];
  const value2 = willpowers["willpowerChx"];
  const label = titleCase(will);
  console.log(will);
  console.log(willpowers);
  return (
    <div className="willpower">
      <h3>{label}</h3>
      <WillButtons
        value={value}
        value2={value2}
        update={newVal => updateWillpowers("willpower", newVal)}
        update2={newVal => updateWillpowers("willpowerChx", newVal)}
      />
    </div>
  );
};

const BloodField: FC<BloodFieldProps> = ({
  blood,
  bloodpools,
  updateBloodpools,
}) => {
  const value = bloodpools[blood];
  const label = titleCase(blood);
  return (
    <div className="bloodpool">
      <h3>{label}</h3>
      <BloodButtons
        value={value}
        update={newVal => updateBloodpools(blood, newVal)}
      />
    </div>
  );
};

// const HealField: FC<HealFieldProps> = ({
//   heal,
//   healths,
//   updateHealths,
// })

function titleCase(
  s: Attribute | Ability | Virtue | Humanity | Bloodpool | Willpower
): string {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}
