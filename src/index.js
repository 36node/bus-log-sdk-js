import fetch from "@36node/fetch";
import { denormalize } from "@36node/query-normalizr";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = {}) {
    this.base = opt.base || "";
    this.token = opt.token || "";
  }

  /**
   * vehicle's methods
   */
  vehicle = {
    /**
     * create records
     *
     * @param {CreateRecordsRequest} req createRecords request
     * @returns {Promise<CreateRecordsResponse>} The Record created
     */
    createRecords: (req = {}) => {
      const { vehicleId, headers, body } = req;

      if (!vehicleId)
        throw new Error("vehicleId is required for createRecords");
      if (!body) throw new Error("requetBody is required for createRecords");

      return fetch(`${this.base}/vehicles/${vehicleId}/records`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth, ...headers },
      });
    },
    /**
     * List all records of an vehicle
     *
     * @param {ListRecordsRequest} req listRecords request
     * @returns {Promise<ListRecordsResponse>} A paged array of records
     */
    listRecords: (req = {}) => {
      const { vehicleId, query, headers } = req;

      if (!vehicleId) throw new Error("vehicleId is required for listRecords");

      return fetch(`${this.base}/vehicles/${vehicleId}/records`, {
        method: "GET",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
