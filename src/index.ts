import "./styles.css";
import { data, data2 } from "./sample";

function jsToString(val, acc = "") {
  switch (typeof val) {
    case "object":
      if (Array.isArray(val)) {
        acc += "[";
        acc += val.map((item) => jsToString(item, "")).join(", ");
        acc += "]";
      } else {
        acc += "{";
        acc += Object.entries(val)
          .map(([key, value]) => `${key}: ${jsToString(value, "")}`)
          .join(", ");
        acc += "}";
      }
      break;
    case "string":
      acc += JSON.stringify(val);
      break;
    case "number":
      acc += val;
      break;
    default:
      throw new Error("Unknown type!!");
  }
  return acc;
}

type SECURITY_CONTROL_PRIORITY = {
  LOW: "LOW";
  MEDIUM: "MEDIUM";
  HIGH: "HIGH";
};

type TTask = {
  key: string;
  frameworkId: number;
  referenceNo: string;
  domain: string;
  name: string;
  description: string;
  order: number;
  priority?: SECURITY_CONTROL_PRIORITY;
  children?: TTask[];
};

function buildSecurityTasks(objList) {
  const frameworkId = 1;
  const tasks = [] as TTask[];

  objList.forEach((value, idx) => {
    console.log(value);

    const { name, description, order, priority } = value;

    const [parentOrder, childOrder] = order.split(".");
    const parentNo = Number(parentOrder);
    const childNo = !!Number(childOrder);

    console.log({ parentNo, childNo });

    const isParent = !childNo;
    const realOrder = idx + 1;

    const newTask: TTask = {
      key: `NIST_${realOrder}`,
      frameworkId,
      referenceNo: "",
      domain: "",
      name,
      description,
      order: realOrder,
      children: [],
    };

    if (isParent) {
      tasks.push(newTask);
    } else {
      const parentObj = tasks[tasks.length - 1];
      newTask.priority = priority;
      delete newTask.children;
      parentObj.children!.push(newTask);
    }
  });
  return tasks;
}

const output = buildSecurityTasks(data2);

document.getElementById("app").innerHTML = `
  ${jsToString(output)}
`;
