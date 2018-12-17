import { Measurement } from './measurement';
import { HttpError } from '../errors';

const data = [];

/**
 * Add new measurement
 * @param {Measurement} measurement to be added
 */
export function add(measurement) {
  data.push(measurement);
  throw new HttpError(501);
}

/**
 * Get existing measurement
 * @param {Date} timestamp when measurement was taken
 * @returns {Measurement} measurement for the particular date
 */
export function fetch(timestamp) {
    data.find()
  throw new HttpError(501);
}

/**
 * Get the measurements within the given date range
 * @param {Date} start Lower bound for the query, inclusive
 * @param {Date} end Upper bound for the query, exclusive
 */
export function queryDateRange(from, to) {
  throw new HttpError(501);
}
