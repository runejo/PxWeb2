// /* generated using openapi-typescript-codegen -- do no edit */
// /* istanbul ignore file */
// /* tslint:disable */
// /* eslint-disable */
// import type { extension_dimension } from './extension_dimension';
// import type { extension_root } from './extension_root';
// import type { href } from './href';
// import type { jsonstat_category } from './jsonstat_category';
// import type { jsonstat_extension_link } from './jsonstat_extension_link';
// import type { jsonstat_link } from './jsonstat_link';
// import type { jsonstat_note } from './jsonstat_note';
// import type { label } from './label';
// import type { source } from './source';
// import type { strarray } from './strarray';
// import type { updated } from './updated';
// /**
//  * Representation of TableMetaData/TableData according to JSON-stat 2.0 Dataset Schema (2018-09-05 10:55), see full specification of JSON-stat format [here](https://json-stat.org/full/)
//  *
//  * Properties in **extension** are mostly from PX-file format, see [PX file format](https://www.scb.se/en/services/statistical-programs-for-px-files/px-file-format/)
//  *
//  */
// export type Dataset = {
//     /**
//      * JSON-stat version 2.0
//      */
//     version: Dataset.version;
//     /**
//      * Is always dataset
//      */
//     class: Dataset.class;
//     href?: href;
//     label?: label;
//     source?: source;
//     updated?: updated;
//     link?: jsonstat_link;
//     /**
//      * Note for table
//      */
//     note?: jsonstat_note;
//     /**
//      * Specification on json-stat.org -> [here](https://json-stat.org/full/#role)
//      */
//     role?: {
//         /**
//          * Specification on json-stat.org -> [here](https://json-stat.org/full/#time)
//          */
//         time?: strarray;
//         /**
//          * Specification on json-stat.org -> [here](https://json-stat.org/full/#geo)
//          */
//         geo?: strarray;
//         /**
//          * Specification on json-stat.org -> [here](https://json-stat.org/full/#metric)
//          */
//         metric?: strarray;
//     };
//     /**
//      * Specification on json-stat.org -> [here](https://json-stat.org/full/#id)
//      */
//     id: strarray;
//     /**
//      * Specification on json-stat.org -> [here](https://json-stat.org/full/#size)
//      */
//     size: Array<number>;
//     /**
//      * Specification on json-stat.org -> [here](https://json-stat.org/full/#dimension)
//      */
//     dimension: Record<string, {
//         /**
//          * Specification on json-stat.org -> [here](https://json-stat.org/full/#label)
//          */
//         label?: label;
//         /**
//          * Notes for variable
//          */
//         note?: jsonstat_note;
//         /**
//          * Specification on json-stat.org -> [here](https://json-stat.org/full/#category)
//          */
//         category?: jsonstat_category;
//         extension?: extension_dimension;
//         link?: jsonstat_extension_link;
//     }>;
//     extension?: extension_root;
//     /**
//      * Specification on json-stat.org -> [here](https://json-stat.org/full/#value)
//      */
//     value: Array<number | null> | null;
//     /**
//      * Specification on json-stat.org -> [here](https://json-stat.org/full/#status)
//      */
//     status?: Record<string, string>;
// };
// export namespace Dataset {
//     /**
//      * JSON-stat version 2.0
//      */
//     export enum version {
//         _2_0 = '2.0',
//     }
//     /**
//      * Is always dataset
//      */
//     export enum class {
//         DATASET = 'dataset',
//     }
// }

