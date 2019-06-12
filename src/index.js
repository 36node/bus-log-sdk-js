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
    if (this.token) {
      return `Bearer ${this.token}`;
    }

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token fro authorization
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
     * List all records of an vehicle
     *
     * @param {ListRecordsRequest} req listRecords request
     * @returns {Promise<ListRecordsResponse>} A paged array of records
     */
    listRecords: (req = {}) => {
      const { vehicleId, query, headers } = req;

      if (!vehicleId) throw new Error("vehicleId is required for listRecords");
      return fetch(`${this.base}/vehicles/${vehicleId}/records`, {
        method: "get",
        query: denormalize(query),
        headers: { Authorization: this.auth, ...headers },
      });
    },
  };
}
