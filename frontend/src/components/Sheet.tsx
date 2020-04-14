import React, { FC, ReactElement } from "react";
import * as _ from "lodash";
import DescriptionField from "./DescriptionField";
import { NATUREDEMEANOR } from "./NatureDemeanor";
import { CLANS } from "./Clans";
import { BACKGROUNDS } from "./Backgrounds";
import { StatButtons } from "./StatButtons";
import { DISCIPLINES } from "./Disciplines";
import { DataList } from "./DataList";
import {
  Description,
  DescriptionKey,
  Attribute,
  Attributes,
  Ability,
} from "./CharacterSheetPage";

export interface SheetProps {
  description: Description;
  attributes: Attributes;
  changeDescription: (key: DescriptionKey, newVal: string) => void;
  updateAttribute: (attr: Attribute, newVal: number) => void;
}

const PHYSICAL_ATTRS: Attribute[] = ["strength", "dexterity", "stamina"];
const SOCIAL_ATTRS: Attribute[] = ["charisma", "manipulation", "appearance"];
const MENTAL_ATTRS: Attribute[] = ["perception", "intelligence", "wits"];

function elementPops(eleNum: number, ele: ReactElement): ReactElement[] {
  //DO NOT USE FOR DYNAMIC LISTS! User can't Upload / Delete because keys are wrong.
  const eleArray = [];
  for (let i = 0; i < eleNum; i++) {
    _.times;
    eleArray.push(ele);
  }
  return eleArray;
}

const Sheet: FC<SheetProps> = (props) => {
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

  return (
    <>
      <DataList id="natDem" list={NATUREDEMEANOR} />
      <DataList id="clans" list={CLANS} />
      <DataList id={"backgrounds"} list={BACKGROUNDS} />
      <DataList id={"disciplines"} list={DISCIPLINES} />
      <main>
        <h1>Vampire</h1>
        <h4>Description</h4>
        <div className="description">
          <div className="descLeft">
            <DescriptionField
              label="Name:"
              value={props.description.name}
              updateValue={(e) => {
                props.changeDescription("name", e.target.value);
              }}
            />
            <DescriptionField
              label="Player:"
              value={props.description.player}
              updateValue={(e) => {
                props.changeDescription("player", e.target.value);
              }}
            />
            <DescriptionField
              label="Chronicle:"
              value={props.description.chronicle}
              updateValue={(e) => {
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
              updateValue={(e) => {
                props.changeDescription("generation", e.target.value);
              }}
            />

            <DescriptionField
              label="Sire:"
              value={props.description.haven}
              updateValue={(e) => {
                props.changeDescription("sire", e.target.value);
              }}
            />

            <DescriptionField
              label="Concept:"
              value={props.description.concept}
              updateValue={(e) => {
                props.changeDescription("concept", e.target.value);
              }}
            />
          </div>
        </div>
        <h2>Attributes</h2>
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

        <h2>Abilities</h2>
        <div className="allAbs">
          <div className="abilitiesLeft">
            <h3>Talents</h3>
            <h4>
              Alertness
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Athletics
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Awareness
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Brawl
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Empathy
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Expression
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Intimidation
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Leadership
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Streetwise
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Subterfuge
              <StatButtons value={3} update={() => {}} />
            </h4>
          </div>

          <div className="abilitiesMid">
            <h3>Skills</h3>
            <h4>
              AnimalKen
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Crafts
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Drive
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Etiquette
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Firearms
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Larceny
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Melee
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Performance
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Stealth
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Survival
              <StatButtons value={3} update={() => {}} />
            </h4>
          </div>

          <div className="abilitiesRight">
            <h3>Knowledges</h3>
            <h4>
              Academics
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Computer
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Finance
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Investigation
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Law
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Medicine
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Occult
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Politics
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Science
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Technology
              <StatButtons value={3} update={() => {}} />
            </h4>
          </div>
        </div>
        <h2>Advantages</h2>
        <div className="allAdv">
          <div className="disciplines">
            <h3>Disciplines</h3>

            <input list="disciplines" />
            <StatButtons value={3} update={() => {}} />
            <input list="disciplines" />
            <StatButtons value={3} update={() => {}} />
            <input list="disciplines" />
            <StatButtons value={3} update={() => {}} />
            <input list="disciplines" />
            <StatButtons value={3} update={() => {}} />
            <input list="disciplines" />
            <StatButtons value={3} update={() => {}} />
            <input list="disciplines" />
            <StatButtons value={3} update={() => {}} />
          </div>

          <div className="backgrounds">
            <h3>Backgrounds</h3>

            <input list="backgrounds" />
            <StatButtons value={3} update={() => {}} />
            <input list="backgrounds" />
            <StatButtons value={3} update={() => {}} />
            <input list="backgrounds" />
            <StatButtons value={3} update={() => {}} />
            <input list="backgrounds" />
            <StatButtons value={3} update={() => {}} />
            <input list="backgrounds" />
            <StatButtons value={3} update={() => {}} />
            <input list="backgrounds" />
            <StatButtons value={3} update={() => {}} />
          </div>

          <div className="virtues">
            <h3>Virtues</h3>
            <h4>
              Conscience / Convicton
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Self-Control / Instinct
              <StatButtons value={3} update={() => {}} />
            </h4>
            <h4>
              Courage
              <StatButtons value={3} update={() => {}} />
            </h4>
          </div>
        </div>

        <div className="sheetBottom">
          <div className="sheetBottomLeft">
            {/* <textarea rows="35" cols="10"></textarea> */}
          </div>
          <div className="sheetBottomMid">
            <div className="humanity">
              <h3>Humanity</h3>
              <button className="humanitybtn" />
            </div>

            <div className="willpower">
              <h3>Willpower</h3>
              {elementPops(
                10,
                <input type="checkbox" className="willpowerchx" />
              )}
              {/* {elementPops(10, <button className="willpowerBtn" />)} */}
            </div>

            <div className="bloodpool">
              <h3>Blood Pool</h3>
              {elementPops(
                20,
                <input type="checkbox" className="bloodpoolchx" />
              )}
            </div>
          </div>

          <div className="sheetBottomRight">
            <div className="health">
              <h3>Health</h3>
              <div>
                <label htmlFor="bruised">Bruised</label>
                <input name="bruised" type="checkbox" className="healthchx" />
              </div>
              <div>
                <label htmlFor="hurt">Hurt -1</label>
                <input name="hurt" type="checkbox" className="healthchx" />
              </div>
              <div>
                <label htmlFor="injured">Injured -1</label>
                <input name="injured" type="checkbox" className="healthchx" />
              </div>
              <div>
                <label htmlFor="wounded">Wounded -2</label>
                <input name="wounded" type="checkbox" className="healthchx" />
              </div>
              <div>
                <label htmlFor="mauled">Mauled -2</label>
                <input name="mauled" type="checkbox" className="healthchx" />
              </div>
              <div>
                <label htmlFor="crippled">Crippled -5</label>
                <input name="crippled" type="checkbox" className="healthchx" />
              </div>
              <div>
                <label htmlFor="incapacitated">Incapacitated</label>
                <input
                  name="incapacitated"
                  type="checkbox"
                  className="healthchx"
                />
              </div>
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
        update={(newVal) => updateAttribute(attr, newVal)}
      />
    </h4>
  );
};

function titleCase(s: Attribute | Ability): string {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}
