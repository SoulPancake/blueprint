/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Direction } from "../direction";
import { MovementDelta } from "../movementDelta";

export function directionToDelta(direction: Direction): MovementDelta {
    switch (direction) {
        case Direction.UP:
            return { rows: -1, cols: 0 };
        case Direction.DOWN:
            return { rows: +1, cols: 0 };
        case Direction.LEFT:
            return { rows: 0, cols: -1 };
        case Direction.RIGHT:
            return { rows: 0, cols: +1 };
    }
}
