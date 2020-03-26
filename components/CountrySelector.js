import useStats from "../utils/useStats";
import { useState } from "react";
import Stats from "../components/Stats";

import styled from "styled-components";

const SelectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-grap: 1rem;
`;

const Select = styled.select`
  width: 100%;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 25px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("TUR");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div>
      <SelectGrid>
        <h2>Currently Showing {selectedCountry}</h2>
        <Select
          onChange={e => {
            setSelectedCountry(e.target.value);
          }}
        >
          {Object.entries(countries.countries).map(([key, country]) => {
            return (
              <option
                key={key}
                value={country.iso3}
                selected={selectedCountry === country.iso3}
              >
                {country.name}
              </option>
            );
          })}
        </Select>
      </SelectGrid>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
