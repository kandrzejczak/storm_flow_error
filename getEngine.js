// @flow
import type {EngineType} from "./EngineType";

function getEngine(): EngineType  {
    return {
        alternator: 'xyz_22',
        battery: {
            name: 'battery_22',
            capacity: 5009
        }
    }
}

export default getEngine;
