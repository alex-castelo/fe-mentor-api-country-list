export type Region =
  | "Africa"
  | "America"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "All";

type RegionValues = "africa" | "americas" | "asia" | "europe" | "oceania" | "";

export type RegionOption = {
  text: Region;
  value: RegionValues;
};

export const REGION_OPTIONS: RegionOption[] = [
  { text: "All", value: "" },
  { text: "Africa", value: "africa" },
  { text: "America", value: "americas" },
  { text: "Asia", value: "asia" },
  { text: "Europe", value: "europe" },
  { text: "Oceania", value: "oceania" },
];
