import Pocketbase from 'pocketbase';
import type {
    TestCollectionResponse
} from "@/pocketbase-types";

export const pb = new Pocketbase(import.meta.env.VITE_URL_POCKETBASE)


export async function allCommand() {
    const lesdonnees = await pb.collection('testCollection').getFullList<TestCollectionResponse>();
    return lesdonnees;
}