import { Factory } from "miragejs";
import faker from "faker";

export default {
  task: Factory.extend({
    name(i) {
      return faker.fake("{{lorem.sentence}}");
    },
    createdTs(i) {
      return Date.now() - (i + 1) * 1800 * 1000;
    },
    lastUpdatedTs(i) {
      return Date.now() - i * 3600 * 1000;
    },
    status() {
      return "RUNNING";
    },
    type() {
      let dice = Math.random();
      if (dice < 0.33) {
        return "DDL";
      } else if (dice < 0.66) {
        return "DML";
      } else {
        return "OPS";
      }
    },
    content() {
      return faker.fake("{{lorem.paragraphs}}");
    },
    currentStageId() {
      return "1";
    },
    stageProgressList() {
      return [
        {
          stageId: "1",
          stageName: "Stage Foo",
          status: "DONE",
        },
      ];
    },
    creator() {
      return {
        id: "100",
        name: "John Appleseed",
      };
    },
    assignee() {
      return {
        id: "200",
        name: "Jim Gray",
      };
    },
    subscriberIdList() {
      return new Array();
    },
  }),
};