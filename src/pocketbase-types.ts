import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
    TestCollection = "testCollection",
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
    id: RecordIdString;
    created: IsoDateString;
    updated: IsoDateString;
    collectionId: string;
    collectionName: Collections;
    expand?: T;
};

// Record type for TestCollection
export type TestCollectionRecord = {
    text?: string;
    image?: string;  // Assuming the image is stored as a string URL
};

// Response type for TestCollection
export type TestCollectionResponse<Texpand = unknown> = Required<TestCollectionRecord> & BaseSystemFields<Texpand>;

// Types containing all Records and Responses
export type CollectionRecords = {
    testCollection: TestCollectionRecord;
};

export type CollectionResponses = {
    testCollection: TestCollectionResponse;
};