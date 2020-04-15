import Route from "@ember/routing/route";
import fetch from "fetch";

export default class ApplicationRoute extends Route {
  async model() {
    let response = await fetch(
      "https://api.airtable.com/v0/appLoqTOTMYIeMXV2/events?maxRecords=100&view=Grid%20view",
      { headers: {Authorization: "Bearer keynoc6jqh3XSpBkF" }});
    let data = await response.json();
    return data.records;
  }
}
