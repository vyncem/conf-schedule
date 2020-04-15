import { helper } from "@ember/component/helper";

export default helper(function formatTime(params /*, hash*/) {
  let time = Date.parse(params[0]);
  let formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric"
  });
  return formatter.format(time);
});