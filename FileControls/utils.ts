import Cookies from "universal-cookie";
import moment from "moment";

const setCookie = (key: string, value: string) => {
  const cookies = new Cookies();
  cookies.set(key, value, { path: "/" });
};

const autoHypenPhone = (phone: string) => {
  let tel = "";
  const str = phone.replace(/[^0-9]/g, "");
  const seoul = phone.substring(0, 2).indexOf("02") === 0 ? 1 : 0;
  if (seoul === 1 && phone.length > 12) return phone.substr(0, 12);
  else {
    if (str.length < 4 - seoul) {
      return str;
    } else if (str.length < 7 - seoul) {
      tel += str.substr(0, 3 - seoul);
      tel += "-";
      tel += str.substr(3 - seoul);
      return tel;
    } else if (str.length < 11 - seoul) {
      tel += str.substr(0, 3 - seoul);
      tel += "-";
      tel += str.substr(3 - seoul, 3);
      tel += "-";
      tel += str.substr(6 - seoul);
      return tel;
    } else {
      tel += str.substr(0, 3 - seoul);
      tel += "-";
      tel += str.substr(3 - seoul, 4);
      tel += "-";
      tel += str.substr(7 - seoul);
      return tel;
    }
  }
};

const inputTelNumber = (value: string) => {
  if (value.length > 13) return value.substr(0, 13);
  else {
    const returnValue = value.trim();
    return autoHypenPhone(returnValue);
  }
};

const getPeriodParams = (
  start: moment.MomentInput,
  end: moment.MomentInput,
  type?: "created" | "updated"
) => {
  let _start = start ? moment(start) : moment();
  let _end = end ? moment(end) : moment();

  if (_end.diff(_start) < 0) {
    _end = _start;
  }

  _start = _start.startOf("day");
  _end = _end.endOf("day");

  return { between: [_start, _end] };
};

const getWhere = (condition: {
  start?: any;
  end?: any;
  periodType?: "updated" | "created";
  targets?: string[];
  keyword?: string;
  [key: string]: any;
}): { [key: string]: any } => {
  const {
    start,
    end,
    targets,
    keyword,
    periodType = "created",
    ...rest
  } = condition;

  let where: { [key: string]: any } = rest;

  // add period
  if (start && end) {
    where[periodType] = {
      ...getPeriodParams(start, end, periodType),
      ...(rest[periodType] || {}),
    };
  }

  // add keyword : targets로 들어온 key값을 모두 검색합니다
  if (keyword && targets && targets.length) {
    if (!where.or) where.or = [];
    targets.forEach((target) => {
      where.or.push({ [target]: { like: keyword, options: "i" } });
    });
  }

  return where;
};

const getFilter = (filter: {
  skip: number;
  limit: number;
  order: string | string[];
  where: {
    [key: string]: any;
  };
  page: number;
  size: number;
}) => {
  if (!filter) {
    return {
      skip: 0,
      limit: 10,
      order: ["updated DESC"],
      where: {},
    };
  } else {
    const { where = {}, page = 1, size = 10, order = "updated DESC" } = filter;
    return {
      order,
      skip: page ? (page - 1) * size : 0,
      limit: size,
      where: getWhere(where),
    };
  }
};

const isEmpty = (obj: any) => {
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  if (typeof obj !== "object") return true;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const makeid = (length: number) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
