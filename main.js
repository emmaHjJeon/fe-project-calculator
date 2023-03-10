let left = null,
  rigth = null,
  oper = null,
  res = false;

function save() {
  const topInpEl = document.getElementById("top-inp");
  topInpEl.value = "";

  if (left === null) {
    return;
  }
  topInpEl.value += left + " ";

  if (oper === null) {
    return;
  }
  topInpEl.value += oper + " ";

  if (right === null) {
    return;
  }
  topInpEl.value += right + " ";

  if (res) {
    let res = "";

    switch (oper) {
      case "+":
        res = parseInt(left) + parseInt(right);
        break;
      case "-":
        res = parseInt(left) - parseInt(right);
        break;
      case "*":
        res = parseInt(left) * parseInt(right);
        break;
      case "/":
        res = parseInt(left) / parseInt(right);
        break;
    }
  }

  value += "= " + res;
  topInpEl.value = value;
}

function inputNum(num) {
  if (oper === null) {
    if (left === null) {
      left = `${num}`;
    } else {
      if (num === 0 && parseInt(left) === 0) {
        return;
      }
      left += `${num}`;
    }
  } else {
    if (right === null) {
      right = `${num}`;
    } else {
      right += `${num}`;
    }
  }

  save();
}

function inputOper(op) {
  switch (op) {
    case "+":
      if (left === null) {
        left = "+";
      } else if (oper === null) {
        oper = op;
      } else if (right === null) {
        right = op;
      }
      break;

    case "-":
      if (left === null) {
        left = "-";
      } else if (oper === null) {
        oper = op;
      } else if (right === null) {
        right = op;
      }
      break;

    case "*":
      oper = op;
      break;

    case "/":
      oper = op;
      break;

    case "=":
      res = true;
      break;
  }
  save();
}
