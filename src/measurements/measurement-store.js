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
  let measurement = data.find(measurement => measurement.getMetric('timestamp').getTime() === timestamp.getTime());
  if (measurement) {
      return measurement;
  } else {
      throw new HttpError(404);
  }
}

/**
 * Get the measurements within the given date range
 * @param {Date} start Lower bound for the query, inclusive
 * @param {Date} end Upper bound for the query, exclusive
 */
export function queryDateRange(from, to) {
  let startIndex = -1;
  for (let i = 0; i < data.length; i++) {
      let measurement = data[i];
      let date = measurement.getMetric('timestampe');
      if (from >= date && ) {
          startIndex = i;
      }
  }
  
  throw new HttpError(501);
}
