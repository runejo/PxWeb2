/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Problem = {
    /**
     * An absolute URI that identifies the problem type.  When dereferenced,
     * it SHOULD provide human-readable documentation for the problem type
     * (e.g., using HTML).
     *
     */
    type?: string;
    /**
     * A short, summary of the problem type. Written in english and readable
     * for engineers (usually not suited for non technical stakeholders and
     * not localized); example: Service Unavailable
     *
     */
    title?: string;
    /**
     * The HTTP status code generated by the origin server for this occurrence
     * of the problem.
     *
     */
    status?: number;
    /**
     * A human readable explanation specific to this occurrence of the
     * problem.
     *
     */
    detail?: string;
    /**
     * An absolute URI that identifies the specific occurrence of the problem.
     * It may or may not yield further information if dereferenced.
     *
     */
    instance?: string;
};

