"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * {@link OptionalSearchParameters} serves as a data class holding location parameters for image search
 */
class OptionalSearchParameters {
    /**
     * {@link OptionalSearchParameters} class constructor
     * @param searchRegion Optional {@link Region} to limit the search space to
     * @param confidence Optional confidence value to configure image match confidence
     * @param searchMultipleScales Optional flag to indicate if the search should be conducted at different scales
     */
    constructor(searchRegion, confidence, searchMultipleScales) {
        this.searchRegion = searchRegion;
        this.confidence = confidence;
        this.searchMultipleScales = searchMultipleScales;
    }
}
exports.OptionalSearchParameters = OptionalSearchParameters;
//# sourceMappingURL=optionalsearchparameters.class.js.map