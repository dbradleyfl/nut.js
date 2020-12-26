import { Region } from "./region.class";
/**
 * {@link OptionalSearchParameters} serves as a data class holding location parameters for image search
 */
export declare class OptionalSearchParameters {
    searchRegion?: Region | undefined;
    confidence?: number | undefined;
    searchMultipleScales?: boolean | undefined;
    /**
     * {@link OptionalSearchParameters} class constructor
     * @param searchRegion Optional {@link Region} to limit the search space to
     * @param confidence Optional confidence value to configure image match confidence
     * @param searchMultipleScales Optional flag to indicate if the search should be conducted at different scales
     */
    constructor(searchRegion?: Region | undefined, confidence?: number | undefined, searchMultipleScales?: boolean | undefined);
}
//# sourceMappingURL=optionalsearchparameters.class.d.ts.map