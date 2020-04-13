import React, { FC } from "react";
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

const Sheet: FC<SheetProps> = (props) => {
  const attrGroup = (attrs: Attribute[]) => {
    return attrs.map((attr) => (
      <AttrField
        attr={attr}
        attributes={props.attributes}
        updateAttribute={props.updateAttribute}
      />
    ));
  };

  return (
    <>
      <h1>Vampire</h1>

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

      <div className="midHeader">
        Nature:
        <input name="Nature" list="natDem" />
        <DataList id="natDem" list={NATUREDEMEANOR} />
      </div>
      <div className="midHeader">
        Demeanor:
        <input name="demeanor" list="natDem" />
      </div>
      <div className="midHeader">
        Clan:
        <input list="clans" />
        <DataList id="clans" list={CLANS} />
      </div>
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

      <div className="allAtts">
        <h2>Attributes</h2>
        <div className="attributes">
          <h3>Physical</h3>
          {attrGroup(PHYSICAL_ATTRS)}
        </div>

        <div className="attributes">
          <h3>Social</h3>
          {attrGroup(SOCIAL_ATTRS)}
        </div>

        <div className="attributes">
          <h3>Mental</h3>
          {attrGroup(MENTAL_ATTRS)}
        </div>
      </div>

      <div className="allAbs">
        <h2>Abilities</h2>
        <div className="abilities">
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

        <div className="abilities">
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

        <div className="abilities">
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

      <div className="allAdv">
        <h2>Advantages</h2>
        <div className="disciplines">
          <h3>Disciplines</h3>
          <DataList id={"disciplines"} list={DISCIPLINES} />

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
      </div>

      <div className="backgrounds">
        <h3>Backgrounds</h3>
        <DataList id={"backgrounds"} list={BACKGROUNDS} />
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
        <div>
          <h3>
            Humanity
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
            <button className="humanitybtn" />
          </h3>
          <h3>
            Willpower
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <button className="willpowerbtn" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
            <input type="checkbox" className="willpowerchx" />
          </h3>
          <h3>
            Blood Pool
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
            <input type="checkbox" className="bloodpool" />
          </h3>
          <h3>
            Health
            <h5>
              Bruised
              <input type="checkbox" className="healthchx" />
            </h5>
            <h5>
              Hurt -1
              <input type="checkbox" className="healthchx" />
            </h5>
            <h5>
              Injured -1
              <input type="checkbox" className="healthchx" />
            </h5>
            <h5>
              Wounded -2
              <input type="checkbox" className="healthchx" />
            </h5>
            <h5>
              Mauled -2
              <input type="checkbox" className="healthchx" />
            </h5>
            <h5>
              Crippled -5
              <input type="checkbox" className="healthchx" />
            </h5>
            <h5>
              Incapacitated <input type="checkbox" className="healthchx" />
            </h5>
          </h3>

          <h3>Weakness</h3>
          <h3>
            Experience <input type="number" />
          </h3>
        </div>
      </div>
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
