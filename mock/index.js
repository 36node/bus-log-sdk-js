const { generateRecords } = require("./vehicle");

const myRouter = (req, res, next) => {
  /** example */
  // if (req.path === "/sessions" && req.method === "POST") {
  //   req.body.token = TOKEN;
  // }
  next();
};

const rewrites = { "/vehicles/*/records*": "/vehicleRecords$2" };

/**
 * mock log service
 *
 * @param {object} opts 参数
 * @param {number} opts.vechileRecordsCount 参数 max 100000
 */
function mock({ vechileRecordsCount = 100 }) {
  return {
    /**
     * mock data
     */
    db: {
      vehicleRecords: generateRecords(vechileRecordsCount),
    },

    /**
     * rewrite
     */
    rewrites,

    routers: [myRouter],
  };
}

module.exports = mock;
